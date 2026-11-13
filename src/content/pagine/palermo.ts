import { defineGuide } from '../../lib/guide-types';
import { tabellaZone } from '../../lib/citta';

/** Palermo : orari estivi e invernali dell’avviso «ORARI ZTL» del portale del Comune (non datato, letto il 13/11/2026). */
export default defineGuide({
  id: 'palermo',
  group: 'citta',
  order: 8,
  tool: 'stato',
  citta: 'palermo',
  zona: 'ztl',
  related: ['notturne', 'festivi', 'multa', 'permessi', 'roma', 'ricorso'],
  sources: ['palermo', 'cds7', 'cds198'],
  it: {
    slug: 'ztl-palermo',
    nav: 'Palermo',
    card: 'Dal lunedì al giovedì 8–20; venerdì, sabato e domenica orari diversi fra estate e inverno, anche di notte.',
    title: 'ZTL Palermo 2026: orari estivi e invernali, notte e varchi',
    description: 'ZTL Palermo: dal lunedì al giovedì 8–20; da maggio a ottobre il venerdì fino a mezzanotte e il sabato sera dalle 20, d’inverno dalle 23. Vedi se è attiva ora.',
    h1: 'ZTL Palermo: orari d’estate e d’inverno',
    intro: 'La ZTL di Palermo cambia orario il 1° maggio e il 1° novembre. Preimpostata la ZTL del centro storico: scegli giorno e ora per vedere se è attiva.',
    resume: (h) => `La ZTL centrale di Palermo ha un orario diurno uguale tutto l’anno e un orario serale e notturno che cambia con la stagione. Secondo l’avviso «Orari ZTL» del portale ZTL del Comune di Palermo, dal lunedì al giovedì la zona è attiva dalle 8:00 alle 20:00. Dal 1° maggio al 31 ottobre il venerdì è attiva dalle 8:00 a mezzanotte, il sabato dalle 0:00 alle 6:00 e dalle 20:00 a mezzanotte, la domenica dalle 0:00 alle 6:00. Dal 1° novembre al 30 aprile il venerdì è attiva dalle 8:00 alle 20:00 e dalle 23:00 a mezzanotte, il sabato dalle 0:00 alle 6:00 e dalle 23:00 a mezzanotte, la domenica dalle 0:00 alle 6:00. In pratica il venerdì e il sabato notte il centro è chiuso fino alle 6 del mattino, e il sabato di giorno è libero. L’avviso non porta una data e non dice nulla dei festivi: quando un festivo cade in una fascia, lo strumento considera la ZTL attiva e lo segnala. La pagina è stata letta il ${h.date(h.P.retrieved_at)}.`,
    faqs: () => [
      { q: 'La ZTL di Palermo è attiva il sabato?', a: 'Di giorno no: il sabato la ZTL è attiva solo di notte. Da maggio a ottobre dalle 0:00 alle 6:00 e dalle 20:00 a mezzanotte, da novembre ad aprile dalle 0:00 alle 6:00 e dalle 23:00 a mezzanotte. Fra le 6 del mattino e la sera del sabato si entra liberamente.' },
      { q: 'Come compro un pass giornaliero per la ZTL di Palermo?', a: 'Il portale del Comune indica i pass giornalieri acquistabili online e l’attivazione con il telefono, anche con un numero estero; il servizio pass è stato aggiunto all’app PalerMobilità. Il pass va attivato prima di entrare: il varco legge la targa e non sa che hai intenzione di pagare dopo.' },
      { q: 'Chi ha il contrassegno disabili può entrare nella ZTL di Palermo?', a: 'Sì, ma il portale prevede una procedura per chi ha il contrassegno CUDE e non è residente a Palermo: la targa va comunicata secondo le istruzioni pubblicate sul portale ZTL. Senza la comunicazione la telecamera non può sapere che a bordo c’è il titolare del contrassegno.' },
    ],
    body: (h) => `<h2>Orari della ZTL Palermo per stagione</h2>
${tabellaZone(h, 'palermo')}
<h2>Le regole dietro gli orari</h2>
<p>La ZTL centrale è regolata dal disciplinare tecnico approvato con la deliberazione della Giunta comunale n. 169 del 26 agosto 2022, poi modificato. La ZTL notturna è stata riattivata dal 5 novembre 2021 con l’ordinanza n. 1272 del 4 novembre 2021, e per questo la linea di autobus 101 prolunga il servizio il venerdì e il sabato notte. Sull’asse di via Roma la ZTL diurna è stata riattivata in entrambi i sensi di marcia dal 20 ottobre 2025.</p>
<h2>Un avviso senza data</h2>
<p>L’avviso con gli orari è sul portale ufficiale ma non porta una data di pubblicazione, e non abbiamo trovato un’altra pagina del Comune che lo confermi. Il cartello al varco resta il riferimento: se vedi un orario diverso, ${h.a('contact', 'scrivici')}. La pagina sulle ${h.a('notturne', 'ZTL notturne')} mette Palermo accanto a Roma, Milano e Firenze, e il ${h.a('multa', 'calcolo della multa ZTL')} conta un verbale per ogni giorno.</p>`,
  },
  en: {
    slug: 'palermo-ztl',
    nav: 'Palermo',
    card: 'Monday to Thursday 8:00–20:00; Friday, Saturday and Sunday hours differ between summer and winter, nights included.',
    title: 'Palermo ZTL 2026: summer and winter hours, nights, gates',
    description: 'Palermo ZTL: Monday to Thursday 8:00–20:00; May to October Friday until midnight and Saturday evening from 20:00, in winter from 23:00. See if it is on now.',
    h1: 'Palermo ZTL: summer and winter hours',
    intro: 'The Palermo ZTL changes hours on 1 May and 1 November. The historic-centre ZTL is preset: pick a day and time to see whether it is active.',
    resume: (h) => `Palermo’s central ZTL has daytime hours that stay the same all year and evening and night hours that change with the season. According to the “Orari ZTL” notice on the City of Palermo ZTL portal, from Monday to Thursday the zone is active from 8:00 to 20:00. From 1 May to 31 October it is active on Friday from 8:00 to midnight, on Saturday from 0:00 to 6:00 and from 20:00 to midnight, and on Sunday from 0:00 to 6:00. From 1 November to 30 April it is active on Friday from 8:00 to 20:00 and from 23:00 to midnight, on Saturday from 0:00 to 6:00 and from 23:00 to midnight, and on Sunday from 0:00 to 6:00. In practice, on Friday and Saturday nights the centre is closed until 6 in the morning, while Saturday daytime is free. The notice carries no date and says nothing about public holidays: when a holiday falls in a period, the tool treats the ZTL as active and flags it. The page was read on ${h.date(h.P.retrieved_at)}.`,
    faqs: () => [
      { q: 'Is the Palermo ZTL active on Saturday?', a: 'Not during the day: on Saturday the ZTL is only active at night. From May to October from 0:00 to 6:00 and from 20:00 to midnight, from November to April from 0:00 to 6:00 and from 23:00 to midnight. Between 6 in the morning and Saturday evening anyone may enter.' },
      { q: 'How do I buy a day pass for the Palermo ZTL?', a: 'The city portal describes day passes bought online and activated by phone, foreign numbers included; the pass service has been added to the PalerMobilità app. The pass must be activated before you enter: the gate reads the plate and cannot know you mean to pay later.' },
      { q: 'May disabled badge holders enter the Palermo ZTL?', a: 'Yes, but the portal sets out a procedure for CUDE badge holders who do not live in Palermo: the plate must be notified following the instructions published on the ZTL portal. Without that notice the camera cannot know the badge holder is on board.' },
    ],
    body: (h) => `<h2>Palermo ZTL hours by season</h2>
${tabellaZone(h, 'palermo')}
<h2>The rules behind the hours</h2>
<p>The central ZTL is governed by the technical regulation approved by city council resolution no. 169 of 26 August 2022, later amended. The night ZTL was reactivated from 5 November 2021 by order no. 1272 of 4 November 2021, which is why bus line 101 runs later on Friday and Saturday nights. On the Via Roma axis the daytime ZTL was reactivated in both directions from 20 October 2025.</p>
<h2>A notice without a date</h2>
<p>The notice with the hours is on the official portal but has no publication date, and we found no other city page confirming it. The sign at the gate remains the reference: if you see different hours, ${h.a('contact', 'write to us')}. The ${h.a('notturne', 'night ZTL')} page puts Palermo next to Rome, Milan and Florence, and the ${h.a('multa', 'ZTL fine calculator')} counts one notice per day.</p>`,
  },
});
