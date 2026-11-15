/** Pièces communes des simulateurs : cadre deux colonnes, carte de résultat, lignes de détail. */
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { formatMoney } from '../../lib/format';

export type L = 'it' | 'en';
/** Testo nella lingua della pagina : ordine sempre it, en. */
export const T = <A,>(l: L, it: A, en: A) => (l === 'en' ? en : it);
export const eur = (x: number, l: L, d = 0) => formatMoney(x, d, l);

/** Le chiffre clé du résultat, remonté par <Head> pour la barre collante du téléphone. */
const KeyFigure = createContext<((k: { label: string; value: string }) => void) | null>(null);

/** Colore della carta del risultato secondo il verdetto (rosso = vietato, verde = libero, ambra = solo alcuni veicoli). */
const TONI = {
  rosso: { barra: 'border-red-600 bg-red-50', carta: 'border-2 border-red-600 bg-red-50', valore: 'text-red-800', azione: 'text-red-800' },
  verde: { barra: 'border-green-600 bg-green-50', carta: 'border-2 border-green-600 bg-green-50', valore: 'text-green-800', azione: 'text-green-900' },
  ambra: { barra: 'border-amber-500 bg-amber-50', carta: 'border-2 border-amber-500 bg-amber-50', valore: 'text-amber-900', azione: 'text-amber-900' },
} as const;
export type Tono = keyof typeof TONI;

export function Shell({ form, result, id, after, tono }: { form: ReactNode; result: ReactNode; id: string; after?: ReactNode; tono?: Tono }) {
  // Téléphone : quand la carte du résultat est sous le premier écran, une ligne en tête de l'outil montre le chiffre
  // clé (RECETTE §5, « juste sous les premiers champs » ou barre en bas). Rendue côté client seulement : aucun texte en
  // double dans le HTML. Dans le flux, plus en position fixe (testeurs naïfs du 2026-11-14, tour 3 : la barre fixe
  // coupait le gros « Non attiva » et cachait le champ « Residenza »). Décidée une fois au chargement : elle ne
  // s'affiche ni ne disparaît pendant le défilement, donc rien ne saute ni n'est recouvert.
  const card = useRef<HTMLDivElement>(null);
  const [below, setBelow] = useState(false);
  const [key, setKey] = useState<{ label: string; value: string } | null>(null);
  useEffect(() => {
    const el = card.current;
    if (el) setBelow(el.getBoundingClientRect().top > window.innerHeight - 120);
  }, []);
  return (
    <div className="rechner not-prose rounded-xl border border-navy-200 bg-white p-4 sm:p-6" data-chrome data-calc={id}>
      {below && key && (
        <button type="button" aria-hidden="true" tabIndex={-1} onClick={() => card.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className={`mb-4 flex w-full items-baseline justify-between gap-3 rounded-lg border px-3 py-2 text-left lg:hidden ${tono ? TONI[tono].barra : 'border-accent-200 bg-accent-50'}`}>
          <span className="min-w-0 text-sm font-medium text-navy-700">{key.label}</span>
          <span className={`tabular-nums shrink-0 whitespace-nowrap text-lg font-bold ${tono ? TONI[tono].valore : 'text-navy-900'}`}>{key.value}</span>
        </button>
      )}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-start lg:gap-6">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">{form}</form>
        <div ref={card} aria-live="polite" data-resultat data-tono={tono} className={`mt-6 rounded-xl ${tono ? TONI[tono].carta : 'border border-accent-200 bg-accent-50/60'} p-4 sm:p-5 lg:sticky lg:top-20 lg:mt-0`}><KeyFigure.Provider value={setKey}>{result}</KeyFigure.Provider></div>
      </div>
      {after}
    </div>
  );
}
export const Row2 = ({ children }: { children: ReactNode }) => <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">{children}</div>;

export function Head({ label, value, sub, tono, azione, barra }: { label: string; value: string; sub?: string; tono?: Tono; azione?: string; barra?: string }) {
  const report = useContext(KeyFigure);
  useEffect(() => { report?.({ label, value: barra ?? value }); }, [report, label, value, barra]);
  // Verdetto in frase (« La tua auto entra se… ») : più piccolo del numero, per stare in tre righe sul telefono.
  const frase = value.length > 24;
  return (
    <>
      <p className="text-sm font-medium text-navy-700">{label}</p>
      <p className={`tabular-nums mt-1 ${frase ? 'text-2xl leading-snug' : 'text-4xl'} font-bold ${tono ? TONI[tono].valore : 'text-navy-900'}`}>{value}</p>
      {azione && <p data-azione className={`mt-1 text-lg font-semibold ${tono ? TONI[tono].azione : 'text-navy-900'}`}>{azione}</p>}
      {sub && <p className="mt-1 text-sm text-navy-700">{sub}</p>}
    </>
  );
}
export function Rows({ rows }: { rows: Array<[string, string] | [string, string, boolean]> }) {
  return (
    <table className="mt-4 w-full text-sm"><tbody className="divide-y divide-navy-200">
      {rows.map(([l, v, strong]) => (
        <tr key={l} className={strong ? 'font-semibold' : ''}><td className="py-1.5 pr-3 text-navy-700">{l}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{v}</td></tr>
      ))}
    </tbody></table>
  );
}
export const Note = ({ children }: { children: ReactNode }) => <p className="mt-3 text-sm text-navy-700">{children}</p>;
export function MethodLink({ href, lang }: { href?: string; lang: L }) {
  if (!href) return null;
  return <p className="mt-3 text-sm"><a href={href} className="font-medium text-accent-700 underline">{T(lang, 'Metodo e fonti degli orari', 'How the hours are read, and the sources')}</a></p>;
}
