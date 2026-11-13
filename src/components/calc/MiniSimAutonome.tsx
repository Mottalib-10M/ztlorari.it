/**
 * Mini-simulateur AUTONOME (RECETTE §9.3) pour les sites qui n'ont pas les champs de la trame
 * (`ui/NumberField`, palette navy/accent). Même contrat que MiniSim : il lit `lib/mini-specs.ts`.
 * Il embarque ses champs (comportement du NumberField de la trame : texte brut pendant la frappe,
 * mise en forme au blur, plafond appliqué au nombre et signalé, sélection au focus) et se colore
 * avec les variables de la charte du site, avec des valeurs de repli lisibles.
 * Réglages : `locale` (séparateurs), `unitColor`/couleurs héritées via --color-text, --color-text-muted,
 * --color-border, --color-surface, --color-primary-dark.
 * 2026-11-09 : mêmes nouveautés que MiniSim (mention qui dit ce que l'exemple suppose, « Ce que nous avons supposé »
 * une ligne par champ, `out.alert`, `out.go`, `locked`, `showIf`, `exemple`).
 */
import { type ChangeEvent, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getSpec } from '../../lib/mini-specs';
import { deuxPoints, exempleSuppose, libellesTrame, resultatExemple } from '../../lib/libelles-trame';
import type { MiniInput } from '../../lib/mini-types';

const C = {
  text: 'var(--color-text, #1f2937)', muted: 'var(--color-text-muted, #4b5563)', border: 'var(--color-border, #d1d5db)',
  surface: 'var(--color-surface, #f8fafc)', link: 'var(--color-primary-dark, var(--color-primary-700, var(--color-primary, #1d4ed8)))', warn: '#92400e',
};

function parse(input: string): number {
  const cleaned = input.replace(/[^\d.,-]/g, '');
  const lastComma = cleaned.lastIndexOf(','), lastDot = cleaned.lastIndexOf('.');
  let s = cleaned;
  if (lastComma > lastDot) s = cleaned.replace(/\./g, '').replace(',', '.');
  else if (/^-?\d{1,3}(\.\d{3})+$/.test(cleaned)) s = cleaned.replace(/\./g, '');
  else s = cleaned.replace(/,/g, '');
  const n = parseFloat(s); return isNaN(n) ? 0 : n;
}

function Field({ id, label, value, onChange, unit, max = 1e9, decimals = 0, locale }: { id: string; label: string; value: number; onChange: (v: number) => void; unit?: string; max?: number; decimals?: number; locale: string }) {
  const [focused, setFocused] = useState(false); const [raw, setRaw] = useState(''); const [over, setOver] = useState(false);
  const input = useRef<HTMLInputElement>(null); const selectPending = useRef(false); const guard = useRef(false);
  useLayoutEffect(() => { if (selectPending.current) { selectPending.current = false; input.current?.select(); } });
  const fmt = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: decimals }).format(n);
  const display = focused ? raw : (value === 0 ? '' : fmt(value));
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium" style={{ color: C.text }}>{label}</label>
      <div className="relative">
        <input ref={input} id={id} type="text" inputMode="decimal" value={display} placeholder="0"
          onMouseUp={(e) => { if (guard.current) { guard.current = false; e.preventDefault(); } }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { const f = e.target.value.replace(/[^0-9.,\s-]/g, ''); setRaw(f); const n = parse(f); setOver(n > max); onChange(Math.min(n, max)); }}
          onFocus={() => { setRaw(value === 0 ? '' : String(value)); setFocused(true); selectPending.current = true; guard.current = true; }}
          onBlur={() => { guard.current = false; setFocused(false); if (value > max) onChange(max); }}
          aria-describedby={over ? `${id}-help` : undefined}
          className="tabular-nums h-12 w-full rounded-lg border bg-white px-4 pr-14 text-right text-lg focus:outline-none focus:ring-2"
          style={{ borderColor: C.border, color: C.text }} />
        {unit && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: C.muted }} aria-hidden="true">{unit}</span>}
      </div>
      {over && <p id={`${id}-help`} role="status" className="mt-1 text-xs font-medium" style={{ color: C.warn }}>≤ {fmt(max)}{unit ? ` ${unit}` : ''}</p>}
    </div>
  );
}

interface Props { kind: string; lang?: string; href?: string; locale?: string; title?: string; idPrefix?: string; defaults?: Record<string, number>; saisiParLeLecteur?: boolean;
  /** Champs fixés par la page (voir MiniSim). */ locked?: string[];
  /** Ce que suppose l'exemple sur cette page ; remplace `spec.exemple`. */ exemple?: string }

const valeurEnMots = (x: string) => x.length > 12 && /\p{L}{3}/u.test(x);

