import { defineGuide } from '../../lib/guide-types';

/** Area B Milano : orari, divieti e deroghe dal 1° ottobre 2026 (pagina del Comune aggiornata il 15/10/2026). */
export default defineGuide({
  id: 'area-b',
  group: 'citta',
  order: 4,
  tool: 'stato',
  citta: 'milano',
  zona: 'area-b',
  related: ['area-c', 'milano', 'fascia-verde', 'multa', 'permessi', 'varchi'],
  sources: ['milanoB', 'milanoC', 'cds7'],
  it: {
    slug: 'area-b-milano',
    nav: 'Area B Milano',
    card: 'Lunedì–venerdì 7:30–19:30: chi non può entrare, le 5 e le 20 giornate di deroga dal 1° ottobre 2026.',
    title: 'Area B Milano 2026: orari, divieti e giornate di deroga',
    description: 'Area B Milano: divieto dal lunedì al venerdì dalle 7:30 alle 19:30, festivi esclusi, per i veicoli più inquinanti. Le 5 e 20 giornate libere dal 1° ottobre.',
    h1: 'Area B Milano: orari e divieti',
    intro: 'Area B Milano vieta i veicoli più inquinanti nei giorni feriali dalle 7:30 alle 19:30. Lo strumento dice se il divieto è in vigore all’ora che scegli.',
    resume: (h) => `Area B è la zona a traffico limitato ambientale di Milano, delimitata dai varchi blu. Secondo la pagina del Comune di Milano aggiornata il 15 ottobre 2026, è attiva dal lunedì al venerdì dalle 7:30 alle 19:30, festivi esclusi, e a differenza di Area C non chiede alcun pagamento ai veicoli ammessi. Vieta invece l’accesso e la circolazione ai veicoli più vecchi e inquinanti, secondo un calendario di divieti che il Comune pubblica fino al 2030, e in ogni caso ai veicoli merci lunghi più di 12 metri, ai veicoli che trasportano merci pericolose e a quelli privi di sistemi di segnalazione dell’angolo cieco. Dal 1° ottobre 2026 ogni veicolo vietato ha 5 giornate di libero accesso all’anno, assegnate automaticamente dal secondo anno di divieto senza registrare la targa; i residenti e le imprese con sede operativa a Milano ne hanno altre 20, previa registrazione della targa e attivazione della rilevazione automatica delle giornate in deroga. Il sabato, la domenica e la sera il divieto non c’è.`,
    faqs: (h) => [
      { q: 'Come verifico se la mia auto può entrare in Area B?', a: 'Il Comune di Milano offre un servizio online in cui si inserisce la targa e si vede il tipo di accesso consentito, con il calendario delle scadenze previste fino al 2030 per ogni tipo di veicolo. Questo sito non conosce la classe del tuo veicolo: dice solo se il divieto è in vigore a una certa ora.' },
      { q: 'Area B vale anche per chi arriva da fuori Milano?', a: 'Sì. Il divieto vale per tutti i veicoli che rientrano nelle categorie vietate, residenti o no. Le 5 giornate di libero accesso, che partono dal secondo anno in cui il veicolo è vietato, valgono per ogni veicolo; le 20 giornate in più sono riservate ai residenti e alle imprese con sede operativa a Milano.' },
      { q: 'Quanto costa entrare in Area B con un veicolo vietato?', a: `Per la circolazione con un veicolo di classe di emissioni inferiore a quella prescritta, l’articolo 7, comma 13-bis, del Codice della Strada prevede da ${h.eur(h.P.multa.emissioni.min)} a ${h.eur(h.P.multa.emissioni.max)}, e la sospensione della patente da 15 a 30 giorni se la violazione si ripete nel biennio. Il verbale indica la norma applicata.` },
    ],
    body: (h) => `<h2>Orari di Area B Milano e chi è vietato</h2>
${h.table([h.T('Voce', 'Item'), h.T('Regola', 'Rule')], [
  [h.T('Giorni e orari', 'Days and hours'), h.T('lunedì–venerdì 7:30–19:30, festivi esclusi', 'Monday–Friday 7:30–19:30, holidays excluded')],
  [h.T('Pagamento', 'Charge'), h.T('nessuno per i veicoli ammessi', 'none for allowed vehicles')],
  [h.T('Sempre vietati', 'Always banned'), h.T('merci oltre 12 m, merci pericolose, veicoli senza il sensore che avvisa di pedoni e ciclisti nell’angolo cieco', 'goods vehicles over 12 m, dangerous goods, vehicles without the sensor that warns of pedestrians and cyclists in the blind spot')],
  [h.T('Giornate libere per ogni veicolo', 'Free days for every vehicle'), h.T('dal 1° ottobre 2026, 5 l’anno, a partire dal secondo anno in cui il veicolo è vietato', 'from 1 October 2026, 5 a year, starting from the second year in which the vehicle is banned')],
  [h.T('Giornate in più per residenti e imprese di Milano', 'Extra days for Milan residents and firms'), h.T('20, con targa registrata', '20, with the plate registered')],
], h.src('milanoB', h.T(`Comune di Milano, pagina Area B aggiornata il 15 ottobre 2026, letta il ${h.date(h.P.retrieved_at)}`, `City of Milan, Area B page updated 15 October 2026, read on ${h.date(h.P.retrieved_at)}`)), ['l', 'l'])}
<h2>Area B non è Area C</h2>
<p>Le due aree hanno lo stesso orario e gli stessi varchi elettronici, ma regole diverse. ${h.a('area-c', 'Area C')} è piccola, chiede un ticket a tutti i veicoli ammessi e vieta alcune categorie; Area B è molto più grande, è gratuita per i veicoli ammessi e serve solo a tenere fuori quelli più inquinanti. Un’auto recente entra in Area B senza fare nulla, ma in Area C deve comunque pagare il ticket.</p>
<h2>Altre zone ambientali</h2>
<p>Roma ha un divieto simile, la ${h.a('fascia-verde', 'Fascia Verde')}, che però vale dal lunedì al sabato a ogni ora. Per sapere che cosa costa un ingresso vietato usa il ${h.a('multa', 'calcolo della multa ZTL')} con il tipo «veicolo vietato per le emissioni».</p>`,
  },
  en: {
    slug: 'milan-area-b',
    nav: 'Area B Milan',
    card: 'Monday–Friday 7:30–19:30: who cannot enter, and the 5 and 20 exemption days from 1 October 2026.',
    title: 'Area B Milan 2026: hours, bans and free exemption days',
    description: 'Area B Milan: ban Monday to Friday from 7:30 to 19:30, public holidays excluded, for the most polluting vehicles. The 5 and 20 free days from 1 October 2026.',
    h1: 'Area B Milan: hours and bans',
    intro: 'Area B Milan bans the most polluting vehicles on weekdays from 7:30 to 19:30. The tool tells you whether the ban is in force at the time you pick.',
    resume: (h) => `Area B is Milan’s environmental limited-traffic zone, marked out by blue camera gates. According to the City of Milan page updated on 15 October 2026, it is active Monday to Friday from 7:30 to 19:30, public holidays excluded, and unlike Area C it charges allowed vehicles nothing. Instead it bans the oldest and most polluting vehicles from entering and driving, following a schedule of bans the city publishes up to 2030, and in any case bans goods vehicles longer than 12 metres, vehicles carrying dangerous goods and vehicles without blind-spot warning systems. From 1 October 2026 every banned vehicle gets 5 free days a year, assigned automatically from the second year of the ban without registering the plate; residents and businesses with an operating base in Milan get another 20, after registering the plate and switching on automatic detection of exemption days. On Saturday, Sunday and in the evening there is no ban.`,
    faqs: (h) => [
      { q: 'How do I check whether my car may enter Area B?', a: 'The City of Milan has an online service where you type the plate and see the type of access allowed, with the schedule of deadlines up to 2030 for each vehicle type. This site does not know your vehicle’s class: it only says whether the ban is in force at a given time.' },
      { q: 'Does Area B apply to drivers from outside Milan?', a: 'Yes. The ban applies to every vehicle in the banned categories, resident or not. The 5 free days, which start from the second year in which the vehicle is banned, apply to every vehicle; the 20 extra days are reserved for residents and businesses with an operating base in Milan.' },
      { q: 'How much does entering Area B with a banned vehicle cost?', a: `For driving a vehicle of a lower emission class than required, article 7, paragraph 13-bis, of the Highway Code sets ${h.eur(h.P.multa.emissioni.min)} to ${h.eur(h.P.multa.emissioni.max)}, plus a licence suspension of 15 to 30 days if the offence is repeated within two years. The notice states which rule was applied.` },
    ],
    body: (h) => `<h2>Area B Milan hours and who is banned</h2>
${h.table([h.T('Voce', 'Item'), h.T('Regola', 'Rule')], [
  [h.T('Giorni e orari', 'Days and hours'), h.T('lunedì–venerdì 7:30–19:30, festivi esclusi', 'Monday–Friday 7:30–19:30, holidays excluded')],
  [h.T('Pagamento', 'Charge'), h.T('nessuno per i veicoli ammessi', 'none for allowed vehicles')],
  [h.T('Sempre vietati', 'Always banned'), h.T('merci oltre 12 m, merci pericolose, veicoli senza il sensore che avvisa di pedoni e ciclisti nell’angolo cieco', 'goods vehicles over 12 m, dangerous goods, vehicles without the sensor that warns of pedestrians and cyclists in the blind spot')],
  [h.T('Giornate libere per ogni veicolo', 'Free days for every vehicle'), h.T('dal 1° ottobre 2026, 5 l’anno, a partire dal secondo anno in cui il veicolo è vietato', 'from 1 October 2026, 5 a year, starting from the second year in which the vehicle is banned')],
  [h.T('Giornate in più per residenti e imprese di Milano', 'Extra days for Milan residents and firms'), h.T('20, con targa registrata', '20, with the plate registered')],
], h.src('milanoB', h.T(`Comune di Milano, pagina Area B aggiornata il 15 ottobre 2026, letta il ${h.date(h.P.retrieved_at)}`, `City of Milan, Area B page updated 15 October 2026, read on ${h.date(h.P.retrieved_at)}`)), ['l', 'l'])}
<h2>Area B is not Area C</h2>
<p>The two areas share the same hours and the same kind of electronic gates, but their rules differ. ${h.a('area-c', 'Area C')} is small, charges every allowed vehicle a ticket and bans some categories; Area B is much larger, is free for allowed vehicles and only keeps out the most polluting ones. A recent car enters Area B without doing anything, but in Area C it still has to pay the ticket.</p>
<h2>Other environmental zones</h2>
<p>Rome has a similar ban, the ${h.a('fascia-verde', 'Fascia Verde')}, which however applies Monday to Saturday at all hours. To see what a banned entry costs, use the ${h.a('multa', 'ZTL fine calculator')} with the “vehicle banned for emissions” type.</p>`,
  },
});
