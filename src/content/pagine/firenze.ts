import { defineGuide } from '../../lib/guide-types';
import { tabellaZone } from '../../lib/citta';

/** Firenze : orari diurni e ZTL notturna estiva per settori (Servizi alla Strada, pagina del 30/10/2023). */
export default defineGuide({
  id: 'firenze',
  group: 'citta',
  order: 5,
  tool: 'stato',
  citta: 'firenze',
  zona: 'settori-abo',
  related: ['notturne', 'multa', 'permessi', 'bologna', 'pavia', 'ricorso'],
  sources: ['firenze', 'cds7', 'cds198'],
  it: {
    slug: 'ztl-firenze',
    nav: 'Firenze',
    card: 'Feriali 7:30–20:00, sabato 7:30–16:00, notturna estiva da aprile a ottobre: settori A, B, O, F e G.',
    title: 'ZTL Firenze 2026: orari, notturna estiva e varchi adesso',
    description: 'ZTL Firenze: varchi attivi dal lunedì al venerdì 7:30–20:00 e il sabato 7:30–16:00; da aprile a ottobre la notturna del giovedì, venerdì e sabato. Stato adesso.',
    h1: 'ZTL Firenze: orari e notturna estiva',
    intro: 'La ZTL di Firenze cambia orario fra l’inverno e l’estate. Preimpostati i settori A, B e O: scegli giorno e ora per vedere se i varchi sono attivi.',
    resume: (h) => `La zona a traffico limitato di Firenze copre il centro storico, diviso in settori, ed è regolata dal disciplinare n. 2011/M/04192 e dalle sue modifiche. Secondo Servizi alla Strada, la società che gestisce le autorizzazioni per il Comune, i varchi telematici sono attivi dal lunedì al venerdì dalle 7:30 alle 20:00 e il sabato dalle 7:30 alle 16:00. Dal primo giovedì di aprile alla prima domenica di ottobre si aggiunge la ZTL notturna estiva, con orari diversi per settore: nei settori A, B e O dalle 23:00 del giovedì alle 3:00 del venerdì, dalle 20:00 del venerdì alle 3:00 del sabato e dalle 16:00 del sabato alle 3:00 della domenica; nei settori F e G dalle 23:00 alle 3:00 nelle stesse tre notti. D’estate, quindi, il venerdì e il sabato dei settori centrali il divieto è continuo dalla mattina fino alle 3 di notte. La pagina, aggiornata il 30 ottobre 2023, precisa che i dettagli della notturna sono fissati ogni anno da un’ordinanza: il cartello al varco resta il riferimento.`,
    faqs: () => [
      { q: 'La ZTL di Firenze è attiva la domenica?', a: 'Di giorno no: le fasce diurne valgono dal lunedì al sabato. Nel periodo estivo, però, la notturna del sabato finisce alle 3:00 della domenica, quindi la domenica notte fino alle 3 il varco può essere ancora attivo. Da ottobre ad aprile la domenica non ci sono fasce.' },
      { q: 'Quando parte la ZTL notturna estiva di Firenze?', a: 'Dal primo giovedì di aprile alla prima domenica di ottobre, secondo la pagina di Servizi alla Strada. Nel 2027 il primo giovedì di aprile è il 1° aprile e la prima domenica di ottobre è il 3 ottobre. Lo strumento calcola le date per ogni anno, ma l’ordinanza annuale può spostarle.' },
      { q: 'Il mio albergo è nella ZTL di Firenze: posso entrare?', a: 'Chiedi all’albergo, prima di arrivare, se comunica la targa degli ospiti al Comune e in quali tempi, indicando il giorno e l’ora di ingresso. Il disciplinare del Comune prevede le categorie e i permessi temporanei; il varco ti registra comunque, quindi la comunicazione deve arrivare nei tempi indicati.' },
    ],
    body: (h) => `<h2>Orari della ZTL Firenze per settore</h2>
${tabellaZone(h, 'firenze')}
<p>Le date della notturna estiva sono calcolate: primo giovedì di aprile e prima domenica di ottobre dell’anno scelto. La fonte non dice nulla sui giorni festivi: quando un festivo cade in una fascia, lo strumento considera la zona attiva e lo segnala.</p>
<h2>Una fonte del 2023</h2>
<p>La pagina di Servizi alla Strada è la fonte ufficiale più chiara sugli orari, ma porta la data del 30 ottobre 2023. Abbiamo cercato una conferma più recente sul sito del Comune di Firenze, senza trovare una pagina che riporti gli orari in modo leggibile. Per questo la data è sempre accanto al risultato, e il cartello al varco vale più dello strumento.</p>
<h2>Più passaggi, una multa al giorno</h2>
<p>Chi gira in auto nel centro di Firenze e passa più varchi della stessa ZTL nello stesso giorno riceve una sola sanzione per quel giorno, come prevede l’articolo 198 del Codice della Strada per i passaggi rilevati dalle telecamere. Il ${h.a('multa', 'calcolo della multa ZTL')} conta i giorni, e la pagina sulle ${h.a('notturne', 'ZTL notturne')} confronta Firenze con Roma e Milano.</p>`,
  },
  en: {
    slug: 'florence-ztl',
    nav: 'Florence',
    card: 'Weekdays 7:30–20:00, Saturday 7:30–16:00, summer night ZTL April to October: sectors A, B, O, F and G.',
    title: 'Florence ZTL 2026: hours, summer night ZTL and gates now',
    description: 'Florence ZTL: gates active Monday to Friday 7:30–20:00 and Saturday 7:30–16:00; from April to October the Thursday, Friday and Saturday night ZTL. Status now.',
    h1: 'Florence ZTL: hours and summer night zone',
    intro: 'The Florence ZTL changes hours between winter and summer. Sectors A, B and O are preset: pick a day and time to see whether the gates are active.',
    resume: (h) => `Florence’s limited-traffic zone covers the historic centre, divided into sectors, and is governed by regulation no. 2011/M/04192 and its amendments. According to Servizi alla Strada, the company that handles permits for the city, the camera gates are active Monday to Friday from 7:30 to 20:00 and on Saturday from 7:30 to 16:00. From the first Thursday of April to the first Sunday of October the summer night ZTL is added, with different hours per sector: in sectors A, B and O from 23:00 on Thursday to 3:00 on Friday, from 20:00 on Friday to 3:00 on Saturday and from 16:00 on Saturday to 3:00 on Sunday; in sectors F and G from 23:00 to 3:00 on the same three nights. In summer, then, on Friday and Saturday the central sectors are closed continuously from morning until 3 a.m. The page, updated on 30 October 2023, notes that the night details are set each year by an order: the sign at the gate remains the reference.`,
    faqs: () => [
      { q: 'Is the Florence ZTL active on Sunday?', a: 'Not during the day: the daytime periods run Monday to Saturday. In the summer period, however, Saturday’s night zone ends at 3:00 on Sunday, so in the early hours of Sunday the gate may still be on. From October to April there are no periods on Sunday.' },
      { q: 'When does Florence’s summer night ZTL start?', a: 'From the first Thursday of April to the first Sunday of October, according to the Servizi alla Strada page. In 2027 the first Thursday of April is 1 April and the first Sunday of October is 3 October. The tool works out the dates for each year, but the annual order may move them.' },
      { q: 'My hotel is inside the Florence ZTL: may I drive in?', a: 'Ask the hotel before you arrive whether it registers guests’ plates with the city and how soon, giving your day and time of entry. The city regulation sets the categories and temporary permits; the gate records you anyway, so the registration must arrive within the stated time.' },
    ],
    body: (h) => `<h2>Florence ZTL hours by sector</h2>
${tabellaZone(h, 'firenze')}
<p>The summer night dates are computed: the first Thursday of April and the first Sunday of October of the chosen year. The source says nothing about public holidays: when a holiday falls in a period, the tool treats the zone as active and flags it.</p>
<h2>A source from 2023</h2>
<p>The Servizi alla Strada page is the clearest official source on the hours, but it is dated 30 October 2023. We looked for a more recent confirmation on the City of Florence website and found no page giving the hours in readable form. That is why the date always appears next to the result, and why the sign at the gate counts for more than the tool.</p>
<h2>Several entries, one fine per day</h2>
<p>Drivers who move around central Florence and pass several gates of the same ZTL on the same day receive a single fine for that day, as article 198 of the Highway Code provides for entries recorded by cameras. The ${h.a('multa', 'ZTL fine calculator')} counts the days, and the ${h.a('notturne', 'night ZTL')} page compares Florence with Rome and Milan.</p>`,
  },
});
