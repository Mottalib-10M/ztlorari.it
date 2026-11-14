/**
 * Motore delle ZTL : « la zona è attiva adesso ? », fino a quando, quando riparte.
 *
 * I dati (src/data/ztl.json) sono trascritti dalle pagine ufficiali e dagli open data dei comuni, con la
 * fonte e la data di ogni città ; il motore non contiene nessun orario. Ogni fascia vale per i giorni della
 * settimana indicati ; se l'ora di fine è uguale o precedente a quella di inizio, la fascia finisce il giorno
 * dopo (« dalle 23:00 alle 03:00 »). Una fascia può valere solo in un periodo dell'anno (ZTL notturna estiva)
 * o in certi mesi ; una zona può essere sospesa in un mese o fra due date (agosto a Roma, 10-23 agosto 2026
 * a Torino). Le festività nazionali sospendono la zona quando la fonte lo dice (« esclusi i festivi »), la
 * lasciano attiva quando lo dice (« anche se festivi »), e quando la fonte tace la zona è considerata attiva
 * e la risposta è segnata come incerta : un « attiva » di troppo non costa una multa, un « libera » sbagliato sì.
 */
import { aggiungiGiorni, eFestivo, festivoNazionale, giornoSettimana, nthGiorno, NOMI_GIORNI_BREVI } from './calendario';
import { DATI } from './params';

export type Lang = 'it' | 'en';
export type Testo = Record<Lang, string>;
/** Riferimento di data nell'anno : giorno fisso (« 04-01 ») o n-esimo giorno della settimana di un mese. */
export type Rif = { md: string } | { mese: number; giorno: number; n: number };
export interface Periodo { da: Rif; a: Rif }
export interface Fascia { giorni: number[]; da: string; a: string; periodo?: Periodo; mesi?: number[] }
export interface Sospensione { mesi?: number[]; da?: string; a?: string; nota?: Testo }
export type Festivi = 'sospesa' | 'attiva' | 'nonIndicato';
export type TipoZona = 'oraria' | 'ambientale' | 'pedonale' | 'pagamento';
export interface Zona {
  id: string; nome: Testo; tipo: TipoZona; fasce: Fascia[]; festivi: Festivi;
  sospensioni?: Sospensione[]; note?: Testo; chiAccede?: Testo; tariffa?: Testo;
  /** Indice in `fontiExtra` della città quando la zona ha una pagina ufficiale sua (Fascia Verde, Area B). */
  fonteExtra?: number;
}
export interface Fonte { ente: string; url: string; data: string; tipo: 'pagina' | 'opendata' | 'ordinanza' | 'comunicato'; licenza?: string; licenzaUrl?: string; dataset?: string; nota?: string }
export interface Citta {
  id: string; nome: string; nomeEn?: string; regione: string; fonte: Fonte; fontiExtra?: Fonte[];
  permessi?: { url: string; ente: string }; varchi?: number | null; varchiNota?: Testo; zone: Zona[]; patrono?: { md: string; nome: string };
}

export const CITTA: Citta[] = DATI.citta as Citta[];
export const cittaById = (id: string) => CITTA.find((c) => c.id === id);
export const zonaDi = (c: Citta, zonaId?: string) => c.zone.find((z) => z.id === zonaId) ?? c.zone[0];
export const nomeCitta = (c: Citta, lang: Lang) => (lang === 'en' && c.nomeEn ? c.nomeEn : c.nome);

const min = (hhmm: string) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const hhmm = (m: number) => `${String(Math.floor(((m % 1440) + 1440) % 1440 / 60)).padStart(2, '0')}:${String(((m % 1440) + 1440) % 1440 % 60).padStart(2, '0')}`;

function rifData(r: Rif, anno: number): string {
  if ('md' in r) return `${anno}-${r.md}`;
  return nthGiorno(anno, r.mese, r.giorno, r.n);
}
/** Il giorno D cade nel periodo (estremi compresi) ? Periodo a cavallo d'anno ammesso. */
export function inPeriodo(p: Periodo | undefined, iso: string): boolean {
  if (!p) return true;
  const anno = Number(iso.slice(0, 4));
  const da = rifData(p.da, anno), a = rifData(p.a, anno);
  return da <= a ? iso >= da && iso <= a : iso >= da || iso <= a;
}
export function periodoDate(p: Periodo, anno: number): { da: string; a: string } {
  return { da: rifData(p.da, anno), a: rifData(p.a, anno) };
}
export function sospesa(z: Zona, iso: string): Sospensione | null {
  const mese = Number(iso.slice(5, 7));
  for (const s of z.sospensioni ?? []) {
    if (s.mesi && s.mesi.includes(mese)) return s;
    if (s.da && s.a && iso >= s.da && iso <= s.a) return s;
  }
  return null;
}

