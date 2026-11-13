import { defineGuide } from '../../lib/guide-types';

/** Varchi ZTL : come funzionano (Torino, Bologna, Milano) e la regola di una multa al giorno (art. 198 c.2-bis). */
export default defineGuide({
  id: 'varchi',
  group: 'regole',
  order: 13,
  tool: 'stato',
  citta: 'roma',
  zona: 'tridente',
  related: ['multa', 'ricorso', 'torino', 'bologna', 'area-c', 'attive-oggi'],
  sources: ['torino', 'torinoValentino', 'bologna', 'milanoC', 'cds198'],
  it: {
    slug: 'varchi-ztl',
    nav: 'Varchi ZTL',
    card: 'Telecamere, lettura della targa, elenco dei permessi: come funziona un varco e quante multe può generare.',
    title: 'Varchi ZTL 2026: come funzionano, quando sono attivi, multe',
    description: 'Varchi ZTL: la telecamera legge la targa e la confronta con i permessi nelle ore in cui la zona è attiva. Una sola multa al giorno per zona. Vedi lo stato ora.',
    h1: 'Varchi ZTL: come funzionano e quando sono attivi',
    intro: 'Un varco ZTL fotografa ogni targa, ma sanziona solo nelle ore in cui la zona è attiva. Preimpostato il Tridente di Roma: scegli città, zona e ora.',
    resume: (h) => `Un varco ZTL è un punto di controllo con telecamera posto all’ingresso, o all’interno, di una zona a traffico limitato. La Città di Torino descrive il meccanismo in modo chiaro: la targa di ogni veicolo che entra viene fotografata e confrontata con quelle autorizzate, inserite in una banca dati al momento del rilascio del permesso. Se la targa non c’è e la zona è attiva, parte l’accertamento. Torino conta 41 punti di controllo: 27 agli accessi della ZTL Centrale, 11 al suo interno per le aree con limiti più stretti e 3 per le aree Statuto, Valperga e Valentino. A Bologna il sistema si chiama Sirio, a Milano Area C e Area B sono regolate da varchi elettronici, e l’Area B è delimitata dai varchi blu. Un varco nuovo non sanziona subito: per il Valentino il comunicato della Città precisa che l’avvio dei controlli dipende dall’autorizzazione del Ministero delle Infrastrutture e dei Trasporti e comprende un pre-esercizio. Dal 14 dicembre 2024, infine, più passaggi nella stessa ZTL nello stesso giorno valgono una sola sanzione.`,
    faqs: () => [
      { q: 'Il varco ZTL fotografa anche quando non è attivo?', a: 'Le fonti comunali descrivono il confronto fra la targa e l’elenco dei permessi durante gli orari di divieto. Fuori da quegli orari l’ingresso è libero e non c’è nulla da sanzionare. Se ricevi un verbale per un passaggio avvenuto fuori orario, è un motivo di ricorso da documentare.' },
      { q: 'Come capisco dove sono i varchi?', a: 'Molte città pubblicano l’elenco o la mappa dei varchi: Torino un elenco dei 41 punti di controllo, Pavia una mappa dei varchi di accesso. All’ingresso di ogni ZTL c’è comunque il cartello con gli orari e le eccezioni, che vale più di qualunque mappa.' },
      { q: 'Se entro ed esco subito dalla ZTL prendo la multa?', a: 'Sì, se l’ingresso è avvenuto durante la fascia attiva e senza permesso: il varco registra l’ingresso, non il tempo passato dentro. Più ingressi nella stessa ZTL nello stesso giorno, però, valgono una sola sanzione. Se vedi il cartello in tempo, svolta prima del varco e non dopo.' },
    ],
    body: (h) => `<h2>I varchi ZTL nelle città del sito</h2>
${h.table([h.T('Città', 'City'), h.T('Che cosa dice la fonte', 'What the source says')], [
  [h.a('torino', 'Torino'), h.T('41 punti di controllo con telecamera; targa confrontata con la banca dati dei permessi', '41 camera points; plate compared with the permit database')],
  [h.a('bologna', 'Bologna'), h.T('sistema Sirio, tutti i giorni dalle 7 alle 20', 'Sirio system, every day 7:00 to 20:00')],
  [h.a('milano', 'Milano'), h.T('Area C e Area B regolate da varchi elettronici; Area B delimitata dai varchi blu', 'Area C and Area B controlled by electronic gates; Area B marked by blue gates')],
  [h.a('pavia', 'Pavia'), h.T('mappa dei varchi di accesso pubblicata dal Comune', 'map of entry gates published by the city')],
], h.T('Fonti: pagine dei Comuni lette il 13 novembre 2026.', 'Sources: city pages read on 13 November 2026.'), ['l', 'l'])}
<h2>Una multa al giorno, non una per varco</h2>
<p>L’${h.src('cds198', 'articolo 198, comma 2-bis, del Codice della Strada')} dice che, quando i passaggi nella stessa ZTL sono rilevati dalle telecamere, si applica una sola sanzione per ciascun giorno di calendario. Chi gira nel centro e passa sotto quattro varchi della stessa zona in una mattina riceve un verbale. La regola parla della stessa ZTL: passaggi in zone diverse, per esempio il Centro Storico e Trastevere a Roma, non sono coperti dalla regola.</p>
<h2>Prima di passare</h2>
<p>Lo strumento in alto dice se una zona è attiva a una data e a un’ora. Per vedere tutte le zone accese adesso in un colpo d’occhio usa ${h.a('attive-oggi', 'ZTL attive oggi')}; per il conto di un verbale il ${h.a('multa', 'calcolo della multa ZTL')}; per contestarlo la pagina sul ${h.a('ricorso', 'ricorso')}.</p>`,
  },
  en: {
    slug: 'ztl-camera-gates',
    nav: 'ZTL camera gates',
    card: 'Cameras, plate reading, the permit list: how a gate works and how many fines it can produce.',
    title: 'ZTL camera gates 2026: how they work, when on, and fines',
    description: 'ZTL camera gates: the camera reads your plate and checks it against the permit list only while the zone is active. One fine per zone per day. See status now.',
    h1: 'ZTL camera gates: how they work and when on',
    intro: 'A ZTL camera gate photographs every plate but only fines while the zone is active. Rome’s Tridente is preset: pick a city, zone and time.',
    resume: (h) => `A ZTL gate (varco) is a camera checkpoint at the entrance to, or inside, a limited-traffic zone. The City of Turin describes how it works clearly: the plate of every vehicle entering is photographed and compared with the authorised ones, which are added to a database when a permit is issued. If the plate is not there and the zone is active, the offence is recorded. Turin has 41 checkpoints: 27 at the entrances of the ZTL Centrale, 11 inside it for the areas with stricter limits and 3 for the Statuto, Valperga and Valentino areas. In Bologna the system is called Sirio; in Milan, Area C and Area B are controlled by electronic gates, and Area B is marked out by blue gates. A new gate does not issue fines straight away: for Valentino the city notice states that controls start only after approval by the Ministry of Infrastructure and Transport and include a trial period. Finally, since 14 December 2024 several entries into the same ZTL on the same day count as a single fine.`,
    faqs: () => [
      { q: 'Does a ZTL gate photograph cars when it is not active?', a: 'The city sources describe the comparison between plate and permit list during the ban hours. Outside those hours entry is free and there is nothing to fine. If you receive a notice for an entry outside the hours, that is a ground for appeal you need to document.' },
      { q: 'How do I find out where the gates are?', a: 'Many cities publish a list or map of their gates: Turin a list of its 41 checkpoints, Pavia a map of its entry gates. At the entrance to every ZTL there is in any case a sign with the hours and exceptions, which counts for more than any map.' },
      { q: 'If I drive in and straight out again, do I get fined?', a: 'Yes, if you entered during the active period without a permit: the gate records the entry, not the time spent inside. Several entries into the same ZTL on the same day, however, count as a single fine. If you see the sign in time, turn off before the gate rather than after it.' },
    ],
    body: (h) => `<h2>ZTL gates in the cities on this site</h2>
${h.table([h.T('Città', 'City'), h.T('Che cosa dice la fonte', 'What the source says')], [
  [h.a('torino', 'Turin'), h.T('41 punti di controllo con telecamera; targa confrontata con la banca dati dei permessi', '41 camera points; plate compared with the permit database')],
  [h.a('bologna', 'Bologna'), h.T('sistema Sirio, tutti i giorni dalle 7 alle 20', 'Sirio system, every day 7:00 to 20:00')],
  [h.a('milano', 'Milan'), h.T('Area C e Area B regolate da varchi elettronici; Area B delimitata dai varchi blu', 'Area C and Area B controlled by electronic gates; Area B marked by blue gates')],
  [h.a('pavia', 'Pavia'), h.T('mappa dei varchi di accesso pubblicata dal Comune', 'map of entry gates published by the city')],
], h.T('Fonti: pagine dei Comuni lette il 13 novembre 2026.', 'Sources: city pages read on 13 November 2026.'), ['l', 'l'])}
<h2>One fine per day, not per gate</h2>
<p>${h.src('cds198', 'Article 198, paragraph 2-bis, of the Highway Code')} says that when entries into the same ZTL are recorded by cameras, a single fine applies for each calendar day. A driver who circles the centre and passes four gates of the same zone in a morning gets one notice. The rule speaks of the same ZTL: entries into different zones, for example Rome’s Historic Centre and Trastevere, are not covered by it.</p>
<h2>Before you drive through</h2>
<p>The tool at the top tells you whether a zone is active at a given date and time. To see every zone that is on right now at a glance, use ${h.a('attive-oggi', 'ZTLs active today')}; to work out a notice, the ${h.a('multa', 'ZTL fine calculator')}; to challenge it, the ${h.a('ricorso', 'appeal')} page.</p>`,
  },
});
