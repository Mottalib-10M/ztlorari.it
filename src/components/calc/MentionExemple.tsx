/**
 * Mention posée sur un résultat calculé avec les valeurs d'exemple (testeurs naïfs du 2026-11-08,
 * RECETTE §15.8) : tant que le lecteur n'a modifié aucun champ, le résultat n'est pas le sien.
 * Elle disparaît dès la première saisie. À poser dans le bloc du résultat de tout calculateur
 * pré-rempli : `<MentionExemple lang={lang} touched={touched} suppose="…" modifiables={n} />`.
 *
 * 2026-11-09 (testeurs naïfs de 11 sites) : « Example, not your result yet » faisait douter du chiffre.
 * - `suppose` : ce que l'exemple suppose, dit par le calculateur (« Example for a 40-year-old with a
 *   £180,000 mortgage ») ; la mention devient « {suppose} — change any figure to see your own result ».
 *   Sans lui : « Example with typical figures — change any figure… » dans la langue de la page.
 * - `modifiables` : nombre de champs que le lecteur peut changer ; à 0, aucune mention (rien à changer :
 *   le chiffre est celui de la page, pas un exemple).
 */
import { libellesTrame, resultatExemple } from '../../lib/libelles-trame';

interface Props { lang?: string; touched?: Record<string, boolean>; className?: string; suppose?: string; modifiables?: number }

export default function MentionExemple({ lang, touched, className = '', suppose, modifiables }: Props) {
  if (modifiables === 0 || !resultatExemple(touched)) return null;
  const l = libellesTrame(lang);
  return (
    <p data-exemple className={`mb-2 rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs leading-snug text-amber-900 ${className}`}>
      <strong className="font-semibold">{suppose?.trim() || l.exemple}</strong> — {l.exempleAide}
    </p>
  );
}
