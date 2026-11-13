/**
 * Mini-simulateur de page (RECETTE §9.3) : un ou deux champs, le chiffre du sujet de la page mis en
 * avant, deux à quatre lignes de détail et un lien vers le calculateur complet. Le calcul vient du
 * moteur du site, décrit dans `lib/mini-specs.ts` (une entrée par sujet). Premier rendu = valeurs
 * par défaut du build (§17.5) ; `data-chrome` : le texte du widget ne compte ni dans les mots ni
 * dans la comparaison entre pages.
 *
 * Testeurs naïfs du 2026-11-08 (RECETTE §15.8) :
 * - le composant retient les champs modifiés par le lecteur (`touched`, passé à `spec.run`) ; tant
 *   qu'il n'en a modifié aucun, le résultat porte « Exemple, pas encore votre résultat » (MentionExemple) ;
 *   `saisiParLeLecteur` : valeurs venues d'un lien partagé, donc déjà les siennes, sans mention ;
 * - `title` : deux calculateurs empilés sur une page reçoivent chacun leur titre (« Étape 1 : … ») ;
 *   `idPrefix` garde des id uniques quand le même `kind` paraît deux fois ; `defaults` : valeurs de la page ;
 * - champs `avance` : rangés dans un repli « Plus de détails sur votre cas », dont le titre montre la valeur
 *   actuelle de chacun : le lecteur voit ce qui pèse sur son résultat sans ouvrir.
 *
 * 2026-11-09 (testeurs naïfs de 11 sites, RECETTE §15.8 ; toutes les nouveautés sont facultatives) :
 * - mention d'exemple : dit ce que l'exemple suppose (`exemple` de la spec, ou prop `exemple` de la page) ;
 *   aucune mention quand il n'y a aucun champ à changer ;
 * - repli : « Ce que nous avons supposé », une ligne « libellé : valeur » par champ, valeur en gras ;
 * - `out.alert` : ligne d'alerte sous le gros chiffre ; `out.go` : lien qui dépend de la réponse (remplace le cta) ;
 * - `locked` : champs fixés par la page (« … in Texas ») : ni redemandés ni modifiables, nommés sous les champs
 *   (« Set by this page: State: Texas ») ; leur valeur vient de `defaults`, sinon de `def` ;
 * - `showIf` d'un champ : caché quand il ne change rien ; une valeur en mots longue passe sous son libellé.
 */
import { useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { getSpec } from '../../lib/mini-specs';
import MentionExemple from './MentionExemple';
import { deuxPoints, exempleSuppose, libellesTrame } from '../../lib/libelles-trame';
import { formatNumber } from '../../lib/format';
import type { MiniInput } from '../../lib/mini-types';

interface Props { kind: string; lang?: string; href?: string; title?: string; idPrefix?: string; defaults?: Record<string, number>; saisiParLeLecteur?: boolean;
  /** Champs fixés par la page : gardés à `defaults[id]` (sinon `def`), non affichés comme champs, nommés sous le formulaire. */
  locked?: string[];
  /** Ce que suppose l'exemple sur cette page ; remplace `spec.exemple`. */
  exemple?: string }

/** Une valeur en mots longue (« Not eligible: 150 hours needed ») passe sous son libellé au lieu d'être coincée à droite. */
export const valeurEnMots = (x: string) => x.length > 12 && /\p{L}{3}/u.test(x);

export default function MiniSim({ kind, lang = 'en', href, title, idPrefix = 'm', defaults = {}, saisiParLeLecteur = false, locked = [], exemple }: Props) {
  const spec = getSpec(kind, lang);
  const [v, setV] = useState<Record<string, number>>(() => Object.fromEntries(spec.inputs.map((i) => [i.id, defaults[i.id] ?? i.def])));
  const [touched, setTouched] = useState<Record<string, boolean>>(() => (saisiParLeLecteur ? Object.fromEntries(spec.inputs.map((i) => [i.id, true])) : {}));
  const out = useMemo(() => spec.run(v, touched), [v, spec, touched]);
  const set = (id: string) => (x: number) => { setV((o) => ({ ...o, [id]: x })); setTouched((o) => (o[id] ? o : { ...o, [id]: true })); };
  const fid = (id: string) => `${idPrefix}-${kind}-${id}`;
  const lib = libellesTrame(lang);
  const dp = deuxPoints(lang);
  const champ = (i: MiniInput) => (i.options
    ? <SelectField key={i.id} id={fid(i.id)} label={i.label} value={String(v[i.id])} onChange={(x) => set(i.id)(Number(x))} options={i.options} help={i.help} />
    : <NumberField key={i.id} id={fid(i.id)} label={i.label} value={v[i.id]} onChange={set(i.id)} unit={i.unit} max={i.max} decimals={i.decimals} help={i.help} />);
  const visibles = spec.inputs.filter((i) => !locked.includes(i.id) && (!i.showIf || i.showIf(v)));
  const fixes = spec.inputs.filter((i) => locked.includes(i.id));
  const avances = visibles.filter((i) => i.avance);
  const lien: [string, string] | undefined = out.go ?? (href && spec.cta ? [`${spec.cta} →`, href] : undefined);
  return (
    <div data-chrome data-mini={kind} className="not-prose rechner-mini my-8 rounded-xl border border-accent-200 bg-white p-4 shadow-sm sm:p-5">
      <p className="text-base font-semibold text-navy-900">{title ?? spec.title}</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          {visibles.filter((i) => !i.avance).map(champ)}
          {avances.length > 0 && (
            <details data-repli className="rounded-lg border border-navy-200 px-3 py-2">
              <summary className="cursor-pointer text-sm font-medium text-navy-700">{lib.plusDeReglages}
                <span data-actuellement className="mt-1 block text-xs font-normal text-navy-600">
                  <span className="block">{lib.actuellement}{dp}</span>
                  {avances.map((i) => <span key={i.id} data-suppose className="block pl-2">{i.label}{dp} <span className="font-semibold text-navy-900">{valeurAffichee(i, v[i.id])}</span></span>)}
                </span></summary>
              <div className="mt-3 space-y-3">{avances.map(champ)}</div>
            </details>
          )}
          {fixes.length > 0 && (
            <p data-fixe className="text-xs text-navy-600">{lib.fixeParLaPage}{dp} {fixes.map((i, n) => <span key={i.id}>{n > 0 && ' · '}{i.label}{dp} <span className="font-semibold text-navy-900">{valeurAffichee(i, v[i.id])}</span></span>)}</p>
          )}
        </form>
        <div aria-live="polite" className="rounded-lg bg-navy-50 p-4">
          <MentionExemple lang={lang} touched={touched} modifiables={visibles.length} suppose={exemple ?? exempleSuppose(spec.exemple, v)} />
          <p className="text-sm font-medium text-navy-600">{out.head[0]}</p>
          <p className="tabular-nums mt-1 text-3xl font-bold text-navy-900">{out.head[1]}</p>
          {out.alert && <p data-alerte role="note" className="mt-2 border-l-4 border-amber-500 pl-2 text-sm font-semibold text-navy-900">{out.alert}</p>}
          <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
            {out.rows.map(([l, x]) => (valeurEnMots(x)
              ? <tr key={l}><td colSpan={2} className="py-1.5 text-navy-600 hyphens-auto [overflow-wrap:anywhere]">{l}<span className="block font-medium text-navy-900">{x}</span></td></tr>
              : <tr key={l}><td className="py-1.5 pr-3 text-navy-600 hyphens-auto [overflow-wrap:anywhere]">{l}</td><td className="tabular-nums py-1.5 text-right text-navy-900 [overflow-wrap:break-word]">{x}</td></tr>))}
          </tbody></table>
          {out.note && <p className="mt-2 text-xs text-navy-500">{out.note}</p>}
        </div>
      </div>
      {lien && <a data-lien-reponse={out.go ? '' : undefined} href={lien[1]} className="mt-4 inline-block text-sm font-medium text-accent-700 hover:underline">{lien[0]}</a>}
    </div>
  );
}

/** Valeur d'un champ telle que le lecteur la lit : libellé de l'option choisie, ou nombre et unité. */
export function valeurAffichee(i: MiniInput, x: number): string {
  if (i.options) return i.options.find((o) => o.value === String(x))?.label ?? String(x);
  return `${formatNumber(x, Number.isInteger(x) ? 0 : (i.decimals ?? 0))}${i.unit ? `\u00a0${i.unit}` : ''}`;
}
