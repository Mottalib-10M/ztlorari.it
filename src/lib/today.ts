/** Giorno del build nel fuso di Roma (costante di astro.config.mjs, uguale sul server e nel browser).
 *  Primo rendering degli strumenti = valori di questo giorno (RECETTE §17.5). */
const TZ = 'Europe/Rome';
export function romeToday(d = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
}
// Fuori dal build di Astro (vitest) la costante non esiste : allora l'orologio.
export const BUILD_TODAY: string = typeof __BUILD_DAY__ !== 'undefined' ? __BUILD_DAY__ : romeToday();
