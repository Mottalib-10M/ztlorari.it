/** Regole fisse (Codice della Strada) e dati delle ZTL, letti una volta. */
import raw from '../../data/params-2026.json';
import ztl from '../../data/ztl.json';
import { displayDate } from '../format';
export const P = raw;
export type Params = typeof raw;
export type SourceKey = keyof typeof raw.sources;
export const DATI = ztl;
export const sourceUrl = (key: SourceKey): string => (raw.sources[key] as { url: string }).url;
/** Nome della fonte con la data di pubblicazione (se la pagina ne ha una) e la data di lettura
 *  (testeurs naïfs du 2026-11-14, tour 3 : « fonte del 2021 » senza dire quando l'abbiamo riletta). */
export function sourceName(key: SourceKey, lang: string): string {
  const s = raw.sources[key] as { label: Record<string, string>; data?: string };
  const d = (iso: string) => displayDate(iso, lang === 'en' ? 'en-IT' : 'it-IT');
  const letta = d(raw.retrieved_at);
  const quando = lang === 'en'
    ? (s.data ? `published ${d(s.data)}, read on ${letta}` : `no publication date, read on ${letta}`)
    : (s.data ? `pubblicata il ${d(s.data)}, letta il ${letta}` : `senza data di pubblicazione, letta il ${letta}`);
  return `${s.label[lang] ?? s.label.en} (${quando})`;
}
