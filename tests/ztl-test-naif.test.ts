/**
 * Corrections des testeurs naïfs du 2026-11-14 (RECETTE §15.8) sur ztlorari.it :
 *  1. le verdict change de couleur : rouge « ZTL attiva / Non entrare senza permesso », vert « Non attiva / Puoi entrare »,
 *     ambre pour les zones qui ne visent que certains véhicules (Area B, Fascia Verde, Area C) ;
 *  2. jour et heure en champs texte gg/mm/aaaa et hh:mm sur 24 h (plus de champ natif « 11/14/2026 », « 05:25 PM ») ;
 *  3. échéances de la multa dans l'ordre des dates (giudice di pace à 30 jours avant le prefetto à 60) ;
 *  4. la zone qui a sa propre page cite cette page et sa date (Fascia Verde : 2 novembre, pas 28 juillet).
 */
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { StatoCalc, MultaCalc, verdetto, leggiData, leggiOra, scriviData } from '../src/components/outils/Tools';
import * as M from '../src/lib/engine';

const stato = (refDay: string, citta = 'roma', zona = 'centro-diurna') =>
  renderToStaticMarkup(createElement(StatoCalc, { lang: 'it', id: 't', refDay, citta, zona }));

describe('verdetto a colori', () => {
  it('lunedì alle 12 la ZTL Centro Storico è attiva: casella rossa, «Non entrare senza permesso»', () => {
    const h = stato('2026-11-16');
    expect(h).toContain('data-tono="rosso"');
    expect(h).toContain('ZTL attiva');
    expect(h).toContain('Non entrare senza permesso.');
    expect(h).toContain('lunedì 16 novembre 2026');
  });
  it('sabato alle 12 la stessa zona è spenta (sab 14–18): casella verde, «Puoi entrare»', () => {
    const h = stato('2026-11-14');
    expect(h).toContain('data-tono="verde"');
    expect(h).toContain('Non attiva');
    expect(h).toContain('Puoi entrare.');
    expect(h).not.toContain('data-tono="rosso"');
  });
  it('Area B e Fascia Verde attive: ambra, il divieto vale solo per i veicoli vietati', () => {
    const roma = M.cittaById('roma')!;
    expect(verdetto(M.zonaDi(roma, 'fascia-verde'), true, 'it')).toMatchObject({ tono: 'ambra', head: 'Divieto in vigore' });
    expect(verdetto(M.zonaDi(roma, 'fascia-verde'), false, 'it').tono).toBe('verde');
    expect(stato('2026-11-16', 'milano', 'area-b')).toContain('data-tono="ambra"');
  });
  it('Fascia Verde cita la sua pagina del 2 novembre 2026, non quella del 28 luglio', () => {
    const h = stato('2026-11-16', 'roma', 'fascia-verde');
    expect(h).toContain('pagina del 2 novembre 2026');
    expect(h).not.toContain('28 luglio 2026');
  });
});

describe('giorno e ora in formato italiano', () => {
  it('nessun campo data o ora nativo; valori 16/11/2026 e 12:00 con aiuto', () => {
    const h = stato('2026-11-16');
    expect(h).not.toMatch(/type="(date|time)"/);
    expect(h).toContain('value="16/11/2026"');
    expect(h).toContain('value="12:00"');
    expect(h).toContain('placeholder="gg/mm/aaaa"');
    expect(h).toContain('Ore e minuti su 24 ore');
  });
  it('legge gg/mm/aaaa, solo cifre e 24 ore; rifiuta le date impossibili', () => {
    expect(leggiData('14/11/2026')).toBe('2026-11-14');
    expect(leggiData('1.3.2027')).toBe('2027-03-01');
    expect(leggiData('14112026')).toBe('2026-11-14');
    expect(leggiData('11/14/2026')).toBe('');
    expect(leggiData('31/02/2026')).toBe('');
    expect(scriviData('2026-11-14')).toBe('14/11/2026');
    expect(leggiOra('17:25')).toBe('17:25');
    expect(leggiOra('1725')).toBe('17:25');
    expect(leggiOra('9')).toBe('09:00');
    expect(leggiOra('17.5')).toBe('');
    expect(leggiOra('24:00')).toBe('');
  });
});

describe('scadenze della multa in ordine di data', () => {
  it('giudice di pace (30 giorni) prima del prefetto (60 giorni)', () => {
    const h = renderToStaticMarkup(createElement(MultaCalc, { lang: 'it', id: 'm', refDay: '2026-11-14' }));
    const g = h.indexOf('Ricorso al giudice di pace'), p = h.indexOf('Ricorso al prefetto');
    expect(g).toBeGreaterThan(0);
    expect(g).toBeLessThan(p);
    expect(h).not.toMatch(/type="date"/);
    expect(h).toContain('value="14/11/2026"');
  });
});
