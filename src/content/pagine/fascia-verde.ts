import { defineGuide } from '../../lib/guide-types';

/** Fascia Verde di Roma : divieti dal 1° novembre 2026 (romamobilita.it, pagina aggiornata il 02/11/2026). */
export default defineGuide({
  id: 'fascia-verde',
  group: 'citta',
  order: 10,
  tool: 'stato',
  citta: 'roma',
  zona: 'fascia-verde',
  related: ['roma', 'area-b', 'multa', 'festivi', 'permessi', 'notturne'],
  sources: ['romaFV', 'roma', 'cds7'],
  it: {
    slug: 'fascia-verde-roma',
    nav: 'Fascia Verde Roma',
    card: 'Dal lunedì al sabato a ogni ora: quali auto e moto sono vietate dal 1° novembre 2026 e le domeniche ecologiche.',
    title: 'Fascia Verde Roma 2026: veicoli vietati, orari e deroghe',
    description: 'Fascia Verde Roma: dal 1° novembre 2026 vietate lunedì–sabato, 24 ore su 24, benzina fino a Euro 2 e diesel fino a Euro 3. Deroghe e domeniche ecologiche.',
    h1: 'Fascia Verde Roma: chi è vietato e quando',
    intro: 'La Fascia Verde di Roma vieta i veicoli più inquinanti dal lunedì al sabato, giorno e notte. Lo strumento dice se il divieto è in vigore all’ora scelta.',
    resume: (h) => `La ZTL Fascia Verde è il grande perimetro di Roma in cui, per ridurre l’inquinamento dell’aria, i veicoli più vecchi non possono entrare, circolare né sostare. Secondo la pagina di Roma Servizi per la Mobilità, aggiornata il 2 novembre 2026, dal 1° novembre 2026 il divieto vale dal lunedì al sabato, 24 ore su 24, esclusi i festivi infrasettimanali, anche per i veicoli dei residenti. Sono vietate le auto a benzina, GPL e metano Pre-Euro 1, Euro 1 ed Euro 2; le auto diesel, dual fuel e mixed fuel fino a Euro 3; i ciclomotori, le microcar e le moto a benzina e diesel Euro 1 e precedenti. L’ordinanza 144/2026 rinvia al 31 ottobre 2027 lo stop ai ciclomotori, microcar e moto diesel Euro 2 previsto dalla delibera 371/2022. Sono esenti, tra gli altri, i veicoli con contrassegno per persone con disabilità, i mezzi di polizia e soccorso, il trasporto pubblico, i veicoli storici con certificato di rilevanza storica e le auto a GPL o metano con carta di circolazione aggiornata prima del 1° novembre 2024. La domenica il divieto permanente non c’è, salvo nelle domeniche ecologiche.`,
    faqs: () => [
      { q: 'Come so se il mio indirizzo è in Fascia Verde?', a: 'Roma Servizi per la Mobilità mette a disposizione una mappa in cui si inserisce un indirizzo per sapere se è dentro il perimetro. Questo sito non disegna il perimetro: dice solo in quali giorni e a che ora il divieto è in vigore.' },
      { q: 'Quando sono le domeniche ecologiche 2026-2027 a Roma?', a: 'Roma programma cinque domeniche ecologiche fra il 1° novembre e il 31 marzo, con il blocco della circolazione dentro la Fascia Verde: 15 novembre 2026, 6 dicembre 2026, 24 gennaio 2027, 21 febbraio 2027 e 21 marzo 2027. Veicoli coinvolti, deroghe e orari del blocco sono fissati da un’ordinanza a ridosso di ogni data.' },
      { q: 'Un’auto Euro 3 a benzina può entrare in Fascia Verde?', a: 'Sì: per le auto a benzina il divieto arriva fino a Euro 2, quindi una Euro 3 a benzina circola. Per le auto diesel invece il divieto comprende anche gli Euro 3. In caso di superamento dei limiti di inquinamento, però, il Comune può aggiungere misure temporanee, decise il lunedì e il giovedì.' },
    ],
    body: (h) => `<h2>Veicoli vietati in Fascia Verde a Roma</h2>
${h.table([h.T('Veicolo', 'Vehicle'), h.T('Vietato', 'Banned')], [
  [h.T('Auto a benzina, GPL, metano', 'Petrol, LPG, methane cars'), h.T('Pre-Euro 1, Euro 1, Euro 2', 'Pre-Euro 1, Euro 1, Euro 2')],
  [h.T('Auto diesel, anche a doppia alimentazione (dual fuel, mixed fuel)', 'Diesel cars, including dual-fuel and mixed-fuel'), h.T('Pre-Euro 1, Euro 1, 2 e 3', 'Pre-Euro 1, Euro 1, 2 and 3')],
  [h.T('Ciclomotori, microcar, moto', 'Mopeds, microcars, motorbikes'), h.T('benzina e diesel Euro 1 e precedenti', 'petrol and diesel Euro 1 and older')],
], h.src('romaFV', h.T(`Roma Servizi per la Mobilità, «ZTL Fascia Verde», aggiornata il 2 novembre 2026, letta il ${h.date(h.P.retrieved_at)}`, `Roma Servizi per la Mobilità, “ZTL Fascia Verde”, updated 2 November 2026, read on ${h.date(h.P.retrieved_at)}`)), ['l', 'l'])}
<p>${h.T('Ciclomotori, microcar e moto diesel Euro 2 possono ancora entrare fino al 31 ottobre 2027. «Dual fuel» e «mixed fuel» sono i diesel con una doppia alimentazione. La classe Euro del veicolo è scritta sulla carta di circolazione (il libretto).', 'Diesel Euro 2 mopeds, microcars and motorbikes may still enter until 31 October 2027. “Dual fuel” and “mixed fuel” are diesels with a second fuel. The vehicle’s Euro class is written on the registration document.')}</p>
<h2>Fascia Verde e ZTL del centro</h2>
<p>La Fascia Verde non sostituisce le ZTL del centro: un’auto ammessa in Fascia Verde resta esclusa dalla ${h.a('roma', 'ZTL Centro Storico')} durante la fascia diurna se non ha il permesso. Al contrario, un permesso per la ZTL non autorizza un veicolo vietato in Fascia Verde, salvo le esenzioni indicate dal Comune.</p>
<h2>Smog e misure temporanee</h2>
<p>Quando le centraline di ARPA Lazio rilevano il superamento dei limiti di PM10, biossido di azoto o ozono, il Comune valuta il lunedì e il giovedì le misure temporanee, che partono dal quinto giorno di superamento e, con livelli più alti, dall’undicesimo. Queste misure non sono nel calcolo: seguile sui canali del Comune. Per Milano il divieto simile è ${h.a('area-b', 'Area B')}; il ${h.a('multa', 'calcolo della multa ZTL')} ha un tipo dedicato ai veicoli vietati per le emissioni.</p>`,
  },
  en: {
    slug: 'rome-fascia-verde',
    nav: 'Rome Fascia Verde',
    card: 'Monday to Saturday at all hours: which cars and motorbikes are banned from 1 November 2026, and the eco Sundays.',
    title: 'Rome Fascia Verde 2026: banned vehicles, hours, exemptions',
    description: 'Rome Fascia Verde: from 1 November 2026 petrol cars up to Euro 2 and diesel up to Euro 3 are banned Monday to Saturday, all day. Exemptions and eco Sundays.',
    h1: 'Rome Fascia Verde: who is banned and when',
    intro: 'Rome’s Fascia Verde bans the most polluting vehicles Monday to Saturday, day and night. The tool tells you whether the ban is in force at the time you pick.',
    resume: (h) => `The Fascia Verde ZTL is Rome’s large perimeter in which, to cut air pollution, older vehicles may not enter, drive or park. According to the Roma Servizi per la Mobilità page, updated on 2 November 2026, from 1 November 2026 the ban applies Monday to Saturday, 24 hours a day, except on weekday public holidays, and residents’ vehicles are included. Banned are petrol, LPG and methane cars that are Pre-Euro 1, Euro 1 and Euro 2; diesel, dual-fuel and mixed-fuel cars up to Euro 3; and petrol and diesel mopeds, microcars and motorbikes that are Euro 1 or older. Order 144/2026 postpones to 31 October 2027 the ban on Euro 2 diesel mopeds, microcars and motorbikes set by resolution 371/2022. Exempt, among others, are vehicles with a disability badge, police and emergency vehicles, public transport, historic vehicles with a certificate and LPG or methane cars whose registration document was updated before 1 November 2024. On Sunday the permanent ban does not apply, except on the eco Sundays.`,
    faqs: () => [
      { q: 'How do I know whether my address is in the Fascia Verde?', a: 'Roma Servizi per la Mobilità offers a map where you type an address to see whether it is inside the perimeter. This site does not draw the perimeter: it only says on which days and at what time the ban is in force.' },
      { q: 'When are Rome’s eco Sundays in 2026-2027?', a: 'Rome schedules five eco Sundays between 1 November and 31 March, with traffic blocked inside the Fascia Verde: 15 November 2026, 6 December 2026, 24 January 2027, 21 February 2027 and 21 March 2027. The vehicles affected, exemptions and hours are set by an order shortly before each date.' },
      { q: 'May a Euro 3 petrol car enter the Fascia Verde?', a: 'Yes: for petrol cars the ban goes up to Euro 2, so a Euro 3 petrol car may drive. For diesel cars, however, the ban includes Euro 3. When pollution limits are exceeded, the city can add temporary measures, decided on Monday and Thursday.' },
    ],
    body: (h) => `<h2>Vehicles banned in Rome’s Fascia Verde</h2>
${h.table([h.T('Veicolo', 'Vehicle'), h.T('Vietato', 'Banned')], [
  [h.T('Auto a benzina, GPL, metano', 'Petrol, LPG, methane cars'), h.T('Pre-Euro 1, Euro 1, Euro 2', 'Pre-Euro 1, Euro 1, Euro 2')],
  [h.T('Auto diesel, anche a doppia alimentazione (dual fuel, mixed fuel)', 'Diesel cars, including dual-fuel and mixed-fuel'), h.T('Pre-Euro 1, Euro 1, 2 e 3', 'Pre-Euro 1, Euro 1, 2 and 3')],
  [h.T('Ciclomotori, microcar, moto', 'Mopeds, microcars, motorbikes'), h.T('benzina e diesel Euro 1 e precedenti', 'petrol and diesel Euro 1 and older')],
], h.src('romaFV', h.T(`Roma Servizi per la Mobilità, «ZTL Fascia Verde», aggiornata il 2 novembre 2026, letta il ${h.date(h.P.retrieved_at)}`, `Roma Servizi per la Mobilità, “ZTL Fascia Verde”, updated 2 November 2026, read on ${h.date(h.P.retrieved_at)}`)), ['l', 'l'])}
<p>${h.T('Ciclomotori, microcar e moto diesel Euro 2 possono ancora entrare fino al 31 ottobre 2027. «Dual fuel» e «mixed fuel» sono i diesel con una doppia alimentazione. La classe Euro del veicolo è scritta sulla carta di circolazione (il libretto).', 'Diesel Euro 2 mopeds, microcars and motorbikes may still enter until 31 October 2027. “Dual fuel” and “mixed fuel” are diesels with a second fuel. The vehicle’s Euro class is written on the registration document.')}</p>
<h2>Fascia Verde and the central ZTLs</h2>
<p>The Fascia Verde does not replace the central ZTLs: a car allowed in the Fascia Verde is still kept out of the ${h.a('roma', 'Historic Centre ZTL')} during the daytime period unless it has a permit. Conversely, a ZTL permit does not authorise a vehicle banned in the Fascia Verde, except for the exemptions the city lists.</p>
<h2>Smog and temporary measures</h2>
<p>When ARPA Lazio monitoring stations record PM10, nitrogen dioxide or ozone above the limits, the city reviews temporary measures on Monday and Thursday; they start from the fifth day over the limit and, at higher levels, from the eleventh. These measures are not in the calculation: follow them on the city’s channels. Milan’s equivalent ban is ${h.a('area-b', 'Area B')}; the ${h.a('multa', 'ZTL fine calculator')} has a type for vehicles banned for emissions.</p>`,
  },
});
