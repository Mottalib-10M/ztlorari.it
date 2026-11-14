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
import { StatoCalc, MultaCalc, verdetto, motivo, frase, leggiData, leggiOra, scriviData } from '../src/components/outils/Tools';
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
    expect(verdetto(M.zonaDi(roma, 'fascia-verde'), true, 'it')).toMatchObject({ tono: 'ambra' });
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

/**
 * Tour 2 (2026-11-14) : Fascia Verde e Area B dicevano « Divieto in vigore », poi « gli altri entrano », poi
 * « Motivo: la zona è chiusa ». Un verdetto solo, sull'auto, e un motivo con le parole del divieto.
 */
describe('zone ambientali: un verdetto solo, motivo coerente', () => {
  const ambientali = M.CITTA.flatMap((c) => c.zone.filter((z) => z.tipo === 'ambientale').map((z) => [c.id, z.id] as const));
  it('ci sono zone ambientali (Fascia Verde, Area B)', () => expect(ambientali.length).toBeGreaterThanOrEqual(2));
  for (const [c, zid] of ambientali) {
    it(`${c}/${zid}: attiva = «La tua auto entra se…», mai «chiusa», «Divieto in vigore» o «gli altri entrano»`, () => {
      const z = M.zonaDi(M.cittaById(c)!, zid);
      expect(z.entraSe?.it).toMatch(/^La tua auto entra se /);
      expect(verdetto(z, true, 'it').head).toBe(z.entraSe!.it);
      for (const d of ['2026-11-16', '2026-11-14', '2026-11-15']) {
        const html = renderToStaticMarkup(createElement(StatoCalc, { lang: 'it', id: 't', refDay: d, citta: c, zona: zid }));
        expect(html).toMatch(/La tua auto entra/);
        expect(html).not.toMatch(/Divieto in vigore|gli altri entrano|la zona è chiusa|la zona è aperta|zona chiusa/);
      }
    });
  }
  it('Fascia Verde sabato: «oggi il divieto vale tutto il giorno», fino a mezzanotte, poi lunedì', () => {
    const z = M.zonaDi(M.cittaById('roma')!, 'fascia-verde');
    const s = M.stato(z, '2026-11-14', '12:00');
    expect(s.motivo).toBe('tuttoIlGiorno');
    expect(motivo(s.motivo, z, 'it')).toBe('oggi il divieto vale tutto il giorno');
    expect(frase(s, z, 'it', '2026-11-14')).toBe('Divieto fino a mezzanotte. Riprende lunedì 16 novembre 2026 alle 00:00.');
  });
  it('Area B sabato: nessuna fascia nel giorno, il motivo non parla di «quest’ora»', () => {
    const z = M.zonaDi(M.cittaById('milano')!, 'area-b');
    const s = M.stato(z, '2026-11-14', '20:07');
    expect(s.motivo).toBe('liberoOggi');
    expect(motivo(s.motivo, z, 'it')).toBe('oggi il divieto non c’è');
    expect(motivo(M.stato(z, '2026-11-16', '21:00').motivo, z, 'it')).toBe('a quest’ora il divieto non c’è');
    expect(motivo(M.stato(z, '2026-11-16', '10:00').motivo, z, 'it')).toBe('siamo nell’orario del divieto');
  });
  it('ZTL normale invariata: «siamo nell’orario in cui la zona è chiusa», e dopo la fine quando riattiva', () => {
    const z = M.zonaDi(M.cittaById('roma')!, 'centro-diurna');
    const s = M.stato(z, '2026-11-16', '12:00');
    expect(motivo(s.motivo, z, 'it')).toBe('siamo nell’orario in cui la zona è chiusa');
    expect(frase(s, z, 'it', '2026-11-16')).toBe('Attiva fino alle 18:00. Riattiva domani alle 06:30.');
    expect(motivo(M.stato(z, '2026-11-15', '12:00').motivo, z, 'it')).toBe('oggi la zona non chiude');
  });
});