/** Intervalli [inizio, fine) in minuti dalla mezzanotte del giorno D in cui la zona è attiva per le fasce che INIZIANO quel giorno. */
export function intervalliGiorno(z: Zona, iso: string): Array<[number, number]> {
  if (sospesa(z, iso)) return [];
  const fest = festivoNazionale(iso) !== null;
  if (fest && z.festivi === 'sospesa') return [];
  const gs = giornoSettimana(iso), mese = Number(iso.slice(5, 7));
  const out: Array<[number, number]> = [];
  for (const f of z.fasce) {
    if (!f.giorni.includes(gs)) continue;
    if (f.mesi && !f.mesi.includes(mese)) continue;
    if (!inPeriodo(f.periodo, iso)) continue;
    const a = min(f.da); let b = min(f.a);
    if (f.a === '24:00') b = 1440;
    if (b <= a) b += 1440;
    out.push([a, b]);
  }
  return out.sort((x, y) => x[0] - y[0]);
}

export type Motivo = 'fascia' | 'fuoriFascia' | 'festivo' | 'sospesa' | 'fuoriPeriodo' | 'sempre' | 'mai';
export interface Stato {
  attiva: boolean;
  /** Fine della fascia in corso (se attiva) o inizio della prossima (se non attiva). */
  cambio: { data: string; ora: string } | null;
  motivo: Motivo;
  /** La fonte non dice cosa succede nei festivi e oggi è festivo : risposta prudente. */
  incerta: boolean;
  festivo: string | null;
  sospensione: Sospensione | null;
  /** Fasce del giorno chiesto, in minuti. */
  oggi: Array<[number, number]>;
}

/** Stato della zona a una data e un'ora (fuso di Roma). */
export function stato(z: Zona, data: string, ora: string, lang: Lang = 'it'): Stato {
  const m = min(ora);
  const festivo = festivoNazionale(data, lang);
  const sosp = sospesa(z, data);
  const incerta = festivo !== null && z.festivi === 'nonIndicato';
  // Finestra : ieri (fasce a cavallo di mezzanotte) e i 15 giorni seguenti, in minuti assoluti dal giorno D.
  const tutti: Array<[number, number]> = [];
  for (let k = -1; k <= 15; k++) {
    const d = aggiungiGiorni(data, k);
    for (const [a, b] of intervalliGiorno(z, d)) tutti.push([a + k * 1440, b + k * 1440]);
  }
  tutti.sort((x, y) => x[0] - y[0]);
  // Fasce contigue o sovrapposte (venerdì 7:30–20:00 poi 20:00–3:00) formano un solo periodo di divieto.
  const uniti: Array<[number, number]> = [];
  for (const [a, b] of tutti) { const u = uniti[uniti.length - 1]; if (u && a <= u[1]) u[1] = Math.max(u[1], b); else uniti.push([a, b]); }
  tutti.splice(0, tutti.length, ...uniti);
  const oggi = intervalliGiorno(z, data);
  const dentro = tutti.find(([a, b]) => m >= a && m < b);
  const punto = (abs: number) => ({ data: aggiungiGiorni(data, Math.floor(abs / 1440)), ora: hhmm(abs) });
  if (dentro) {
    const h24 = z.fasce.every((f) => f.da === '00:00' && (f.a === '24:00' || f.a === '00:00')) && z.fasce.some((f) => f.giorni.length === 7) && !z.fasce.some((f) => f.periodo || f.mesi);
    return { attiva: true, cambio: h24 && !z.sospensioni?.length ? null : punto(dentro[1]), motivo: h24 ? 'sempre' : 'fascia', incerta, festivo, sospensione: sosp, oggi };
  }
  const prossimo = tutti.find(([a]) => a > m);
  const motivo: Motivo = sosp ? 'sospesa' : festivo && z.festivi === 'sospesa' ? 'festivo' : !tutti.length ? (z.fasce.some((f) => f.periodo) ? 'fuoriPeriodo' : 'mai') : 'fuoriFascia';
  return { attiva: false, cambio: prossimo ? punto(prossimo[0]) : null, motivo, incerta, festivo, sospensione: sosp, oggi };
}

