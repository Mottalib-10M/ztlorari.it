/** Tabelle delle pagine di città : orari di ogni zona dal file ztl.json, con la fonte e la sua data. */
import type { Helpers } from './guide-types';

/** « pagina del 28 luglio 2026, letta il 13 novembre 2026 » ; una pagina senza data non riceve una data inventata. */
const dataFonte = (h: Helpers, f: { tipo: string; data: string; senzaData?: boolean }) => (f.senzaData
  ? h.T(`pagina senza data, letta il ${h.date(h.P.retrieved_at)}`, `undated page, read on ${h.date(h.P.retrieved_at)}`)
  : h.T(`${f.tipo === 'opendata' ? 'dataset aggiornato il' : 'pagina del'} ${h.date(f.data)}, letta il ${h.date(h.P.retrieved_at)}`, `${f.tipo === 'opendata' ? 'dataset updated' : 'page dated'} ${h.date(f.data)}, read on ${h.date(h.P.retrieved_at)}`));

const festivi = (h: Helpers, f: string) => (f === 'sospesa' ? h.T('esclusi', 'excluded') : f === 'attiva' ? h.T('anche festivi', 'holidays included') : h.T('non indicato', 'not stated'));

/** Zone di una città : nome, fasce in parole, festivi. */
export function tabellaZone(h: Helpers, id: string, soloZone?: string[]): string {
  const c = h.M.cittaById(id);
  if (!c) return '';
  const anno = Number(h.today.slice(0, 4));
  const rows = c.zone.filter((z) => !soloZone || soloZone.includes(z.id)).map((z) => [z.nome[h.lang], h.M.descriviFasce(z, h.lang, anno).join('; '), festivi(h, z.festivi)]);
  const f = c.fonte;
  return h.table([h.T('Zona', 'Zone'), h.T('Quando è attiva', 'When it is active'), h.T('Festivi', 'Holidays')], rows,
    `${h.T('Fonte', 'Source')}: <a href="${f.url}" target="_blank" rel="nofollow noopener noreferrer">${f.ente}</a>, ${dataFonte(h, f)}.`);
}

/** Frase con la fonte e la data, da mettere in ogni pagina di città. */
export function fonteFrase(h: Helpers, id: string): string {
  const c = h.M.cittaById(id);
  if (!c) return '';
  const f = c.fonte;
  return `${h.T('Orari da', 'Hours from')} ${f.ente}, ${dataFonte(h, f)}.`;
}
