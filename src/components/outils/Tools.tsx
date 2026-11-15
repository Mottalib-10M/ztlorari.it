/**
 * Gli strumenti del sito, tutti dallo stesso motore (lib/engine) :
 *   StatoCalc     la ZTL è attiva adesso (o a un'ora scelta) ? fino a quando, quando riparte
 *   PanoramaTool  tutte le ZTL attive a una data e un'ora, città per città (anche solo le notturne)
 *   MultaCalc     quanto costa un passaggio non autorizzato, entro 5 e 60 giorni, e le scadenze
 *   FestiviTool   la ZTL nei giorni festivi dell'anno : sospesa, attiva, o fonte che non lo dice
 * Primo rendering = giorno del build (refDay) e un'ora fissa, perché server e browser mostrino la stessa
 * cosa (RECETTE §17.5) ; l'ora vera e l'indirizzo vengono letti solo dopo. Nulla viene inviato.
 */
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import * as M from '../../lib/engine';
import { P, type SourceKey } from '../../lib/engine/params';
import { displayDate, formatMoney, formatNumber } from '../../lib/format';
import { LANG_TAGS } from '../../data/site-config';
import { readParams, str, num, updateURL } from '../../lib/url-state';
import SelectField from '../ui/SelectField';
import NumberField from '../ui/NumberField';
import Toggle from '../ui/Toggle';
import MentionExemple from '../calc/MentionExemple';
import { Shell, Head, Rows, Note, MethodLink, Row2, T, type L, type Tono } from '../calc/kit';

const datum = (iso: string, l: L) => displayDate(iso, LANG_TAGS[l]);
const isIso = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s);
const isOra = (s: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(s);
const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline decoration-navy-300 hover:text-accent-700">{children}</a>
);
const Q = ({ k, l, children }: { k: SourceKey; l: L; children?: ReactNode }) => <Ext href={P.sources[k].url}>{children ?? P.sources[k].label[l]}</Ext>;

const campo = 'h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';
/**
 * Giorno e ora in campi di testo (testeurs naïfs du 2026-11-14) : le champ natif `date`/`time` s'affiche dans la langue
 * du navigateur (« 11/14/2026 », « 05:25 PM » chez les trois testeurs), quel que soit le `lang` de la page. Ici
 * gg/mm/aaaa et hh:mm sur 24 h : ce qu'on tape n'est jamais réécrit pendant la frappe (check-saisie), la forme
 * 14/11/2026 ou 17:25 n'est posée qu'en quittant le champ. La valeur gardée reste ISO (AAAA-MM-JJ) et HH:MM.
 */
