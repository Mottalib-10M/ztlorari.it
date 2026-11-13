/**
 * Mini-simulatori nel testo (RECETTE §9.3). Su questo sito ogni pagina ha già in testa lo strumento completo
 * (stato della ZTL, panorama, multa, festivi) : nessun mini-simulatore è dichiarato. Il file esiste perché
 * MiniSim e MiniSimAutonome della trama lo importano.
 */
import type { MiniSpec } from './mini-types';

const SPECS: Record<string, (lang: string) => MiniSpec> = {};

export function getSpec(kind: string, lang: string): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`mini-simulatore sconosciuto: ${kind}`);
  return f(lang);
}
