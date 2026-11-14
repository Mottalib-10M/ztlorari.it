import { defineGuide } from '../../lib/guide-types';

/** Permessi e deroghe ZTL : Roma (elettrici dal 1/7/2026), Milano (giornate Area B), Torino (esenzioni a posteriori), Pavia (tariffe). */
export default defineGuide({
  id: 'permessi',
  group: 'regole',
  order: 17,
  tool: 'stato',
  citta: 'roma',
  zona: 'centro-diurna',
  related: ['pavia', 'torino', 'area-b', 'roma', 'multa', 'ricorso'],
  sources: ['romaPermessi', 'romaElettrici', 'milanoB', 'torino', 'pvResidente', 'pvGiornaliero'],
  it: {
    slug: 'permessi-ztl',
    nav: 'Permessi ZTL',
    card: 'Residenti, giornalieri, auto elettriche, esenzioni chieste dopo il passaggio: come si entra in ZTL senza multa, città per città.',
    title: 'Permessi ZTL 2026: residenti, giornalieri, auto elettriche',
    description: 'Permessi ZTL: a Pavia il giornaliero costa 10 €, a Roma le auto elettriche hanno bisogno del permesso dal 1° luglio 2026, a Torino esenzioni entro 10 giorni.',
    h1: 'Permessi ZTL: chi entra e come',
    intro: 'Il permesso ZTL è l’unico modo per entrare quando la zona è attiva, salvo le deroghe. Prima di chiederlo, controlla qui sotto se la ZTL è attiva all’ora in cui arrivi: forse il permesso non ti serve. Il confronto dei permessi città per città viene subito dopo.',
    resume: (h) => `Ogni Comune decide chi può entrare nelle sue ZTL e a che prezzo, quindi i permessi non si confrontano bene fra città. Alcune regole però si ripetono. I residenti dentro la zona hanno quasi sempre un permesso annuale: a Pavia costa ${h.eur(h.P.permessi.pavia.residente[0], 2)} l’anno per la prima auto del nucleo familiare, più i bolli. Chi entra ogni tanto ha un permesso giornaliero, come a Pavia per ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)}, o un’esenzione chiesta dopo il passaggio, come a Torino, dove la comunicazione a GTT va fatta entro ${h.P.permessi.torino_giorni_esenzione} giorni dal primo transito per i casi previsti. Le auto elettriche non sono più libere ovunque: a Roma, con la deliberazione 63 del 27 febbraio 2026, dal 1° luglio 2026 serve un permesso anche per loro. Nelle zone ambientali la logica è diversa: in Area B a Milano non serve un permesso per i veicoli ammessi, ma quelli vietati hanno dal 1° ottobre 2026 cinque giornate di libero accesso all’anno, e venti in più se residenti o imprese di Milano. Le persone con disabilità titolari di contrassegno entrano ovunque, ma spesso devono registrare la targa.`,
    faqs: (h) => [
      { q: 'Con il contrassegno disabili si entra in tutte le ZTL?', a: 'Sì, con il titolare a bordo, ma il varco non vede il contrassegno: legge la targa. Per questo molte città chiedono di registrare la targa o di comunicare il passaggio. Torino prevede un’esenzione chiesta dopo il passaggio per chi non ha dichiarato la targa o viene da fuori città, Palermo una procedura per i non residenti.' },
      { q: 'Il permesso ZTL di una città vale in un’altra?', a: 'No. Ogni permesso vale solo per le zone del Comune che lo rilascia, e spesso solo per una parte di esse: a Pavia il permesso residente vale per il quadrante e la zona di residenza, a Torino serve un veicolo almeno Euro 3. Chi si sposta fra città deve chiedere un permesso a ciascun Comune.' },
      { q: 'Ho prenotato un albergo nella ZTL: chi pensa al permesso?', a: `Chiedi all’albergo, prima di arrivare, se comunica la targa al Comune e in quali tempi: le regole cambiano da città a città. Se la comunicazione non parte, la multa arriva lo stesso: ${h.eur(h.P.multa.ztl.min)} come minimo, una per ogni giorno con passaggi.` },
    ],
    body: (h) => `<h2>Permessi ZTL a confronto</h2>
${h.table([h.T('Città', 'City'), h.T('Che cosa prevede la fonte', 'What the source provides')], [
  [h.a('roma', 'Roma'), h.T('permesso anche per le auto elettriche e a idrogeno dal 1° luglio 2026; moto libere tranne nel Tridente', 'permit also for electric and hydrogen cars from 1 July 2026; motorbikes free except in the Tridente')],
  [h.a('area-b', 'Milano, Area B'), h.T('5 giornate libere l’anno per i veicoli vietati, 20 in più per residenti e imprese di Milano', '5 free days a year for banned vehicles, 20 more for Milan residents and firms')],
  [h.a('area-c', 'Milano, Area C'), h.T(`ticket giornaliero ${h.eur(h.P.areaC.ticket, 2)}; residenti ${h.eur(h.P.permessi.milano_residenti_ticket, 2)} a ingresso dopo i primi ${h.P.permessi.milano_residenti_dal_accesso - 1} dell’anno`, `day ticket ${h.eur(h.P.areaC.ticket, 2)}; residents ${h.eur(h.P.permessi.milano_residenti_ticket, 2)} from the ${h.P.permessi.milano_residenti_dal_accesso}st entry`)],
  [h.a('torino', 'Torino'), h.T(`permesso solo per veicoli almeno Euro 3 (Euro 2 a GPL o metano); esenzione chiesta dopo il passaggio, entro ${h.P.permessi.torino_giorni_esenzione} giorni`, `permit only for vehicles at least Euro 3 (Euro 2 on LPG or methane); after-the-fact exemption within ${h.P.permessi.torino_giorni_esenzione} days`)],
  [h.a('pavia', 'Pavia'), h.T(`residenti da ${h.eur(h.P.permessi.pavia.residente[0], 2)} l’anno; giornaliero ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)}`, `residents from ${h.eur(h.P.permessi.pavia.residente[0], 2)} a year; day permit ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)}`)],
  [h.a('palermo', 'Palermo'), h.T('pass giornalieri online e con l’app PalerMobilità', 'day passes online and through the PalerMobilità app')],
], h.T('Fonti: pagine dei Comuni lette il 13 novembre 2026.', 'Sources: city pages read on 13 November 2026.'), ['l', 'l'])}
<p>Per Firenze e Bologna le pagine che abbiamo letto danno gli orari ma non riassumono i permessi: chiedi al Comune, dalla pagina della città (${h.a('firenze', 'Firenze')}, ${h.a('bologna', 'Bologna')}).</p>
<h2>Prima di chiedere un permesso</h2>
<p>Controlla se ti serve davvero: molte ZTL hanno orari brevi, come la ZTL Centrale di ${h.a('torino', 'Torino')} dalle 7:30 alle 10:30, e basta spostare l’orario di arrivo. Le pagine delle città su questo sito dicono quando ogni zona è attiva. Se invece entri spesso, fai il conto: a Pavia il permesso residente annuale costa meno di una sola multa al minimo.</p>
<h2>Se il permesso c’era ma la multa arriva</h2>
<p>Succede quando la targa non è stata registrata in tempo, dopo un cambio d’auto o un noleggio. In quel caso serve la prova del permesso valido alla data del passaggio, da presentare all’ente o nel ${h.a('ricorso', 'ricorso')}. Il ${h.a('multa', 'calcolo della multa ZTL')} mostra quanto si paga se il ricorso non è possibile.</p>`,
  },
  en: {
    slug: 'ztl-permits',
    nav: 'ZTL permits',
    card: 'Residents, day passes, electric cars, after-the-fact exemptions: how to enter a ZTL without a fine, city by city.',
    title: 'ZTL permits in Italy 2026: residents, day pass, electric car',
    description: 'ZTL permits in Italy: in Pavia a day pass costs €10, in Rome electric cars need a permit from 1 July 2026, in Turin exemptions must be claimed within 10 days.',
    h1: 'ZTL permits in Italy: who may enter and how',
    intro: 'ZTL permits in Italy are the only way in while a zone is active, apart from the exemptions. Before applying, check below whether the ZTL is active at the time you arrive: you may not need a permit at all. The city-by-city comparison of permits comes right after.',
    resume: (h) => `Each city decides who may enter its ZTLs and at what price, so permits are hard to compare between cities. Some rules recur, though. Residents inside the zone almost always get a yearly permit: in Pavia it costs ${h.eur(h.P.permessi.pavia.residente[0], 2)} a year for the household’s first car, plus stamp duty. Occasional visitors get a day permit, as in Pavia for ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)}, or an exemption claimed after the entry, as in Turin, where GTT must be notified within ${h.P.permessi.torino_giorni_esenzione} days of the first entry for the cases listed. Electric cars are no longer free everywhere: in Rome, under resolution 63 of 27 February 2026, from 1 July 2026 they need a permit too. Environmental zones work differently: in Milan’s Area B allowed vehicles need no permit, but since 1 October 2026 banned vehicles get five free days a year, and twenty more for Milan residents and businesses. Disabled badge holders may enter everywhere, but often have to register the plate.`,
    faqs: (h) => [
      { q: 'Does a disability badge let you into every ZTL?', a: 'Yes, with the badge holder on board, but the gate does not see the badge: it reads the plate. That is why many cities ask you to register the plate or report the entry. Turin offers an after-the-fact exemption for those who had not registered their plate or come from outside the city, and Palermo a procedure for non-residents.' },
      { q: 'Is a ZTL permit from one city valid in another?', a: 'No. Each permit is valid only for the zones of the city that issues it, and often only for part of them: in Pavia the resident permit covers the quadrant and zone of residence, and in Turin the vehicle must be at least Euro 3. Drivers moving between cities must apply to each one.' },
      { q: 'I booked a hotel inside the ZTL: who handles the permit?', a: `Ask the hotel before you arrive whether it reports your plate to the city and how soon: the rules vary from city to city. If the report is not sent, the fine comes anyway: at least ${h.eur(h.P.multa.ztl.min)}, one for each day with entries.` },
    ],
    body: (h) => `<h2>ZTL permits compared</h2>
${h.table([h.T('Città', 'City'), h.T('Che cosa prevede la fonte', 'What the source provides')], [
  [h.a('roma', 'Rome'), h.T('permesso anche per le auto elettriche e a idrogeno dal 1° luglio 2026; moto libere tranne nel Tridente', 'permit also for electric and hydrogen cars from 1 July 2026; motorbikes free except in the Tridente')],
  [h.a('area-b', 'Milan, Area B'), h.T('5 giornate libere l’anno per i veicoli vietati, 20 in più per residenti e imprese di Milano', '5 free days a year for banned vehicles, 20 more for Milan residents and firms')],
  [h.a('area-c', 'Milan, Area C'), h.T(`ticket giornaliero ${h.eur(h.P.areaC.ticket, 2)}; residenti ${h.eur(h.P.permessi.milano_residenti_ticket, 2)} a ingresso dopo i primi ${h.P.permessi.milano_residenti_dal_accesso - 1} dell’anno`, `day ticket ${h.eur(h.P.areaC.ticket, 2)}; residents ${h.eur(h.P.permessi.milano_residenti_ticket, 2)} from the ${h.P.permessi.milano_residenti_dal_accesso}st entry`)],
  [h.a('torino', 'Turin'), h.T(`permesso solo per veicoli almeno Euro 3 (Euro 2 a GPL o metano); esenzione chiesta dopo il passaggio, entro ${h.P.permessi.torino_giorni_esenzione} giorni`, `permit only for vehicles at least Euro 3 (Euro 2 on LPG or methane); after-the-fact exemption within ${h.P.permessi.torino_giorni_esenzione} days`)],
  [h.a('pavia', 'Pavia'), h.T(`residenti da ${h.eur(h.P.permessi.pavia.residente[0], 2)} l’anno; giornaliero ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)}`, `residents from ${h.eur(h.P.permessi.pavia.residente[0], 2)} a year; day permit ${h.eur(h.P.permessi.pavia.giornaliero_auto, 2)}`)],
  [h.a('palermo', 'Palermo'), h.T('pass giornalieri online e con l’app PalerMobilità', 'day passes online and through the PalerMobilità app')],
], h.T('Fonti: pagine dei Comuni lette il 13 novembre 2026.', 'Sources: city pages read on 13 November 2026.'), ['l', 'l'])}
<p>For Florence and Bologna the pages we read give the hours but do not sum up the permits: ask the city, from the city page (${h.a('firenze', 'Florence')}, ${h.a('bologna', 'Bologna')}).</p>
<h2>Before applying for a permit</h2>
<p>Check whether you really need one: many ZTLs have short hours, such as ${h.a('torino', 'Turin’s')} ZTL Centrale from 7:30 to 10:30, and simply arriving later is enough. The city pages on this site show when each zone is active. If you enter often, on the other hand, do the sums: in Pavia the yearly resident permit costs less than a single minimum fine.</p>
<h2>If you had a permit but a fine arrives</h2>
<p>It happens when the plate was not registered in time, after a change of car or a rental. In that case you need proof of a permit valid on the date of entry, to submit to the authority or in an ${h.a('ricorso', 'appeal')}. The ${h.a('multa', 'ZTL fine calculator')} shows what you pay if an appeal is not possible.</p>`,
  },
});
