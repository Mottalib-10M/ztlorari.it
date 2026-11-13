import { defineGuide } from '../../lib/guide-types';
import type { Helpers } from '../../lib/guide-types';

const regola = (h: Helpers, f: string) => (f === 'sospesa' ? h.T('si ferma', 'stops') : f === 'attiva' ? h.T('resta attiva', 'stays active') : h.T('la fonte non lo dice', 'source does not say'));
const tabellaFestivi = (h: Helpers) => {
  const rows: Array<Array<string | number>> = [];
  for (const c of h.M.CITTA) for (const z of c.zone) rows.push([h.a(c.id, h.M.nomeCitta(c, h.lang)), z.nome[h.lang], regola(h, z.festivi)]);
  return h.table([h.T('Città', 'City'), h.T('Zona', 'Zone'), h.T('Nei festivi', 'On holidays')], rows, h.T('Fonti comunali indicate in ogni pagina di città, lette il 13 novembre 2026.', 'City sources shown on each city page, read on 13 November 2026.'), ['l', 'l', 'l']);
};

/** ZTL nei festivi : regola di ogni zona (sospesa, attiva, non indicata) e festività nazionali calcolate. */
export default defineGuide({
  id: 'festivi',
  group: 'regole',
  order: 16,
  tool: 'festivi',
  citta: 'roma',
  related: ['attive-oggi', 'notturne', 'roma', 'bologna', 'area-c', 'palermo'],
  sources: ['roma', 'milanoC', 'bologna', 'torino', 'pavia'],
  it: {
    slug: 'ztl-festivi',
    nav: 'ZTL nei festivi',
    card: 'Natale, Pasquetta, Ferragosto: quali ZTL si fermano nei festivi e quali restano accese, zona per zona.',
    title: 'ZTL festivi 2026: Natale, Pasquetta e Ferragosto per città',
    description: 'ZTL nei festivi: a Roma e Milano le zone diurne si fermano, a Bologna, Torino e Pavia alcune restano attive. Le festività 2026-2028 e la regola di ogni zona.',
    h1: 'ZTL festivi: chi si ferma e chi resta attiva',
    intro: 'La ZTL nei festivi non segue una regola unica. Scegli la città e l’anno: lo strumento elenca le zone libere e le festività nazionali.',
    resume: (h) => {
      let s = 0, a = 0, n = 0;
      for (const c of h.M.CITTA) for (const z of c.zone) { if (z.festivi === 'sospesa') s++; else if (z.festivi === 'attiva') a++; else n++; }
      return `Non esiste una regola nazionale che spenga le ZTL nei giorni festivi: decide ogni Comune, zona per zona. Fra le zone di questo sito, ${s} si fermano nei festivi, ${a} restano attive e per ${n} la fonte non lo dice. A Roma la ZTL Centro Storico diurna, il Tridente, Trastevere diurna e le notturne del Centro e di Testaccio si fermano, mentre le notturne di Trastevere e San Lorenzo restano accese. A Milano Area C e Area B valgono dal lunedì al venerdì, festivi esclusi: a Natale e a Ferragosto si entra senza ticket. A Bologna invece la fonte dice «tutti i giorni dalle 7 alle 20», quindi la ZTL resta attiva anche a Natale. A Torino la ZTL Centrale si ferma, ma Area Romana, corsie riservate, ZTL Pedonale e Valentino no; a Pavia la ZTL è chiusa sempre. Per Firenze e Palermo le fonti non parlano dei festivi: il calcolo considera la zona attiva e lo segnala. Le festività considerate sono le dieci nazionali a data fissa più Pasqua e il Lunedì dell’Angelo; il santo patrono di ogni città non è contato.`;
    },
    faqs: () => [
      { q: 'A Natale la ZTL di Roma è attiva?', a: 'Le zone diurne no: il 25 e il 26 dicembre sono festivi e la ZTL Centro Storico diurna, il Tridente e Trastevere diurna si fermano. Le notturne di Trastevere e San Lorenzo, se il festivo cade in un giorno con fascia, restano attive. Lo strumento calcola ogni anno in quale giorno della settimana cadono le feste.' },
      { q: 'Il santo patrono conta come festivo per la ZTL?', a: 'Dipende dall’ordinanza del Comune, e le fonti che abbiamo letto non lo dicono in modo esplicito. Per questo il calcolo non conta il patrono: a Roma il 29 giugno, a Milano il 7 dicembre, a Torino e Firenze il 24 giugno la zona risulta con l’orario di un giorno normale. Controlla il cartello al varco.' },
      { q: 'A Pasquetta la ZTL di Milano è attiva?', a: 'Area C e Area B no: il Lunedì dell’Angelo è festivo e le due aree valgono solo nei giorni feriali. Le ZTL notturne dei Navigli e dell’Arco della Pace, invece, valgono tutti i giorni e restano attive la sera di Pasquetta.' },
    ],
    body: (h) => `<h2>ZTL nei festivi zona per zona</h2>
${tabellaFestivi(h)}
<h2>Le festività contate</h2>
<p>Capodanno, Epifania, Pasqua, Lunedì dell’Angelo, Festa della Liberazione, Festa del Lavoro, Festa della Repubblica, Ferragosto, Ognissanti, Immacolata, Natale e Santo Stefano. Pasqua viene calcolata per ogni anno; la domenica è sempre un giorno festivo nel calcolo. Le chiusure straordinarie, come i grandi eventi o le domeniche ecologiche della ${h.a('fascia-verde', 'Fascia Verde')}, sono decise da ordinanze puntuali e non sono nel calcolo.</p>
<h2>Agosto non è un festivo</h2>
<p>Alcune città spengono le ZTL in estate, ma è una sospensione, non un festivo: Torino ferma la ZTL Centrale dal 10 al 23 agosto 2026, Roma spegne in agosto le notturne del Centro Storico e di San Lorenzo. Il 15 agosto, invece, è festivo ovunque. Per vedere l’effetto su una data precisa usa ${h.a('attive-oggi', 'ZTL attive oggi')}.</p>`,
  },
  en: {
    slug: 'ztl-public-holidays',
    nav: 'ZTL on holidays',
    card: 'Christmas, Easter Monday, Ferragosto: which ZTLs stop on public holidays and which stay on, zone by zone.',
    title: 'ZTL on public holidays 2026: Christmas, Easter, Ferragosto',
    description: 'ZTL on public holidays: in Rome and Milan the daytime zones stop, while in Bologna, Turin and Pavia some stay on. The 2026-2028 holidays and each zone’s rule.',
    h1: 'ZTL on public holidays: which stop, which stay on',
    intro: 'A ZTL on public holidays follows no single rule. Pick the city and year: the tool lists the zones that are open and the national holidays.',
    resume: (h) => {
      let s = 0, a = 0, n = 0;
      for (const c of h.M.CITTA) for (const z of c.zone) { if (z.festivi === 'sospesa') s++; else if (z.festivi === 'attiva') a++; else n++; }
      return `There is no national rule that switches ZTLs off on public holidays: each city decides, zone by zone. Of the zones on this site, ${s} stop on holidays, ${a} stay active and for ${n} the source does not say. In Rome the daytime Historic Centre ZTL, the Tridente, daytime Trastevere and the Historic Centre and Testaccio night zones stop, while the Trastevere and San Lorenzo night zones stay on. In Milan, Area C and Area B apply Monday to Friday, holidays excluded: at Christmas and Ferragosto you enter without a ticket. In Bologna, however, the source says “every day from 7:00 to 20:00”, so the ZTL stays active even at Christmas. In Turin the ZTL Centrale stops, but Area Romana, the reserved lanes, the Pedestrian ZTL and Valentino do not; in Pavia the ZTL is always closed. For Florence and Palermo the sources say nothing about holidays: the calculation treats the zone as active and flags it. The holidays counted are the ten fixed national ones plus Easter Sunday and Easter Monday; each city’s patron saint day is not counted.`;
    },
    faqs: () => [
      { q: 'Is the Rome ZTL active at Christmas?', a: 'The daytime zones are not: 25 and 26 December are holidays and the daytime Historic Centre ZTL, the Tridente and daytime Trastevere stop. The Trastevere and San Lorenzo night zones, if the holiday falls on a day with a period, stay active. The tool works out each year which weekday the holidays fall on.' },
      { q: 'Does the patron saint day count as a holiday for the ZTL?', a: 'It depends on the city’s order, and the sources we read do not say so explicitly. That is why the calculation does not count the patron saint: in Rome on 29 June, in Milan on 7 December, in Turin and Florence on 24 June the zone shows normal weekday hours. Check the sign at the gate.' },
      { q: 'Is the Milan ZTL active on Easter Monday?', a: 'Area C and Area B are not: Easter Monday is a holiday and both areas only apply on working days. The Navigli and Arco della Pace night ZTLs, however, apply every day and stay active on the evening of Easter Monday.' },
    ],
    body: (h) => `<h2>ZTL on public holidays, zone by zone</h2>
${tabellaFestivi(h)}
<h2>The holidays counted</h2>
<p>New Year’s Day, Epiphany, Easter Sunday, Easter Monday, Liberation Day, Labour Day, Republic Day, Ferragosto, All Saints’ Day, the Immaculate Conception, Christmas Day and St Stephen’s Day. Easter is computed for each year; Sunday is always a holiday in the calculation. One-off closures, such as major events or the eco Sundays in the ${h.a('fascia-verde', 'Fascia Verde')}, are set by specific orders and are not in the calculation.</p>
<h2>August is not a holiday</h2>
<p>Some cities switch their ZTLs off in summer, but that is a suspension, not a holiday: Turin stops the ZTL Centrale from 10 to 23 August 2026, and Rome switches off the Historic Centre and San Lorenzo night zones in August. 15 August, on the other hand, is a holiday everywhere. To see the effect on a specific date use ${h.a('attive-oggi', 'ZTLs active today')}.</p>`,
  },
});
