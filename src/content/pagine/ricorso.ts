import { defineGuide } from '../../lib/guide-types';

/** Ricorso contro la multa ZTL : art. 201, 203 CdS e D.Lgs. 150/2011 art. 7 (Normattiva, letti il 13/11/2026). */
export default defineGuide({
  id: 'ricorso',
  group: 'regole',
  order: 12,
  tool: 'multa',
  preset: { tipo: 'ztl' },
  related: ['multa', 'varchi', 'permessi', 'festivi', 'torino', 'milano'],
  sources: ['cds201', 'cds203', 'dlgs150', 'cds198', 'cds7'],
  it: {
    slug: 'ricorso-multa-ztl',
    nav: 'Ricorso multa ZTL',
    card: 'Prefetto entro 60 giorni o giudice di pace entro 30: i termini dalla notifica e i motivi che contano.',
    title: 'Ricorso multa ZTL 2026: termini, prefetto o giudice di pace',
    description: 'Ricorso multa ZTL: al prefetto entro 60 giorni dalla notifica, al giudice di pace entro 30 (60 dall’estero). Calcola le scadenze e controlla i motivi utili.',
    h1: 'Ricorso multa ZTL: termini e motivi',
    intro: 'Il ricorso contro la multa ZTL ha termini stretti che partono dalla notifica. Inserisci la data in cui hai ricevuto il verbale: il calcolo dà le scadenze.',
    resume: (h) => `Contro una multa ZTL ci sono due strade, alternative fra loro. La prima è il ricorso al prefetto, previsto dall’articolo 203 del Codice della Strada: si presenta entro 60 giorni dalla contestazione o dalla notifica, non costa nulla e si può inviare anche all’ufficio dell’organo che ha fatto l’accertamento. La seconda è l’opposizione al giudice di pace, regolata dall’articolo 7 del decreto legislativo 150/2011: va proposta entro 30 giorni dalla notifica, o 60 se il ricorrente risiede all’estero, e richiede il contributo unificato. Chi fa ricorso rinuncia allo sconto del 30% e al pagamento del minimo: se il ricorso viene respinto, la somma dovuta può essere più alta. Prima di scegliere conviene controllare i motivi più frequenti: un verbale notificato oltre i 90 giorni previsti dall’articolo 201, più verbali per lo stesso giorno nella stessa ZTL nonostante l’articolo 198, un permesso valido ma non registrato, un passaggio fuori dall’orario della zona. Nessuno di questi motivi è automatico: vanno provati con documenti.`,
    faqs: () => [
      { q: 'Meglio il prefetto o il giudice di pace?', a: 'Il ricorso al prefetto è gratuito e ha un termine più lungo, 60 giorni; il giudice di pace ha un termine di 30 giorni e un contributo da pagare, ma decide un giudice in udienza. Non si possono fare tutti e due per lo stesso verbale. Per una scelta su un caso concreto conviene chiedere a un’associazione di consumatori o a un avvocato.' },
      { q: 'Ho pagato la multa ZTL: posso ancora fare ricorso?', a: 'In generale no: pagando si chiude il procedimento, e il pagamento in misura ridotta equivale ad accettare la sanzione. Per questo, se pensi che il verbale sia sbagliato, controlla i motivi prima di sfruttare lo sconto dei 5 giorni. Il termine di 60 giorni per il prefetto lascia il tempo di leggere il verbale con calma prima di decidere.' },
      { q: 'La multa è arrivata dopo più di 90 giorni: è nulla?', a: 'Il termine di 90 giorni dell’articolo 201 parte dall’accertamento, cioè da quando l’ente ha potuto identificare il proprietario, non sempre dal giorno del passaggio. Per un veicolo a noleggio o intestato a una società i tempi possono essere diversi. Per chi risiede all’estero il termine è di 360 giorni.' },
    ],
    body: (h) => `<h2>Termini del ricorso contro la multa ZTL</h2>
${h.table([h.T('Strada', 'Route'), h.T('Termine', 'Deadline'), h.T('Norma', 'Rule')], [
  [h.T('Pagamento con sconto del 30%', 'Payment with 30% discount'), h.T('5 giorni dalla notifica', '5 days from notice'), h.src('cds202', h.T('art. 202 CdS', 'art. 202 Highway Code'))],
  [h.T('Pagamento del minimo', 'Payment of the minimum'), h.T('60 giorni dalla notifica', '60 days from notice'), h.src('cds202', h.T('art. 202 CdS', 'art. 202 Highway Code'))],
  [h.T('Ricorso al prefetto', 'Appeal to the prefect'), h.T('60 giorni dalla notifica', '60 days from notice'), h.src('cds203', h.T('art. 203 CdS', 'art. 203 Highway Code'))],
  [h.T('Opposizione al giudice di pace', 'Challenge before the justice of the peace'), h.T('30 giorni, 60 dall’estero', '30 days, 60 from abroad'), h.src('dlgs150', 'D.Lgs. 150/2011, art. 7')],
], undefined, ['l', 'l', 'l'])}
<h2>Che cosa controllare sul verbale</h2>
<p>Prima di tutto la data, l’ora e il varco: confrontali con gli orari della zona su questo sito e con il cartello. Poi la data dell’accertamento e quella della notifica, per i 90 giorni. Se avevi un permesso, una prenotazione d’albergo o un accesso in ospedale, cerca la ricevuta: molte città, come ${h.a('torino', 'Torino')}, prevedono una comunicazione entro pochi giorni per evitare la sanzione. Se hai ricevuto più verbali, raggruppali per giorno e per zona.</p>
<h2>Il varco era attivo?</h2>
<p>Un varco elettronico serve a sanzionare solo se è autorizzato e acceso: il comunicato di Torino sul Valentino ricorda che i nuovi varchi partono dopo l’autorizzazione del Ministero delle Infrastrutture e un pre-esercizio. Il pannello «varco attivo» o «non attivo» vale come indicazione per chi guida. La pagina sui ${h.a('varchi', 'varchi ZTL')} spiega come funzionano; il ${h.a('multa', 'calcolo della multa ZTL')} mostra quanto si paga se il ricorso non conviene.</p>`,
  },
  en: {
    slug: 'appeal-ztl-fine',
    nav: 'Appeal a ZTL fine',
    card: 'Prefect within 60 days or justice of the peace within 30: the deadlines from notice and the grounds that matter.',
    title: 'Appeal a ZTL fine in Italy 2026: deadlines and grounds',
    description: 'Appeal a ZTL fine in Italy: to the prefect within 60 days of notice, or to the justice of the peace within 30 (60 from abroad). Work out your deadlines.',
    h1: 'Appeal a ZTL fine: deadlines and grounds',
    intro: 'To appeal a ZTL fine you face tight deadlines that start from the notice. Enter the date you received it: the calculator shows every deadline.',
    resume: (h) => `There are two ways to challenge a ZTL fine, and you must choose one. The first is an appeal to the prefect, under article 203 of the Highway Code: it must be lodged within 60 days of the notice or of being stopped, costs nothing and can also be sent to the office of the authority that recorded the offence. The second is a challenge before the justice of the peace, governed by article 7 of Legislative Decree 150/2011: it must be filed within 30 days of notice, or 60 if the appellant lives abroad, and a court fee is due. Appealing means giving up the 30% discount and the minimum payment: if the appeal fails, the amount due may be higher. Before choosing, check the most common grounds: a notice served after the 90 days set by article 201, several notices for the same day in the same ZTL despite article 198, a valid permit that was not registered, or an entry outside the zone’s hours. None of these grounds is automatic: they have to be proved with documents.`,
    faqs: () => [
      { q: 'Prefect or justice of the peace: which is better?', a: 'An appeal to the prefect is free and has a longer deadline, 60 days; the justice of the peace has a 30-day deadline and a fee, but a judge decides at a hearing. You cannot do both for the same notice. For advice on a specific case, ask a consumer association or a lawyer.' },
      { q: 'I paid the ZTL fine: can I still appeal?', a: 'Generally not: paying closes the procedure, and paying the reduced amount amounts to accepting the fine. So if you think the notice is wrong, check the grounds before taking the 5-day discount. The 60-day deadline for the prefect leaves time to read the notice calmly before deciding.' },
      { q: 'The fine arrived after more than 90 days: is it void?', a: 'The 90-day limit in article 201 runs from when the offence was established, that is when the authority could identify the owner, not always from the day of entry. For a rental car or a company vehicle the timing may differ. For people living abroad the limit is 360 days.' },
    ],
    body: (h) => `<h2>Deadlines to appeal a ZTL fine</h2>
${h.table([h.T('Strada', 'Route'), h.T('Termine', 'Deadline'), h.T('Norma', 'Rule')], [
  [h.T('Pagamento con sconto del 30%', 'Payment with 30% discount'), h.T('5 giorni dalla notifica', '5 days from notice'), h.src('cds202', h.T('art. 202 CdS', 'art. 202 Highway Code'))],
  [h.T('Pagamento del minimo', 'Payment of the minimum'), h.T('60 giorni dalla notifica', '60 days from notice'), h.src('cds202', h.T('art. 202 CdS', 'art. 202 Highway Code'))],
  [h.T('Ricorso al prefetto', 'Appeal to the prefect'), h.T('60 giorni dalla notifica', '60 days from notice'), h.src('cds203', h.T('art. 203 CdS', 'art. 203 Highway Code'))],
  [h.T('Opposizione al giudice di pace', 'Challenge before the justice of the peace'), h.T('30 giorni, 60 dall’estero', '30 days, 60 from abroad'), h.src('dlgs150', 'D.Lgs. 150/2011, art. 7')],
], undefined, ['l', 'l', 'l'])}
<h2>What to check on the notice</h2>
<p>First the date, time and gate: compare them with the zone’s hours on this site and with the sign. Then the date the offence was established and the date of notice, for the 90 days. If you had a permit, a hotel booking or a hospital visit, find the receipt: many cities, such as ${h.a('torino', 'Turin')}, require a notice within a few days to cancel the fine. If you received several notices, group them by day and by zone.</p>
<h2>Was the gate active?</h2>
<p>A camera gate can only be used for fines if it is authorised and switched on: Turin’s notice on the Valentino zone points out that new gates start after approval by the Ministry of Infrastructure and a trial period. The “varco attivo” or “non attivo” panel is a guide for drivers. The ${h.a('varchi', 'ZTL camera gates')} page explains how they work; the ${h.a('multa', 'ZTL fine calculator')} shows what you pay if an appeal is not worth it.</p>`,
  },
});