/** Fasce di una zona in parole : « lun–ven 7:30–20:00 · sab 7:30–16:00 ». Le fasce stagionali portano il periodo. */
export function descriviFasce(z: Zona, lang: Lang, anno = new Date().getUTCFullYear()): string[] {
  const nomi = NOMI_GIORNI_BREVI[lang];
  const giorniTxt = (g: number[]) => {
    const ord = [1, 2, 3, 4, 5, 6, 0];
    const s = ord.filter((d) => g.includes(d));
    if (s.length === 7) return lang === 'it' ? 'tutti i giorni' : 'every day';
    // sequenze consecutive nell'ordine lun…dom
    const idx = s.map((d) => ord.indexOf(d));
    const gruppi: number[][] = [];
    for (const i of idx) { const u = gruppi[gruppi.length - 1]; if (u && u[u.length - 1] === i - 1) u.push(i); else gruppi.push([i]); }
    return gruppi.map((gr) => (gr.length >= 3 ? `${nomi[ord[gr[0]]]}–${nomi[ord[gr[gr.length - 1]]]}` : gr.map((i) => nomi[ord[i]]).join(', '))).join(', ');
  };
  const ora = (s: string) => (s === '24:00' ? '24:00' : s.replace(/^0/, ''));
  // raggruppa le fasce con stesso orario e stesso periodo
  const chiave = (f: Fascia) => `${f.da}-${f.a}|${JSON.stringify(f.periodo ?? null)}|${JSON.stringify(f.mesi ?? null)}`;
  const gruppi = new Map<string, { f: Fascia; giorni: Set<number> }>();
  for (const f of z.fasce) { const k = chiave(f); const g = gruppi.get(k); if (g) f.giorni.forEach((d) => g.giorni.add(d)); else gruppi.set(k, { f, giorni: new Set(f.giorni) }); }
  const righe: string[] = [];
  for (const { f, giorni } of gruppi.values()) {
    const h24 = f.da === '00:00' && (f.a === '24:00' || f.a === '00:00');
    let r = `${giorniTxt([...giorni])} ${h24 ? (lang === 'it' ? '24 ore su 24' : '24 hours a day') : `${ora(f.da)}–${ora(f.a)}`}`;
    if (f.periodo) { const p = periodoDate(f.periodo, anno); r += lang === 'it' ? ` (dal ${dataBreve(p.da, lang)} al ${dataBreve(p.a, lang)})` : ` (from ${dataBreve(p.da, lang)} to ${dataBreve(p.a, lang)})`; }
    if (f.mesi) r += lang === 'it' ? ` (${nomiMesi(f.mesi, lang)})` : ` (${nomiMesi(f.mesi, lang)})`;
    righe.push(r);
  }
  return righe;
}
const MESI: Record<Lang, string[]> = {
  it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
export function nomiMesi(mesi: number[], lang: Lang): string {
  const s = [...mesi].sort((a, b) => a - b);
  if (s.length >= 3 && s[s.length - 1] - s[0] === s.length - 1) return lang === 'it' ? `da ${MESI.it[s[0] - 1]} a ${MESI.it[s[s.length - 1] - 1]}` : `${MESI.en[s[0] - 1]} to ${MESI.en[s[s.length - 1] - 1]}`;
  return s.map((m) => MESI[lang][m - 1]).join(', ');
}
export function dataBreve(iso: string, lang: Lang): string {
  const [, m, d] = iso.split('-').map(Number);
  return lang === 'it' ? `${d} ${MESI.it[m - 1]}` : `${d} ${MESI.en[m - 1]}`;
}
export function dataLunga(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  const g = NOMI_GIORNI_LUNGHI[lang][giornoSettimana(iso)];
  return lang === 'it' ? `${g} ${d} ${MESI.it[m - 1]} ${y}` : `${g} ${d} ${MESI.en[m - 1]} ${y}`;
}
const NOMI_GIORNI_LUNGHI: Record<Lang, string[]> = {
  it: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

/** Zone attive a una data e ora in tutte le città : conteggio e dettaglio. */
export function panorama(data: string, ora: string, lang: Lang = 'it') {
  const righe = CITTA.flatMap((c) => c.zone.map((z) => ({ citta: c, zona: z, s: stato(z, data, ora, lang) })));
  return { righe, attive: righe.filter((r) => r.s.attiva).length, totale: righe.length, cittaConAttiva: new Set(righe.filter((r) => r.s.attiva).map((r) => r.citta.id)).size };
}

/** La zona ha almeno una fascia che tocca la notte (inizio ≥ 20:00 o fine ≤ 06:00 il giorno dopo). */
export const notturna = (z: Zona) => z.fasce.some((f) => min(f.da) >= 20 * 60 || (min(f.a) <= min(f.da) && min(f.a) <= 6 * 60 && f.a !== '00:00' && f.a !== '24:00'));
export const h24 = (z: Zona) => z.fasce.some((f) => f.da === '00:00' && (f.a === '24:00' || f.a === '00:00') && f.giorni.length === 7);
export const minutiDi = min;
export const oraDiMinuti = hhmm;
export { eFestivo };
