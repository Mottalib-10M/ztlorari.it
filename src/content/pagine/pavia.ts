import { defineGuide } from '../../lib/guide-types';
import { tabellaZone } from '../../lib/citta';

/** Pavia : ZTL 24 ore su 24 in tre zone, permessi residenti e giornalieri (schede del Comune, ultima modifica 22/09/2026). */
export default defineGuide({
  id: 'pavia',
  group: 'citta',
  order: 9,
  tool: 'stato',
  citta: 'pavia',
  zona: 'ztl',
  related: ['permessi', 'milano', 'bologna', 'varchi', 'multa', 'torino'],
  sources: ['pavia', 'pvResidente', 'pvGiornaliero', 'cds7'],
  it: {
    slug: 'ztl-pavia',
    nav: 'Pavia',
    card: 'Chiusa 24 ore su 24 in tre zone, blu, azzurra e verde: permesso giornaliero da 10 € e permessi residenti.',
    title: 'ZTL Pavia 2026: zone blu, azzurra e verde, permesso da 10 €',
    description: 'ZTL Pavia: chiusa 24 ore su 24, tutti i giorni, in tre zone con regole diverse. Permesso giornaliero da 10 €, residenti da 42 € l’anno, carico e scarico.',
    h1: 'ZTL Pavia: zone, orari e permessi',
    intro: 'La ZTL di Pavia non ha fasce orarie: è chiusa sempre. Lo strumento lo conferma per ogni giorno e ora; sotto trovi le tre zone e i permessi.',
    resume: (h) => `A Pavia la zona a traffico limitato non si spegne mai. Secondo la scheda del Comune di Pavia, aggiornata il 22 settembre 2026, nelle zone a traffico limitato la circolazione è vietata 24 ore su 24, tutti i giorni. Le zone sono tre. Nella zona blu, l’area pedonale, nessun veicolo può circolare né sostare. Nella zona azzurra circolano solo i veicoli autorizzati, ma nessuno può sostare. Nella zona verde i veicoli autorizzati possono circolare e sostare. Entrano le persone con disabilità titolari di permesso, le forze di polizia e i mezzi di soccorso, chi ha un permesso; i taxi e le auto a noleggio con conducente devono comunicare il transito al Comune entro 48 ore. I furgoni fino a 35 quintali possono entrare per il carico e scarico dalle 7:00 alle 10:30 e dalle 14:30 alle 16:00, ma non nella zona blu né su corso Cavour, corso Mazzini e strada Nuova. Chi non ha un permesso annuale può chiedere un permesso giornaliero, che per le auto costa ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} al giorno.`,
    faqs: (h) => [
      { q: 'Quanto costa il permesso ZTL per i residenti a Pavia?', a: `Il permesso di circolazione e sosta per i residenti costa ${h.eur(h.P.permessi.pavia.residente[0], 2)} l’anno per il primo veicolo del nucleo familiare, ${h.eur(h.P.permessi.pavia.residente[1], 2)} per il secondo e ${h.eur(h.P.permessi.pavia.residente[2], 2)} dal terzo, più le marche da bollo: due da ${h.eur(h.P.permessi.pavia.bollo, 2)}, e per il secondo e i successivi una da ${h.eur(2, 2)} in più.` },
      { q: 'Che cosa permette il permesso giornaliero di Pavia?', a: `Con l’auto consente di circolare e di sostare 60 minuti, con il disco orario esposto insieme al pass, negli spazi gialli del quadrante e della zona di destinazione, dalle 7:00 alle 10:30 e dalle 14:30 alle 16:00. Costa ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} al giorno per auto e furgoni fino a 35 quintali, ${h.eur(h.P.permessi.pavia.giornaliero_35_75, 2)} fino a 75 quintali e ${h.eur(h.P.permessi.pavia.giornaliero_oltre_75, 2)} oltre.` },
      { q: 'Sono entrato in taxi nella ZTL di Pavia: devo fare qualcosa?', a: 'No, se sei il passeggero: è il tassista o l’autista NCC che deve comunicare il transito al Comune entro le 48 ore successive, indicando la data e allegando la carta di circolazione e la licenza. Se però guidavi un’auto a noleggio senza conducente, quella non è un NCC e serve un permesso.' },
    ],
    body: (h) => `<h2>Orari della ZTL Pavia</h2>
${tabellaZone(h, 'pavia')}
<h2>Permessi ZTL a Pavia</h2>
${h.table([h.T('Permesso', 'Permit'), h.T('Costo', 'Cost')], [
  [h.T('Residente, 1° permesso del nucleo', 'Resident, 1st permit in the household'), h.T(`${h.eur(h.P.permessi.pavia.residente[0], 2)} l’anno`, `${h.eur(h.P.permessi.pavia.residente[0], 2)} a year`)],
  [h.T('Residente, 2° permesso', 'Resident, 2nd permit'), h.T(`${h.eur(h.P.permessi.pavia.residente[1], 2)} l’anno`, `${h.eur(h.P.permessi.pavia.residente[1], 2)} a year`)],
  [h.T('Residente, dal 3° permesso', 'Resident, from the 3rd permit'), h.T(`${h.eur(h.P.permessi.pavia.residente[2], 2)} l’anno`, `${h.eur(h.P.permessi.pavia.residente[2], 2)} a year`)],
  [h.T('Giornaliero, auto e furgoni fino a 35 q', 'Day permit, cars and vans up to 3.5 t'), h.T(`${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} al giorno`, `${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} a day`)],
  [h.T('Giornaliero, autocarri da 35 a 75 q', 'Day permit, trucks 3.5 to 7.5 t'), h.T(`${h.eur(h.P.permessi.pavia.giornaliero_35_75, 2)} al giorno`, `${h.eur(h.P.permessi.pavia.giornaliero_35_75, 2)} a day`)],
  [h.T('Giornaliero, autocarri oltre 75 q', 'Day permit, trucks over 7.5 t'), h.T(`${h.eur(h.P.permessi.pavia.giornaliero_oltre_75, 2)} al giorno`, `${h.eur(h.P.permessi.pavia.giornaliero_oltre_75, 2)} a day`)],
], h.T('Fonte: Comune di Pavia, schede dei permessi residenti e giornalieri, lette il 13 novembre 2026. Bolli esclusi.', 'Source: City of Pavia, resident and day permit pages, read on 13 November 2026. Stamp duty excluded.'), ['l', 'r'])}
<p>I residenti con box o cortile ricevono un permesso di sola circolazione, per raggiungere il posto auto; quelli senza ricevono il permesso di circolazione e sosta, che consente di parcheggiare senza pagare sulle strisce gialle e blu della zona indicata sul pass. Il Comune prevede anche permessi per domiciliati, medici, scuole, imprese e consegne.</p>
<h2>Pavia e le altre città</h2>
<p>Pavia è all’estremo opposto di ${h.a('torino', 'Torino')}, dove la ZTL Centrale dura tre ore al mattino. Per un confronto dei permessi fra città vedi ${h.a('permessi', 'permessi e deroghe ZTL')}; per il costo di un ingresso senza permesso, il ${h.a('multa', 'calcolo della multa ZTL')}.</p>`,
  },
  en: {
    slug: 'pavia-ztl',
    nav: 'Pavia',
    card: 'Closed 24 hours a day in three zones, blue, light-blue and green: €10 day permit and resident permits.',
    title: 'Pavia ZTL 2026: blue, light-blue and green zones, €10 pass',
    description: 'Pavia ZTL: closed 24 hours a day, every day, in three zones with different rules. Day permit from €10, residents from €42 a year, loading and unloading hours.',
    h1: 'Pavia ZTL: zones, hours and permits',
    intro: 'The Pavia ZTL has no time periods: it is always closed. The tool confirms it for any day and time; below are the three zones and the permits.',
    resume: (h) => `In Pavia the limited-traffic zone never switches off. According to the City of Pavia information page, last changed on 22 September 2026, driving in the limited-traffic zones is banned 24 hours a day, every day. There are three zones. In the blue zone, the pedestrian area, no vehicle may drive or park. In the light-blue zone only authorised vehicles may drive, and nobody may park. In the green zone authorised vehicles may drive and park. Disabled people with a permit, police and emergency vehicles, and permit holders may enter; taxis and hire cars with driver must notify the city of the entry within 48 hours. Vans up to 3.5 tonnes may enter to load and unload from 7:00 to 10:30 and from 14:30 to 16:00, but not in the blue zone or on Corso Cavour, Corso Mazzini and Strada Nuova. Drivers without a yearly permit can ask for a day permit, which costs ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} a day for cars.`,
    faqs: (h) => [
      { q: 'How much is the ZTL permit for Pavia residents?', a: `The resident driving and parking permit costs ${h.eur(h.P.permessi.pavia.residente[0], 2)} a year for the household’s first vehicle, ${h.eur(h.P.permessi.pavia.residente[1], 2)} for the second and ${h.eur(h.P.permessi.pavia.residente[2], 2)} from the third, plus stamp duty: two ${h.eur(h.P.permessi.pavia.bollo, 2)} stamps, and one extra ${h.eur(2, 2)} stamp for the second and later permits.` },
      { q: 'What does the Pavia day permit allow?', a: `With a car it allows driving and parking for 60 minutes, with the parking disc shown next to the pass, in the yellow bays of the destination quadrant and zone, from 7:00 to 10:30 and from 14:30 to 16:00. It costs ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} a day for cars and vans up to 3.5 tonnes, ${h.eur(h.P.permessi.pavia.giornaliero_35_75, 2)} up to 7.5 tonnes and ${h.eur(h.P.permessi.pavia.giornaliero_oltre_75, 2)} above.` },
      { q: 'I entered the Pavia ZTL by taxi: do I need to do anything?', a: 'No, not as a passenger: the taxi or hire-car driver must notify the city of the entry within 48 hours, giving the date and attaching the registration document and licence. If you were driving a self-drive rental car, though, that is not a hire car with driver and you need a permit.' },
    ],
    body: (h) => `<h2>Pavia ZTL hours</h2>
${tabellaZone(h, 'pavia')}
<h2>ZTL permits in Pavia</h2>
${h.table([h.T('Permesso', 'Permit'), h.T('Costo', 'Cost')], [
  [h.T('Residente, 1° permesso del nucleo', 'Resident, 1st permit in the household'), h.T(`${h.eur(h.P.permessi.pavia.residente[0], 2)} l’anno`, `${h.eur(h.P.permessi.pavia.residente[0], 2)} a year`)],
  [h.T('Residente, 2° permesso', 'Resident, 2nd permit'), h.T(`${h.eur(h.P.permessi.pavia.residente[1], 2)} l’anno`, `${h.eur(h.P.permessi.pavia.residente[1], 2)} a year`)],
  [h.T('Residente, dal 3° permesso', 'Resident, from the 3rd permit'), h.T(`${h.eur(h.P.permessi.pavia.residente[2], 2)} l’anno`, `${h.eur(h.P.permessi.pavia.residente[2], 2)} a year`)],
  [h.T('Giornaliero, auto e furgoni fino a 35 q', 'Day permit, cars and vans up to 3.5 t'), h.T(`${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} al giorno`, `${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)} a day`)],
  [h.T('Giornaliero, autocarri da 35 a 75 q', 'Day permit, trucks 3.5 to 7.5 t'), h.T(`${h.eur(h.P.permessi.pavia.giornaliero_35_75, 2)} al giorno`, `${h.eur(h.P.permessi.pavia.giornaliero_35_75, 2)} a day`)],
  [h.T('Giornaliero, autocarri oltre 75 q', 'Day permit, trucks over 7.5 t'), h.T(`${h.eur(h.P.permessi.pavia.giornaliero_oltre_75, 2)} al giorno`, `${h.eur(h.P.permessi.pavia.giornaliero_oltre_75, 2)} a day`)],
], h.T('Fonte: Comune di Pavia, schede dei permessi residenti e giornalieri, lette il 13 novembre 2026. Bolli esclusi.', 'Source: City of Pavia, resident and day permit pages, read on 13 November 2026. Stamp duty excluded.'), ['l', 'r'])}
<p>Residents with a garage or courtyard get a driving-only permit, to reach their parking space; those without get the driving and parking permit, which allows free parking on the yellow and blue bays of the zone shown on the pass. The city also issues permits for non-resident occupants, doctors, schools, businesses and deliveries.</p>
<h2>Pavia and other cities</h2>
<p>Pavia is at the opposite end from ${h.a('torino', 'Turin')}, where the ZTL Centrale lasts three hours in the morning. To compare permits between cities see ${h.a('permessi', 'ZTL permits and exemptions')}; for the cost of entering without a permit, the ${h.a('multa', 'ZTL fine calculator')}.</p>`,
  },
});
