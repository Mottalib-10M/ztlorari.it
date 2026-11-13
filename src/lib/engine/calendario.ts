/**
 * Calendario italiano : le dieci festività nazionali a data fissa (legge 27 maggio 1949 n. 260 e sue
 * modifiche), Pasqua e Lunedì dell'Angelo
 * calcolati (algoritmo di Meeus/Jones/Butcher, calendario gregoriano). Il santo patrono di ogni comune
 * non è modellato : lo dice ogni pagina.
 *
 * Tutte le date sono stringhe ISO « AAAA-MM-GG » e tutte le ore « HH:MM », nel fuso Europe/Rome ; il
 * motore non legge mai l'orologio da solo (RECETTE §17.5) : la data e l'ora gli vengono passate.
 */
export const FESTIVI_FISSI: Array<{ md: string; it: string; en: string }> = [
  { md: '01-01', it: 'Capodanno', en: 'New Year’s Day' },
  { md: '01-06', it: 'Epifania', en: 'Epiphany' },
  { md: '04-25', it: 'Festa della Liberazione', en: 'Liberation Day' },
  { md: '05-01', it: 'Festa del Lavoro', en: 'Labour Day' },
  { md: '06-02', it: 'Festa della Repubblica', en: 'Republic Day' },
  { md: '08-15', it: 'Assunzione (Ferragosto)', en: 'Assumption (Ferragosto)' },
  { md: '11-01', it: 'Ognissanti', en: 'All Saints’ Day' },
  { md: '12-08', it: 'Immacolata Concezione', en: 'Immaculate Conception' },
  { md: '12-25', it: 'Natale', en: 'Christmas Day' },
  { md: '12-26', it: 'Santo Stefano', en: 'St Stephen’s Day' },
];

export function pasqua(anno: number): string {
  const a = anno % 19, b = Math.floor(anno / 100), c = anno % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mese = Math.floor((h + l - 7 * m + 114) / 31), giorno = ((h + l - 7 * m + 114) % 31) + 1;
  return `${anno}-${String(mese).padStart(2, '0')}-${String(giorno).padStart(2, '0')}`;
}

export function aggiungiGiorni(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10);
}

/** Nome della festività nazionale di un giorno, o null. Pasqua è domenica : contata come festivo anche lei. */
export function festivoNazionale(iso: string, lang: 'it' | 'en' = 'it'): string | null {
  const md = iso.slice(5);
  const f = FESTIVI_FISSI.find((x) => x.md === md);
  if (f) return f[lang];
  const anno = Number(iso.slice(0, 4));
  const p = pasqua(anno);
  if (iso === p) return lang === 'it' ? 'Pasqua' : 'Easter Sunday';
  if (iso === aggiungiGiorni(p, 1)) return lang === 'it' ? 'Lunedì dell’Angelo' : 'Easter Monday';
  return null;
}

/** 0 = domenica … 6 = sabato (calendario gregoriano, indipendente dal fuso). */
export function giornoSettimana(iso: string): number {
  return new Date(`${iso}T00:00:00Z`).getUTCDay();
}

/** Giorno festivo nel senso del Codice della Strada : domenica o festività nazionale. */
export function eFestivo(iso: string): boolean {
  return giornoSettimana(iso) === 0 || festivoNazionale(iso) !== null;
}

/** N-esimo giorno della settimana di un mese : il primo giovedì di aprile = nthGiorno(anno, 4, 4, 1). */
export function nthGiorno(anno: number, mese: number, giorno: number, n: number): string {
  const primo = `${anno}-${String(mese).padStart(2, '0')}-01`;
  const delta = (giorno - giornoSettimana(primo) + 7) % 7;
  return aggiungiGiorni(primo, delta + 7 * (n - 1));
}

/** Data e ora correnti nel fuso di Roma, da un oggetto Date (solo nel browser, dopo il primo rendering). */
export function adessoRoma(d = new Date()): { data: string; ora: string } {
  const parti = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(d);
  const g = (t: string) => parti.find((p) => p.type === t)?.value ?? '00';
  const h = g('hour') === '24' ? '00' : g('hour');
  return { data: `${g('year')}-${g('month')}-${g('day')}`, ora: `${h}:${g('minute')}` };
}

export const NOMI_GIORNI: Record<'it' | 'en', string[]> = {
  it: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
export const NOMI_GIORNI_BREVI: Record<'it' | 'en', string[]> = {
  it: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
