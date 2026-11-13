/**
 * Una pagina = UN file in `src/content/pagine/`. Porta le due lingue (italiano e inglese), testo, FAQ,
 * fonti, strumento e collegamenti ; il nucleo (percorsi, menu, piè di pagina, sitemap, hreflang, schemi)
 * li legge da solo.
 */
import type { SourceKey, Params } from './engine/params';
export type Lang = 'it' | 'en';
export type Group = 'citta' | 'regole';
/** Strumento in testa alla pagina (components/outils/Tools.tsx). */
export type Tool = 'stato' | 'panorama' | 'multa' | 'notturne' | 'festivi';
export interface FAQ { q: string; a: string }

/** Strumenti di scrittura del testo : link, numeri e date nel formato della lingua, motore. */
export interface Helpers {
  lang: Lang;
  /** Testo nella lingua della pagina, ordine sempre it, en. */
  T: <A>(it: A, en: A) => A;
  /** Link interno a una pagina (id) ; se manca, solo il testo. */
  a: (id: string, text: string) => string;
  eur: (n: number, decimals?: number) => string;
  num: (n: number, decimals?: number) => string;
  /** Data (ISO) nella lingua della pagina : « 1 ottobre 2026 », « 1 October 2026 ». */
  date: (iso: string) => string;
  table: (headers: string[], rows: Array<Array<string | number>>, caption?: string, align?: Array<'l' | 'r'>) => string;
  /** Link a una fonte ufficiale di params-2026.json. */
  src: (key: SourceKey, text?: string) => string;
  P: Params;
  M: typeof import('./engine/index');
  /** Giorno del build (ora di Roma). */
  today: string;
}

export interface PageText {
  slug: string;
  nav: string;
  card: string;
  /** Da 50 a 60 caratteri, termine cercato in testa (RECETTE §11). */
  title: string;
  /** Da 150 a 160 caratteri. */
  description: string;
  h1: string;
  intro: string;
  /** Blocco citabile : UN paragrafo di almeno 120 parole (RECETTE §21). */
  resume: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
  body: (h: Helpers) => string;
}

export interface PageDef {
  id: string;
  group: Group;
  order: number;
  tool: Tool;
  /** Città e zona preimpostate nello strumento. */
  citta?: string;
  zona?: string;
  preset?: Record<string, string>;
  related: string[];
  sources: SourceKey[];
  it: PageText;
  en: PageText;
}
export const defineGuide = (g: PageDef): PageDef => g;