export default function MiniSimAutonome({ kind, lang = 'en', href, locale = 'en-GB', title, idPrefix = 'm', defaults = {}, saisiParLeLecteur = false, locked = [], exemple }: Props) {
  const spec = getSpec(kind, lang);
  const [v, setV] = useState<Record<string, number>>(() => Object.fromEntries(spec.inputs.map((i) => [i.id, defaults[i.id] ?? i.def])));
  // Champs modifiés par le lecteur (même règle que MiniSim, testeurs naïfs du 2026-11-08).
  const [touched, setTouched] = useState<Record<string, boolean>>(() => (saisiParLeLecteur ? Object.fromEntries(spec.inputs.map((i) => [i.id, true])) : {}));
  const out = useMemo(() => spec.run(v, touched), [v, spec, touched]);
  const set = (id: string) => (x: number) => { setV((o) => ({ ...o, [id]: x })); setTouched((o) => (o[id] ? o : { ...o, [id]: true })); };
  const fid = (id: string) => `${idPrefix}-${kind}-${id}`;
  const lib = libellesTrame(lang);
  const dp = deuxPoints(lang);
  const visibles = spec.inputs.filter((i) => !locked.includes(i.id) && (!i.showIf || i.showIf(v)));
  const fixes = spec.inputs.filter((i) => locked.includes(i.id));
  const avances = visibles.filter((i) => i.avance);
  const valeur = (i: MiniInput) => (i.options ? (i.options.find((o) => o.value === String(v[i.id]))?.label ?? '') : `${new Intl.NumberFormat(locale, { maximumFractionDigits: i.decimals ?? 0 }).format(v[i.id])}${i.unit ? `\u00a0${i.unit}` : ''}`);
  const suppose = exemple ?? exempleSuppose(spec.exemple, v);
  const lien: [string, string] | undefined = out.go ?? (href && spec.cta ? [`${spec.cta} →`, href] : undefined);
  const champ = (i: MiniInput) => (i.options
            ? <div key={i.id}><label htmlFor={fid(i.id)} className="mb-1 block text-sm font-medium" style={{ color: C.text }}>{i.label}</label>
                <div className="relative rounded-lg border bg-white has-[select:focus-visible]:ring-2" style={{ borderColor: C.border, color: C.text }}>
                <span aria-hidden="true" className="flex min-h-[calc(3rem-2px)] items-center py-0.5 pl-3 pr-10 text-[0.9rem] leading-[1.2] [overflow-wrap:anywhere]">{i.options.find((o) => o.value === String(v[i.id]))?.label ?? ''}</span>
                <select id={fid(i.id)} value={String(v[i.id])} onChange={(e) => set(i.id)(Number(e.target.value))} className="absolute -inset-px cursor-pointer appearance-none rounded-lg pl-3 pr-10 opacity-0">
                  {i.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.muted }} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg></div></div>
            : <Field key={i.id} id={fid(i.id)} label={i.label} value={v[i.id]} onChange={set(i.id)} unit={i.unit} max={i.max} decimals={i.decimals} locale={locale} />);
  return (
    <div data-chrome data-mini={kind} className="not-prose rechner-mini my-8 rounded-xl border bg-white p-4 shadow-sm sm:p-5" style={{ borderColor: C.border }}>
      <p className="text-base font-semibold" style={{ color: C.text }}>{title ?? spec.title}</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          {visibles.filter((i) => !i.avance).map(champ)}
          {avances.length > 0 && (
            <details data-repli className="rounded-lg border px-3 py-2" style={{ borderColor: C.border }}>
              <summary className="cursor-pointer text-sm font-medium" style={{ color: C.text }}>{lib.plusDeReglages}
                <span data-actuellement className="mt-1 block text-xs font-normal" style={{ color: C.muted }}>
                  <span className="block">{lib.actuellement}{dp}</span>
                  {avances.map((i) => <span key={i.id} data-suppose className="block pl-2">{i.label}{dp} <span className="font-semibold" style={{ color: C.text }}>{valeur(i)}</span></span>)}
                </span></summary>
              <div className="mt-3 space-y-3">{avances.map(champ)}</div>
            </details>
          )}
          {fixes.length > 0 && <p data-fixe className="text-xs" style={{ color: C.muted }}>{lib.fixeParLaPage}{dp} {fixes.map((i, n) => <span key={i.id}>{n > 0 && ' · '}{i.label}{dp} <span className="font-semibold" style={{ color: C.text }}>{valeur(i)}</span></span>)}</p>}
        </form>
        <div aria-live="polite" className="rounded-lg p-4" style={{ background: C.surface }}>
          {visibles.length > 0 && resultatExemple(touched) && <p data-exemple className="mb-2 rounded-md border px-2 py-1 text-xs leading-snug" style={{ borderColor: '#fcd34d', background: '#fffbeb', color: '#78350f' }}><strong className="font-semibold">{suppose || lib.exemple}</strong> — {lib.exempleAide}</p>}
          <p className="text-sm font-medium" style={{ color: C.muted }}>{out.head[0]}</p>
          <p className="tabular-nums mt-1 text-3xl font-bold" style={{ color: C.text }}>{out.head[1]}</p>
          {out.alert && <p data-alerte role="note" className="mt-2 border-l-4 pl-2 text-sm font-semibold" style={{ borderColor: '#f59e0b', color: C.text }}>{out.alert}</p>}
          <table className="mt-3 w-full text-sm"><tbody>
            {out.rows.map(([l, x]) => (valeurEnMots(x)
              ? <tr key={l} style={{ borderTop: `1px solid ${C.border}` }}><td colSpan={2} className="py-1.5 hyphens-auto [overflow-wrap:anywhere]" style={{ color: C.muted }}>{l}<span className="block font-medium" style={{ color: C.text }}>{x}</span></td></tr>
              : <tr key={l} style={{ borderTop: `1px solid ${C.border}` }}><td className="py-1.5 pr-3 hyphens-auto [overflow-wrap:anywhere]" style={{ color: C.muted }}>{l}</td><td className="tabular-nums py-1.5 text-right [overflow-wrap:break-word]" style={{ color: C.text }}>{x}</td></tr>))}
          </tbody></table>
          {out.note && <p className="mt-2 text-xs" style={{ color: C.muted }}>{out.note}</p>}
        </div>
      </div>
      {lien && <a data-lien-reponse={out.go ? '' : undefined} href={lien[1]} className="mt-4 inline-block text-sm font-medium hover:underline" style={{ color: C.link }}>{lien[0]}</a>}
    </div>
  );
}
