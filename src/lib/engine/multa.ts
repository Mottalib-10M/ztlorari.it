/**
 * Multa per l'accesso non autorizzato in ZTL (Codice della Strada, art. 7, 198, 201, 202, 203).
 * Importi in euro, senza le spese di notifica e di procedimento che ogni ente aggiunge (variano
 * e sono scritte sul verbale). Nessun importo è scritto qui : tutto viene da params-2026.json.
 */
import { P } from './params';
import { aggiungiGiorni } from './calendario';

export type Violazione = 'ztl' | 'tariffata' | 'emissioni';
export interface MultaInput { tipo: Violazione; giorni: number; tariffa?: number; notifica?: string; estero?: boolean }
export interface Multa {
  /** Numero di sanzioni : una per giorno di calendario con passaggi (art. 198 c.2-bis). */
  sanzioni: number;
  minimo: number; massimo: number;
  /** Pagamento entro 5 giorni (−30 %), entro 60 giorni (minimo), dopo 60 senza ricorso (metà del massimo). */
  entro5: number | null; entro60: number; dopo60: number;
  /** Tariffa aggiunta per ogni giorno (zona a pagamento, art. 7 c.14-bis). */
  tariffaAggiunta: number;
  scadenze: { sconto: string; pagamento: string; prefetto: string; giudice: string } | null;
}
const r2 = (x: number) => Math.round(x * 100) / 100;

export function multa(i: MultaInput): Multa {
  const m = P.multa;
  const n = Math.max(1, Math.min(365, Math.floor(i.giorni || 1)));
  const base = i.tipo === 'emissioni' ? m.emissioni : m.ztl;
  const tar = i.tipo === 'tariffata' ? Math.max(0, i.tariffa ?? P.areaC.ticket) : 0;
  const entro60 = r2(n * (base.min + tar));
  // La riduzione del 30 % riguarda la sanzione ; la tariffa recuperata (c.14-bis) resta intera.
  const entro5 = r2(n * (base.min * (1 - m.riduzione) + tar));
  const dopo60 = r2(n * (base.max * m.non_pagato_frazione_max + tar));
  let scadenze: Multa['scadenze'] = null;
  if (i.notifica && /^\d{4}-\d{2}-\d{2}$/.test(i.notifica)) {
    scadenze = {
      sconto: aggiungiGiorni(i.notifica, m.giorni_riduzione),
      pagamento: aggiungiGiorni(i.notifica, m.giorni_minimo),
      prefetto: aggiungiGiorni(i.notifica, m.prefetto_giorni),
      giudice: aggiungiGiorni(i.notifica, i.estero ? m.giudice_giorni_estero : m.giudice_giorni),
    };
  }
  return { sanzioni: n, minimo: base.min, massimo: base.max, entro5, entro60, dopo60, tariffaAggiunta: tar, scadenze };
}

/** Ultimo giorno utile per la notifica del verbale (art. 201) : 90 giorni dall'accertamento, 360 per chi risiede all'estero. */
export const limiteNotifica = (accertamento: string, estero = false) => aggiungiGiorni(accertamento, estero ? P.multa.notifica_giorni_estero : P.multa.notifica_giorni);
