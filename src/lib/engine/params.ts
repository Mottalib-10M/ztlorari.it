/** Regole fisse (Codice della Strada) e dati delle ZTL, letti una volta. */
import raw from '../../data/params-2026.json';
import ztl from '../../data/ztl.json';
export const P = raw;
export type Params = typeof raw;
export type SourceKey = keyof typeof raw.sources;
export const DATI = ztl;
export const sourceUrl = (key: SourceKey): string => (raw.sources[key] as { url: string }).url;
