import { defineGuide } from '../../lib/guide-types';
import type { Helpers } from '../../lib/guide-types';

const tabellaNotturne = (h: Helpers) => {
  const anno = Number(h.today.slice(0, 4));
  const rows: Array<Array<string | number>> = [];
  for (const c of h.M.CITTA) for (const z of c.zone) if (h.M.notturna(z) && !h.M.h24(z)) rows.push([h.a(c.id, h.M.nomeCitta(c, h.lang)), z.nome[h.lang], h.M.descriviFasce(z, h.lang, anno).join('; ')]);
  return h.table([h.T('Città', 'City'), h.T('Zona', 'Zone'), h.T('Quando è attiva', 'When it is active')], rows, h.T('Fonti comunali indicate in ogni pagina di città, lette il 13 novembre 2026.', 'City sources shown on each city page, read on 13 November 2026.'), ['l', 'l', 'l']);
};

/** ZTL notturne : tutte le zone con fasce serali o notturne (Roma, Milano, Firenze, Torino, Palermo). */
export default defineGuide({
  id: 'notturne',
  group: 'regole',
  order: 15,
  tool: 'notturne',
  preset: { ora: '23:30' },
  related: ['roma', 'milano', 'firenze', 'palermo', 'attive-oggi', 'festivi'],
  sources: ['roma', 'milanoOD', 'firenze', 'torino', 'palermo'],
  it: {
    slug: 'ztl-notturne',
    nav: 'ZTL notturne',
    card: 'Trastevere, San Lorenzo, Navigli, Firenze d’estate, Palermo, Area Romana: le ZTL che si accendono la sera.',
    title: 'ZTL notturne 2026: Roma, Milano, Firenze, Palermo, orari',
    description: 'ZTL notturne: Trastevere e San Lorenzo dalle 21:30, Navigli dalle 20, Firenze d’estate, Palermo e l’Area Romana di Torino. Guarda quali sono attive stanotte.',
    h1: 'ZTL notturne: quali sono attive stanotte',
    intro: 'Le ZTL notturne si accendono quando le zone diurne si spengono. Lo strumento parte dalle 23:30 di oggi: cambia ora e data per il tuo rientro.',
    resume: (h) => `Molte città chiudono il centro di sera per proteggere le zone della movida e il sonno dei residenti, e chi entra in auto dopo cena trova spesso una ZTL che di giorno non c’era. A Roma le ZTL notturne di Trastevere e San Lorenzo partono alle 21:30 del venerdì e del sabato, e da maggio a ottobre anche il mercoledì e il giovedì; quelle del Centro Storico e di Testaccio dalle 23:00, sempre fino alle 3:00. A Milano la ZTL dei Navigli è chiusa ogni sera dalle 20:00 alle 7:00, quella dell’Arco della Pace dalle 22:00 alle 6:00, e via Lagrange e corso Manusardi hanno orari diversi fra settimana e weekend. A Firenze la notturna vale solo d’estate, dal primo giovedì di aprile alla prima domenica di ottobre. A Palermo il centro è chiuso il venerdì e il sabato notte fino alle 6, con orari che cambiano il 1° maggio e il 1° novembre. A Torino l’Area Romana è chiusa tutte le notti dalle 21:00 alle 7:30. Lo strumento elenca solo le zone con fasce serali o notturne e parte dalle 23:30 di stasera. In agosto alcune notturne di Roma si fermano: il calcolo ne tiene conto.`,
    faqs: () => [
      { q: 'La ZTL notturna finisce alle 3: se esco alle 2:50 prendo la multa?', a: 'I varchi agli accessi registrano gli ingressi, quindi conta l’ora in cui entri, non quella in cui esci; dove ci sono anche telecamere interne, come a Torino, conta anche la circolazione dentro la zona. Se entri alle 2:50 senza permesso, l’ingresso è dentro la fascia; se entri alle 3:05, in una zona che finisce alle 3:00, sei fuori fascia.' },
      { q: 'Le ZTL notturne valgono anche nei festivi?', a: 'Dipende dalla zona. A Roma le notturne del Centro Storico e di Testaccio si fermano nei festivi, quelle di Trastevere e San Lorenzo no. A Milano le notturne dei Navigli valgono tutti i giorni. A Palermo la fonte non lo dice, quindi il calcolo le considera attive e lo segnala.' },
      { q: 'Perché a Roma la notte del venerdì risulta attiva il sabato mattina?', a: 'Perché le fasce notturne attraversano la mezzanotte: la ZTL notturna del venerdì va dalle 23:00 del venerdì alle 3:00 del sabato. Il calcolo segue la fascia oltre la mezzanotte, quindi alle 2:00 di sabato la zona risulta ancora attiva. Lo stesso vale per tutte le notturne che finiscono dopo mezzanotte, a Roma come a Milano o a Palermo.' },
    ],
    body: (h) => `<h2>Tutte le ZTL notturne del sito</h2>
${tabellaNotturne(h)}
<h2>Estate e inverno</h2>
<p>Tre città cambiano le notturne con la stagione. Roma aggiunge il mercoledì e il giovedì a Trastevere e San Lorenzo da maggio a ottobre, e spegne il Centro Storico notturno e San Lorenzo in agosto. ${h.a('firenze', 'Firenze')} attiva la notturna solo da aprile a ottobre. ${h.a('palermo', 'Palermo')} anticipa il sabato sera alle 20:00 d’estate e lo posticipa alle 23:00 d’inverno.</p>
<h2>Prima di uscire la sera</h2>
<p>Se torni in auto dopo mezzanotte, imposta l’ora del rientro e non quella della partenza: è l’ingresso che conta. Per una sola zona usa la pagina della città, per le altre ore del giorno ${h.a('attive-oggi', 'ZTL attive oggi')}, e se ormai il verbale è arrivato il ${h.a('multa', 'calcolo della multa ZTL')}.</p>`,
  },
  en: {
    slug: 'night-ztl-italy',
    nav: 'Night ZTLs',
    card: 'Trastevere, San Lorenzo, the Navigli, Florence in summer, Palermo, Area Romana: the ZTLs that switch on at night.',
    title: 'Night ZTL in Italy 2026: Rome, Milan, Florence, Palermo',
    description: 'Night ZTL in Italy: Trastevere and San Lorenzo from 21:30, the Navigli from 20:00, Florence in summer, Palermo and Turin’s Area Romana. See what is on tonight.',
    h1: 'Night ZTL in Italy: which are active tonight',
    intro: 'The night ZTL in Italy switches on when the daytime zones switch off. The tool starts at 23:30 today: change the time and date for your drive home.',
    resume: (h) => `Many cities close their centres in the evening to protect nightlife districts and residents’ sleep, and drivers heading in after dinner often meet a ZTL that was not there during the day. In Rome the Trastevere and San Lorenzo night ZTLs start at 21:30 on Friday and Saturday, and from May to October on Wednesday and Thursday too; the Historic Centre and Testaccio ones start at 23:00, all of them running until 3:00. In Milan the Navigli ZTL is closed every evening from 20:00 to 7:00, the Arco della Pace one from 22:00 to 6:00, and Via Lagrange and Corso Manusardi have different hours on weekdays and at weekends. In Florence the night zone only applies in summer, from the first Thursday of April to the first Sunday of October. In Palermo the centre is closed on Friday and Saturday nights until 6:00, with hours that change on 1 May and 1 November. In Turin the Area Romana is closed every night from 21:00 to 7:30. The tool lists only zones with evening or night periods and starts at 23:30 tonight. In August some Rome night zones stop: the calculation takes that into account.`,
    faqs: () => [
      { q: 'The night ZTL ends at 3:00: if I leave at 2:50, am I fined?', a: 'Entry gates record entries, so what counts is when you drive in, not when you leave; where there are cameras inside the zone too, as in Turin, driving inside the zone also counts. If you enter at 2:50 without a permit, that entry falls inside the period; if you enter at 3:05 a zone that ends at 3:00, you are outside it.' },
      { q: 'Do night ZTLs apply on public holidays?', a: 'It depends on the zone. In Rome the Historic Centre and Testaccio night zones stop on holidays, while Trastevere and San Lorenzo do not. In Milan the Navigli night zones apply every day. In Palermo the source does not say, so the calculation treats them as active and flags it.' },
      { q: 'Why does Rome’s Friday night zone show as active on Saturday morning?', a: 'Because night periods cross midnight: the Friday night ZTL runs from 23:00 on Friday to 3:00 on Saturday. The calculation follows the period past midnight, so at 2:00 on Saturday the zone still shows as active. The same applies to every night zone that ends after midnight, in Rome as in Milan or Palermo.' },
    ],
    body: (h) => `<h2>Every night ZTL on this site</h2>
${tabellaNotturne(h)}
<h2>Summer and winter</h2>
<p>Three cities change their night zones with the season. Rome adds Wednesday and Thursday in Trastevere and San Lorenzo from May to October, and switches off the Historic Centre night zone and San Lorenzo in August. ${h.a('firenze', 'Florence')} runs its night zone only from April to October. ${h.a('palermo', 'Palermo')} brings Saturday evening forward to 20:00 in summer and back to 23:00 in winter.</p>
<h2>Before you go out in the evening</h2>
<p>If you drive back after midnight, set the time of your return, not your departure: it is the entry that counts. For a single zone use the city page, for other times of day ${h.a('attive-oggi', 'ZTLs active today')}, and if the notice has already arrived the ${h.a('multa', 'ZTL fine calculator')}.</p>`,
  },
});