export function leggiData(t: string): string {
  const s = t.trim();
  let g: number, m: number, a: number;
  const sep = s.match(/^(\d{1,2})\s*[/.\-\s]\s*(\d{1,2})\s*[/.\-\s]\s*(\d{4})$/);
  const cifre = s.match(/^(\d{2})(\d{2})(\d{4})$/);
  if (sep) { g = +sep[1]; m = +sep[2]; a = +sep[3]; } else if (cifre) { g = +cifre[1]; m = +cifre[2]; a = +cifre[3]; } else return '';
  if (a < 2000 || a > 2099 || m < 1 || m > 12 || g < 1) return '';
  if (g > new Date(Date.UTC(a, m, 0)).getUTCDate()) return '';
  return `${a}-${String(m).padStart(2, '0')}-${String(g).padStart(2, '0')}`;
}
export const scriviData = (iso: string) => (isIso(iso) ? `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}` : '');
export function leggiOra(t: string): string {
  const x = t.trim().match(/^(\d{1,2})(?:\s*[:.,h]\s*(\d{2})|(\d{2}))?$/);
  if (!x) return '';
  const h = +x[1], m = +(x[2] ?? x[3] ?? 0);
  return h <= 23 && m <= 59 ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` : '';
}
function CampoTesto({ id, label, value, onChange, leggi, scrivi, segnaposto, aiuto, errore }: { id: string; label: string; value: string; onChange: (v: string) => void; leggi: (t: string) => string; scrivi: (v: string) => string; segnaposto: string; aiuto: string; errore: string }) {
  const [testo, setTesto] = useState(() => scrivi(value));
  const [uscito, setUscito] = useState(false);
  const ultimo = useRef(value);
  useEffect(() => {
    // Valore posto dall'esterno (ora di Roma dopo il primo rendering, «Torna ad adesso») : lo mostriamo.
    if (value !== ultimo.current) { ultimo.current = value; if (leggi(testo) !== value) setTesto(scrivi(value)); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const errata = uscito && !leggi(testo);
  return (
    <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-navy-700">{label}</label>
      <input id={id} type="text" inputMode="numeric" autoComplete="off" spellCheck={false} maxLength={12} placeholder={segnaposto} value={testo}
        onChange={(e) => { const t = e.target.value; setTesto(t); setUscito(false); const v = leggi(t); if (v) { ultimo.current = v; onChange(v); } }}
        onBlur={() => { setUscito(true); const v = leggi(testo); if (v) setTesto(scrivi(v)); }}
        aria-invalid={errata || undefined} aria-describedby={`${id}-help`} className={`${campo} tabular-nums ${errata ? 'border-red-600' : ''}`} />
      <p id={`${id}-help`} className={`mt-1 text-xs ${errata ? 'font-medium text-red-700' : 'text-navy-500'}`}>{errata ? errore : aiuto}</p>
    </div>
  );
}
function DateField({ id, label, value, onChange, l }: { id: string; label: string; value: string; onChange: (v: string) => void; l: L }) {
  return <CampoTesto id={id} label={label} value={value} onChange={onChange} leggi={leggiData} scrivi={scriviData} segnaposto={T(l, 'gg/mm/aaaa', 'dd/mm/yyyy')}
    aiuto={isIso(value) ? T(l, `Giorno/mese/anno: ${M.dataLunga(value, l)}`, `Day/month/year: ${M.dataLunga(value, l)}`) : T(l, 'Giorno/mese/anno, per esempio 14/11/2026', 'Day/month/year, for example 14/11/2026')}
    errore={T(l, 'Data non valida: scrivi giorno/mese/anno, per esempio 14/11/2026', 'Invalid date: write day/month/year, for example 14/11/2026')} />;
}
function OraField({ id, label, value, onChange, l }: { id: string; label: string; value: string; onChange: (v: string) => void; l: L }) {
  return <CampoTesto id={id} label={label} value={value} onChange={onChange} leggi={leggiOra} scrivi={(v) => (isOra(v) ? v : '')} segnaposto="hh:mm"
    aiuto={T(l, 'Ore e minuti su 24 ore, per esempio 17:25', 'Hours and minutes, 24-hour clock, for example 17:25')}
    errore={T(l, 'Ora non valida: scrivi ore:minuti su 24 ore, per esempio 17:25', 'Invalid time: write hours:minutes, 24-hour clock, for example 17:25')} />;
}

const cittaOptions = (l: L) => M.CITTA.map((c) => ({ value: c.id, label: M.nomeCitta(c, l) }));
const zonaOptions = (c: M.Citta, l: L) => c.zone.map((z) => ({ value: z.id, label: z.nome[l] }));
/** Fonte della città : ente, data dell'atto o della pagina, e l'avviso di verificare il varco. */
function FonteCitta({ c, z, l, oggi }: { c: M.Citta; z?: M.Zona; l: L; oggi: string }) {
  // La zona con una pagina sua (Fascia Verde, Area B) cita quella pagina e la sua data, non quella della città
  // (testeurs naïfs du 2026-11-14 : « pagina del 28 luglio » sopra un testo che dice « aggiornata il 2 novembre »).
  const f = (z?.fonteExtra !== undefined && c.fontiExtra?.[z.fonteExtra]) || c.fonte;
  // Fonte di più di un anno (Bologna 2021, Firenze 2023) : lo diciamo accanto al risultato (pagina Metodo, § 3).
  const vecchia = f.data < M.aggiungiGiorni(oggi, -365);
  return (
    <p className="mt-3 rounded-md border border-amber-300 bg-amber-50 px-2 py-1.5 text-xs leading-snug text-amber-900">
      {T(l, 'Orari da ', 'Hours from ')}<Ext href={f.url}>{f.ente}</Ext>{f.senzaData ? T(l, ', pagina senza data', ', undated page') : T(l, `, pagina del ${datum(f.data, l)}`, `, page dated ${datum(f.data, l)}`)}{T(l, `, letta il ${datum(P.retrieved_at, l)}`, `, read on ${datum(P.retrieved_at, l)}`)}
      {vecchia && T(l, ' (è la pagina ufficiale più recente che abbiamo trovato)', ' (the most recent official page we found)')}
      {T(l, ': verifica sempre il cartello al varco, fanno fede l’ordinanza e la segnaletica.', ': always check the sign at the gate; the order and the road signs are what count.')}
    </p>
  );
}

/** Data e ora nel fuso di Roma, lette nel browser dopo il primo rendering. */
function useAdesso(refDay: string, oraIniziale: string, prefix = '') {
  const [s, setS] = useState({ data: refDay, ora: oraIniziale, live: false });
  useEffect(() => {
    const u = readParams(window.location.search);
    const now = M.adessoRoma();
    const d = str(u, `${prefix}d`, ''), o = str(u, `${prefix}h`, '');
    setS({ data: isIso(d) ? d : now.data, ora: isOra(o) ? o : (oraIniziale === 'adesso' ? now.ora : now.ora), live: !isIso(d) && !isOra(o) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [s, setS] as const;
}

/** Parola del divieto secondo il tipo di zona : una ZTL «è attiva», in Area B e Fascia Verde vale «il divieto». */
const amb = (z: M.Zona) => z.tipo === 'ambientale';
export function frase(st: M.Stato, z: M.Zona, l: L, oggi: string): string {
  if (!st.cambio) return st.attiva ? T(l, amb(z) ? 'Divieto sempre in vigore, 24 ore su 24.' : 'Sempre attiva, 24 ore su 24.', amb(z) ? 'Ban always in force, 24 hours a day.' : 'Always active, 24 hours a day.') : T(l, 'Nessuna fascia nei prossimi 15 giorni.', 'No restricted period in the next 15 days.');
  const quando = (d: string) => (d === oggi ? T(l, 'oggi', 'today') : d === M.aggiungiGiorni(oggi, 1) ? T(l, 'domani', 'tomorrow') : M.dataLunga(d, l));
  if (!st.attiva) return amb(z)
    ? T(l, `Il divieto riprende ${quando(st.cambio.data)} alle ${st.cambio.ora}.`, `The ban starts again ${quando(st.cambio.data)} at ${st.cambio.ora}.`)
    : T(l, `Riattiva ${quando(st.cambio.data)} alle ${st.cambio.ora}.`, `Next active ${quando(st.cambio.data)} at ${st.cambio.ora}.`);
  // Fine alle 00:00 = mezzanotte del giorno prima (« fino a mezzanotte », non « fino alle 00:00 di domenica »).
  const mezzanotte = st.cambio.ora === '00:00';
  const g = mezzanotte ? M.aggiungiGiorni(st.cambio.data, -1) : st.cambio.data;
  const fino = mezzanotte ? T(l, 'fino a mezzanotte', 'until midnight') : T(l, `fino alle ${st.cambio.ora}`, `until ${st.cambio.ora}`);
  const giorno = g === oggi ? '' : ` ${g === M.aggiungiGiorni(oggi, 1) ? T(l, 'di domani', 'tomorrow') : T(l, `di ${M.dataLunga(g, l)}`, `on ${M.dataLunga(g, l)}`)}`;
  const fine = T(l, `${amb(z) ? 'Divieto' : 'Attiva'} ${fino}${giorno}.`, `${amb(z) ? 'Ban in force' : 'Active'} ${fino}${giorno}.`);
  // Dopo la fine, quando riprende (testeurs naïfs du 2026-11-14, tour 2 : « fino a mezzanotte », e domenica ?).
  const poi = M.stato(z, st.cambio.data, st.cambio.ora, l);
  if (poi.attiva || !poi.cambio) return fine;
  return `${fine} ${amb(z) ? T(l, `Riprende ${quando(poi.cambio.data)} alle ${poi.cambio.ora}.`, `Starts again ${quando(poi.cambio.data)} at ${poi.cambio.ora}.`) : T(l, `Riattiva ${quando(poi.cambio.data)} alle ${poi.cambio.ora}.`, `Next active ${quando(poi.cambio.data)} at ${poi.cambio.ora}.`)}`;
}
/**
 * Motivo del verdetto, con le parole del tipo di zona (testeurs naïfs du 2026-11-14, tour 2) : « la zona è chiusa »
 * sotto un verdetto che dice che le auto non vietate entrano, e « a quest’ora la zona è aperta » di sabato, giorno
 * senza alcuna fascia. Ogni tipo ha il suo soggetto : la zona (ZTL), il divieto (Area B, Fascia Verde), il ticket (Area C).
 */
type Frase = Record<L, string>;
type PerTipo = { altro: Frase; ambientale: Frase; pagamento: Frase };
const MOTIVO: Record<M.Motivo, PerTipo | Frase> = {
  fascia: {
    altro: { it: 'siamo nell’orario in cui la zona è chiusa', en: 'we are inside the zone’s restricted hours' },
    ambientale: { it: 'siamo nell’orario del divieto', en: 'we are inside the ban hours' },
    pagamento: { it: 'siamo nell’orario in cui si paga il ticket', en: 'we are inside the charging hours' },
  },
  tuttoIlGiorno: {
    altro: { it: 'oggi la zona è chiusa tutto il giorno', en: 'today the zone is closed all day' },
    ambientale: { it: 'oggi il divieto vale tutto il giorno', en: 'today the ban applies all day' },
    pagamento: { it: 'oggi il ticket si paga tutto il giorno', en: 'today the ticket is due all day' },
  },
  fuoriFascia: {
    altro: { it: 'a quest’ora la zona è aperta', en: 'at this time the zone is open' },
    ambientale: { it: 'a quest’ora il divieto non c’è', en: 'at this time there is no ban' },
    pagamento: { it: 'a quest’ora il ticket non si paga', en: 'at this time no ticket is due' },
  },
  liberoOggi: {
    altro: { it: 'oggi la zona non chiude', en: 'today the zone does not close' },
    ambientale: { it: 'oggi il divieto non c’è', en: 'today there is no ban' },
    pagamento: { it: 'oggi il ticket non si paga', en: 'today no ticket is due' },
  },
  sempre: { it: 'zona chiusa 24 ore su 24', en: 'zone closed 24 hours a day' },
  festivo: { it: 'giorno festivo: la fonte dice «esclusi i festivi»', en: 'public holiday: the source says “holidays excluded”' },
  sospesa: { it: 'sospensione indicata dalla fonte', en: 'suspension stated by the source' },
  fuoriPeriodo: { it: 'fuori dal periodo stagionale', en: 'outside the seasonal period' },
  mai: { it: 'la fonte non indica orari di chiusura', en: 'the source states no restricted hours' },
};
export function motivo(m: M.Motivo, z: M.Zona, l: L): string {
  const x = MOTIVO[m];
  return 'altro' in x ? (z.tipo === 'ambientale' || z.tipo === 'pagamento' ? x[z.tipo] : x.altro)[l] : x[l];
}

/**
 * Verdetto : una frase sola, colore. Nessuna promessa oltre la fonte : «puoi entrare» solo a zona spenta.
 * Area B e Fascia Verde (testeurs naïfs du 2026-11-14, tour 2) : non più « Divieto in vigore » + « gli altri entrano »
 * + « la zona è chiusa », ma un verdetto solo, sull'auto : « La tua auto entra se… » (`entraSe` della zona, dalla fonte).
 * `barra` = forma breve per la barra in basso del telefono.
 */
export function verdetto(z: M.Zona, attiva: boolean, l: L): { head: string; azione?: string; tono: Tono; barra?: string } {
  if (z.tipo === 'ambientale') return attiva
    ? { head: z.entraSe?.[l] ?? T(l, 'La tua auto entra se non è tra i veicoli vietati.', 'Your car may enter if it is not a banned vehicle.'), tono: 'ambra', barra: T(l, 'Entra se non è vietata', 'In if not banned') }
    : { head: T(l, 'La tua auto entra.', 'Your car may enter.'), azione: T(l, 'Il divieto per i veicoli più inquinanti non è in vigore.', 'The ban on the most polluting vehicles is not in force.'), tono: 'verde', barra: T(l, 'La tua auto entra', 'Your car may enter') };
  if (z.tipo === 'pagamento') return attiva
    ? { head: T(l, 'Attiva: ticket dovuto', 'Active: ticket due'), azione: T(l, 'Si entra solo con il ticket del giorno.', 'You may enter only with the day’s ticket.'), tono: 'ambra' }
    : { head: T(l, 'Non attiva', 'Not active'), azione: T(l, 'Si entra senza ticket.', 'You may enter without a ticket.'), tono: 'verde' };
  return attiva
    ? { head: T(l, 'ZTL attiva', 'ZTL active'), azione: T(l, 'Non entrare senza permesso.', 'Do not enter without a permit.'), tono: 'rosso' }
    : { head: T(l, 'Non attiva', 'Not active'), azione: T(l, 'Puoi entrare.', 'You may enter.'), tono: 'verde' };
}
/** Mandare il risultato : il link della pagina contiene già città, zona, giorno e ora scelti. */
function Condividi({ l }: { l: L }) {
  const [fatto, setFatto] = useState(false);
  const via = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) { await navigator.share({ url, title: document.title }); return; }
      await navigator.clipboard.writeText(url); setFatto(true); setTimeout(() => setFatto(false), 2500);
    } catch { /* condivisione annullata */ }
  };
  return (
    <p className="mt-3"><button type="button" onClick={via} className="rounded-lg border border-navy-300 bg-white px-3 py-1.5 text-sm font-medium text-navy-800 hover:bg-navy-50">
      {fatto ? T(l, 'Link copiato', 'Link copied') : T(l, 'Manda questo risultato', 'Send this result')}
    </button></p>
  );
}

/* ------------------------------------------------------------------ La ZTL è attiva ? */
export function StatoCalc({ lang: l, id, refDay, methodHref, citta = 'roma', zona, mostraCitta = true }: { lang: L; id: string; refDay: string; methodHref?: string; citta?: string; zona?: string; mostraCitta?: boolean }) {
  const [t, setT] = useAdesso(refDay, '12:00');
  const [sel, setSel] = useState({ c: citta, z: zona ?? M.cittaById(citta)?.zone[0].id ?? '' });
  useEffect(() => {
    const u = readParams(window.location.search);
    const c = M.cittaById(str(u, 'citta', citta)) ? str(u, 'citta', citta) : citta;
    const cc = M.cittaById(c)!;
    const z = str(u, 'zona', c === citta ? (zona ?? cc.zone[0].id) : cc.zone[0].id);
    setSel({ c, z: cc.zone.some((x) => x.id === z) ? z : cc.zone[0].id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const c = M.cittaById(sel.c) ?? M.CITTA[0];
  const z = M.zonaDi(c, sel.z);
  const st = useMemo(() => M.stato(z, t.data, t.ora, l), [z, t.data, t.ora, l]);
  const push = (n: { c?: string; z?: string; data?: string; ora?: string }) => {
    const c2 = n.c ?? sel.c; const cc = M.cittaById(c2)!;
    const z2 = n.c && n.c !== sel.c ? cc.zone[0].id : (n.z ?? sel.z);
    setSel({ c: c2, z: z2 });
    const nt = { data: n.data ?? t.data, ora: n.ora ?? t.ora, live: !(n.data || n.ora) && t.live };
    setT(nt);
    updateURL({ citta: c2 !== citta ? c2 : undefined, zona: z2, d: n.data || n.ora ? nt.data : undefined, h: n.data || n.ora ? nt.ora : undefined });
  };
  const adesso = () => { const now = M.adessoRoma(); setT({ ...now, live: true }); updateURL({ citta: sel.c !== citta ? sel.c : undefined, zona: sel.z }); };
  // Colore e frase d'azione secondo il verdetto (testeurs naïfs du 2026-11-14 : « Non attiva » nella stessa
  // casella rossa di « ZTL attiva »). Rosso = non entrare senza permesso ; verde = zona spenta ; ambra = divieto o
  // ticket che riguarda solo alcuni veicoli (Area B, Fascia Verde, Area C).
  const v = verdetto(z, st.attiva, l);
  const head = v.head;
  const oggi = st.oggi.length
    ? st.oggi.map(([a, b]) => `${M.oraDiMinuti(a)}–${b >= 1440 ? (b === 1440 ? '24:00' : `${M.oraDiMinuti(b)} (+1)`) : M.oraDiMinuti(b)}`).join(' · ')
    : T(l, 'nessuno', 'none');
  const form = (
    <>
      <Row2>
        {mostraCitta && <SelectField id={`${id}-c`} label={T(l, 'Città', 'City')} value={sel.c} onChange={(v) => push({ c: v })} options={cittaOptions(l)} />}
        <SelectField id={`${id}-z`} label={T(l, 'Zona', 'Zone')} value={z.id} onChange={(v) => push({ z: v })} options={zonaOptions(c, l)} />
      </Row2>
      <Row2>
        <DateField id={`${id}-d`} label={T(l, 'Giorno', 'Day')} value={t.data} onChange={(v) => push({ data: v })} l={l} />
        <OraField id={`${id}-h`} label={T(l, 'Ora (ora italiana)', 'Time (Italian time)')} value={t.ora} onChange={(v) => push({ ora: v })} l={l} />
      </Row2>
      {!t.live && <button type="button" onClick={adesso} className="rounded-lg border border-accent-300 bg-white px-4 py-2 text-sm font-medium text-accent-700 hover:bg-accent-50">{T(l, 'Torna ad adesso', 'Back to now')}</button>}
    </>
  );
  return (
    <Shell id={id} form={form} tono={v.tono} result={<>
      <Head label={`${z.nome[l]} · ${M.dataLunga(t.data, l)} ${T(l, 'ore', 'at')} ${t.ora}`} value={head} barra={v.barra} tono={v.tono} azione={v.azione} sub={frase(st, z, l, t.data)} />
      {st.incerta && <Note><strong>{T(l, `Oggi è festivo (${st.festivo}) e la fonte non dice se la ZTL è sospesa: consideriamo la zona attiva, per prudenza.`, `Today is a public holiday (${st.festivo}) and the source does not say whether the ZTL is suspended: we treat it as active, to be safe.`)}</strong></Note>}
      <Rows rows={[
        [T(l, 'Motivo', 'Why'), motivo(st.motivo, z, l)],
        [amb(z) ? T(l, 'Orari del divieto in questo giorno', 'Ban hours on this day') : z.tipo === 'pagamento' ? T(l, 'Orari del ticket in questo giorno', 'Ticket hours on this day') : T(l, 'Orari di chiusura in questo giorno', 'Closed hours on this day'), oggi],
        ...(st.festivo && !st.incerta ? [[T(l, 'Festività', 'Public holiday'), st.festivo] as [string, string]] : []),
      ]} />
      {st.sospensione?.nota && <Note>{st.sospensione.nota[l]}</Note>}
      {z.chiAccede && <Note>{z.chiAccede[l]}</Note>}
      {z.tariffa && <Note>{z.tariffa[l]}</Note>}
      <FonteCitta c={c} z={z} l={l} oggi={refDay} />
      <Condividi l={l} />
      <MethodLink href={methodHref} lang={l} />
    </>} after={
      <div className="mt-5 border-t border-navy-100 pt-4 text-sm text-navy-700">
        <p className="font-medium text-navy-900">{T(l, 'Orari della zona', 'Zone hours')}</p>
        <ul className="mt-1 list-disc pl-5">{M.descriviFasce(z, l, Number(t.data.slice(0, 4))).map((r) => <li key={r}>{r}</li>)}</ul>
        <p className="mt-1">{z.festivi === 'sospesa' ? T(l, 'Festivi esclusi, secondo la fonte.', 'Public holidays excluded, according to the source.') : z.festivi === 'attiva' ? T(l, 'Attiva anche nei festivi, secondo la fonte.', 'Also active on public holidays, according to the source.') : T(l, 'La fonte non dice nulla sui festivi.', 'The source says nothing about public holidays.')}</p>
        {z.note && <p className="mt-1">{z.note[l]}</p>}
      </div>
    } />
  );
}

/* ------------------------------------------------------------------ Tutte le ZTL a un'ora */
export function PanoramaTool({ lang: l, id, refDay, methodHref, soloNotturne = false, oraIniziale = '12:00' }: { lang: L; id: string; refDay: string; methodHref?: string; soloNotturne?: boolean; oraIniziale?: string }) {
  const [t, setT] = useState({ data: refDay, ora: oraIniziale });
  const [filtro, setFiltro] = useState('tutte');
  useEffect(() => {
    const u = readParams(window.location.search);
    const now = M.adessoRoma();
    const d = str(u, 'd', ''), o = str(u, 'h', '');
    setT({ data: isIso(d) ? d : now.data, ora: isOra(o) ? o : (soloNotturne ? oraIniziale : now.ora) });
    const f = str(u, 'citta', 'tutte'); setFiltro(f === 'tutte' || M.cittaById(f) ? f : 'tutte');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const set = (n: { data?: string; ora?: string; f?: string }) => {
    const nt = { data: n.data ?? t.data, ora: n.ora ?? t.ora }; setT(nt);
    const f = n.f ?? filtro; setFiltro(f);
    updateURL({ d: nt.data, h: nt.ora, citta: f !== 'tutte' ? f : undefined });
  };
  const p = useMemo(() => M.panorama(t.data, t.ora, l), [t, l]);
  const righe = p.righe.filter((r) => (!soloNotturne || M.notturna(r.zona)) && (filtro === 'tutte' || r.citta.id === filtro));
  const attive = righe.filter((r) => r.s.attiva).length;
  const form = (
    <>
      <Row2>
        <DateField id={`${id}-d`} label={T(l, 'Giorno', 'Day')} value={t.data} onChange={(v) => set({ data: v })} l={l} />
        <OraField id={`${id}-h`} label={T(l, 'Ora (ora italiana)', 'Time (Italian time)')} value={t.ora} onChange={(v) => set({ ora: v })} l={l} />
      </Row2>
      <SelectField id={`${id}-c`} label={T(l, 'Città', 'City')} value={filtro} onChange={(v) => set({ f: v })} options={[{ value: 'tutte', label: T(l, 'Tutte le città', 'All cities') }, ...cittaOptions(l)]} />
    </>
  );
  return (
    <Shell id={id} form={form} result={<>
      <Head label={`${datum(t.data, l)} ${T(l, 'ore', 'at')} ${t.ora}`} value={`${attive} / ${righe.length}`} sub={soloNotturne ? T(l, 'ZTL notturne attive a quest’ora', 'night ZTLs active at this time') : T(l, 'ZTL attive a quest’ora', 'ZTLs active at this time')} />
      <ul className="mt-3 max-h-80 space-y-1 overflow-y-auto pr-1 text-sm">
        {righe.map((r) => (
          <li key={`${r.citta.id}-${r.zona.id}`} className="flex items-baseline justify-between gap-3 border-b border-navy-100 py-1">
            <span className="text-navy-800">{M.nomeCitta(r.citta, l)} · {r.zona.nome[l]}</span>
            <span className={`shrink-0 font-semibold ${r.s.attiva ? 'text-red-800' : 'text-green-800'}`}>{r.s.attiva ? T(l, 'attiva', 'active') : T(l, 'libera', 'open')}{r.s.incerta ? ' *' : ''}</span>
          </li>
        ))}
      </ul>
      {righe.some((r) => r.s.incerta) && <Note>{T(l, '* Giorno festivo che la fonte non regola: zona considerata attiva per prudenza.', '* Public holiday not covered by the source: zone treated as active, to be safe.')}</Note>}
      <p className="mt-3 rounded-md border border-amber-300 bg-amber-50 px-2 py-1.5 text-xs leading-snug text-amber-900">{T(l, 'Orari letti nelle pagine ufficiali dei comuni, ognuna con la sua data (vedi la pagina della città): verifica sempre il cartello al varco.', 'Hours read from the cities’ official pages, each with its own date (see the city page): always check the sign at the gate.')}</p>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Multa ZTL */
const TIPI: Array<{ value: M.Violazione; it: string; en: string }> = [
  { value: 'ztl', it: 'Accesso senza permesso (ZTL, area pedonale)', en: 'Entry without a permit (ZTL, pedestrian area)' },
  { value: 'tariffata', it: 'Zona a pagamento senza ticket (Area C)', en: 'Charging zone without a ticket (Area C)' },
  { value: 'emissioni', it: 'Veicolo vietato per le emissioni (Area B, Fascia Verde)', en: 'Vehicle banned for emissions (Area B, Fascia Verde)' },
];
export function MultaCalc({ lang: l, id, refDay, methodHref, tipo = 'ztl' }: { lang: L; id: string; refDay: string; methodHref?: string; tipo?: M.Violazione }) {
  const def = { tipo, giorni: 1, notifica: refDay, estero: false };
  const [s, setS] = useState(def);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const u = readParams(window.location.search);
    const tp = str(u, 'tipo', tipo) as M.Violazione;
    const n = str(u, 'notifica', '');
    setS({ tipo: TIPI.some((x) => x.value === tp) ? tp : tipo, giorni: Math.max(1, Math.min(365, Math.round(num(u, 'giorni', 1)))), notifica: isIso(n) ? n : M.adessoRoma().data, estero: str(u, 'estero', '0') === '1' });
    if (u.toString()) setTouched({ url: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const set = (k: string, x: Partial<typeof s>) => { const n = { ...s, ...x }; setS(n); setTouched({ ...touched, [k]: true }); updateURL({ tipo: n.tipo, giorni: n.giorni, notifica: n.notifica, estero: n.estero ? 1 : undefined }); };
  const r = useMemo(() => M.multa({ tipo: s.tipo, giorni: s.giorni, notifica: s.notifica, estero: s.estero }), [s]);
  const e = (x: number) => formatMoney(x, 2, l);
  const form = (
    <>
      <SelectField id={`${id}-t`} label={T(l, 'Che cosa dice il verbale', 'What the fine notice says')} value={s.tipo} onChange={(v) => set('tipo', { tipo: v as M.Violazione })} options={TIPI.map((x) => ({ value: x.value, label: x[l] }))} />
      <NumberField id={`${id}-n`} label={T(l, 'In quanti giorni diversi sei passato', 'On how many different days you entered')} value={s.giorni} min={1} max={365} onChange={(v) => set('giorni', { giorni: Math.max(1, Math.round(v || 1)) })} help={T(l, 'Più passaggi nello stesso giorno nella stessa ZTL: una sola multa.', 'Several entries on the same day in the same ZTL: one fine only.')} />
      <DateField id={`${id}-dn`} label={T(l, 'Data di notifica del verbale', 'Date the notice was served')} value={s.notifica} onChange={(v) => set('notifica', { notifica: v })} l={l} />
      <Toggle id={`${id}-e`} label={T(l, 'Residenza', 'Residence')} value={s.estero ? '1' : '0'} onChange={(v) => set('estero', { estero: v === '1' })} options={[{ value: '0', label: T(l, 'In Italia', 'In Italy') }, { value: '1', label: T(l, 'All’estero', 'Abroad') }]} />
    </>
  );
  const sc = r.scadenze;
  return (
    <Shell id={id} form={form} result={<>
      <MentionExemple lang={l} touched={touched} modifiables={4} suppose={T(l, 'Esempio: un giorno di passaggi, verbale notificato oggi', 'Example: one day of entries, notice served today')} />
      <Head label={T(l, 'Da pagare entro 5 giorni', 'To pay within 5 days')} value={r.entro5 !== null ? e(r.entro5) : '–'} sub={T(l, `${r.sanzioni} ${r.sanzioni === 1 ? 'sanzione' : 'sanzioni'} da ${e(r.minimo)} a ${e(r.massimo)}, più le spese scritte sul verbale`, `${r.sanzioni} ${r.sanzioni === 1 ? 'fine' : 'fines'} of ${e(r.minimo)} to ${e(r.massimo)}, plus the costs on the notice`)} />
      <Rows rows={[
        [T(l, 'Entro 5 giorni (−30%)', 'Within 5 days (−30%)'), r.entro5 !== null ? e(r.entro5) : '–', true],
        [T(l, 'Dal 6° al 60° giorno', 'Day 6 to day 60'), e(r.entro60)],
        [T(l, 'Dopo 60 giorni senza ricorso', 'After 60 days, no appeal'), e(r.dopo60)],
        ...(r.tariffaAggiunta ? [[T(l, 'Ticket recuperato per giorno (compreso)', 'Ticket recovered per day (included)'), e(r.tariffaAggiunta)] as [string, string]] : []),
      ]} />
      {sc && <Rows rows={([
        // Scadenze in ordine di data (testeurs naïfs du 2026-11-14 : il giudice di pace, più vicino, veniva dopo il prefetto).
        [sc.sconto, T(l, 'Sconto del 30% fino al', '30% discount until')],
        [sc.pagamento, T(l, `Senza sconto (${e(r.entro60)}) fino al`, `Without discount (${e(r.entro60)}) until`)],
        [sc.giudice, T(l, `Ricorso al giudice di pace (${s.estero ? P.multa.giudice_giorni_estero : P.multa.giudice_giorni} giorni) entro il`, `Appeal to the giudice di pace (${s.estero ? P.multa.giudice_giorni_estero : P.multa.giudice_giorni} days) by`)],
        [sc.prefetto, T(l, `Ricorso al prefetto (${P.multa.prefetto_giorni} giorni) entro il`, `Appeal to the prefetto (${P.multa.prefetto_giorni} days) by`)],
      ] as Array<[string, string]>).sort((a, b) => a[0].localeCompare(b[0])).map(([d, lab]) => [lab, datum(d, l)] as [string, string])} />}
      {s.tipo === 'emissioni' && <Note>{T(l, `Se la violazione si ripete nel biennio si aggiunge la sospensione della patente da ${P.multa.emissioni.sospensione_giorni[0]} a ${P.multa.emissioni.sospensione_giorni[1]} giorni.`, `If the offence is repeated within two years, the licence is also suspended for ${P.multa.emissioni.sospensione_giorni[0]} to ${P.multa.emissioni.sospensione_giorni[1]} days.`)}</Note>}
      <p className="mt-2 text-xs text-navy-600"><Q k="cds7" l={l}>{T(l, 'Codice della Strada, art. 7', 'Highway Code, art. 7')}</Q> · <Q k="cds198" l={l}>{T(l, 'art. 198', 'art. 198')}</Q> · <Q k="cds202" l={l}>{T(l, 'art. 202', 'art. 202')}</Q> · <Q k="cds203" l={l}>{T(l, 'art. 203', 'art. 203')}</Q> · {T(l, `Normattiva, letto il ${datum(P.retrieved_at, l)}`, `Normattiva, read on ${datum(P.retrieved_at, l)}`)}</p>
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/* ------------------------------------------------------------------ Festivi */
export function FestiviTool({ lang: l, id, refDay, methodHref, citta = 'roma' }: { lang: L; id: string; refDay: string; methodHref?: string; citta?: string }) {
  const [sel, setSel] = useState({ c: citta, anno: Number(refDay.slice(0, 4)) });
  useEffect(() => {
    const u = readParams(window.location.search);
    const c = str(u, 'citta', citta);
    const a = Math.round(num(u, 'anno', Number(M.adessoRoma().data.slice(0, 4))));
    setSel({ c: M.cittaById(c) ? c : citta, anno: a >= 2025 && a <= 2030 ? a : Number(refDay.slice(0, 4)) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const set = (x: Partial<typeof sel>) => { const n = { ...sel, ...x }; setSel(n); updateURL({ citta: n.c, anno: n.anno }); };
  const c = M.cittaById(sel.c) ?? M.CITTA[0];
  const giorni = useMemo(() => {
    const out: Array<{ iso: string; nome: string }> = [];
    for (let d = `${sel.anno}-01-01`; d <= `${sel.anno}-12-31`; d = M.aggiungiGiorni(d, 1)) { const n = M.festivoNazionale(d, l); if (n) out.push({ iso: d, nome: n }); }
    return out;
  }, [sel.anno, l]);
  const prossimo = giorni.find((g) => g.iso >= refDay) ?? giorni[0];
  const regola = (z: M.Zona) => (z.festivi === 'sospesa' ? T(l, 'libera', 'open') : z.festivi === 'attiva' ? T(l, 'attiva', 'active') : T(l, 'non detto', 'not stated'));
  const form = (
    <Row2>
      <SelectField id={`${id}-c`} label={T(l, 'Città', 'City')} value={sel.c} onChange={(v) => set({ c: v })} options={cittaOptions(l)} />
      <SelectField id={`${id}-a`} label={T(l, 'Anno', 'Year')} value={String(sel.anno)} onChange={(v) => set({ anno: Number(v) })} options={[2026, 2027, 2028].map((a) => ({ value: String(a), label: String(a) }))} />
    </Row2>
  );
  const nSosp = c.zone.filter((z) => z.festivi === 'sospesa').length;
  return (
    <Shell id={id} form={form} result={<>
      <Head label={T(l, `${M.nomeCitta(c, l)}: zone libere nei festivi`, `${M.nomeCitta(c, l)}: zones open on holidays`)} value={`${nSosp} / ${c.zone.length}`} sub={T(l, `Prossimo festivo: ${prossimo.nome}, ${M.dataLunga(prossimo.iso, l)}`, `Next holiday: ${prossimo.nome}, ${M.dataLunga(prossimo.iso, l)}`)} />
      <Rows rows={c.zone.map((z) => [z.nome[l], regola(z)] as [string, string])} />
      <details className="mt-3 text-sm text-navy-700"><summary className="cursor-pointer font-medium text-navy-900">{T(l, `Le ${giorni.length} festività nazionali del ${sel.anno}`, `The ${giorni.length} national holidays of ${sel.anno}`)}</summary>
        <ul className="mt-1 list-disc pl-5">{giorni.map((g) => <li key={g.iso}>{M.dataLunga(g.iso, l)}: {g.nome}</li>)}</ul>
      </details>
      <Note>{T(l, 'Il santo patrono del comune non è contato: il comune lo indica nell’ordinanza.', 'The city’s patron saint day is not counted: the city states it in its order.')}</Note>
      <FonteCitta c={c} l={l} oggi={refDay} />
      <MethodLink href={methodHref} lang={l} />
    </>} />
  );
}

/** Numero di zone e città coperte, per i testi. */
export const conteggi = () => ({ citta: M.CITTA.length, zone: M.CITTA.reduce((n, c) => n + c.zone.length, 0) });
export { formatNumber };
