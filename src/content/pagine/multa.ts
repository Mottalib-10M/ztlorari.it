import { defineGuide } from '../../lib/guide-types';

/** Multa ZTL : art. 7 c.14 e 14-bis, art. 198 c.2-bis, art. 202 (testi vigenti su Normattiva, letti il 13/11/2026). */
export default defineGuide({
  id: 'multa',
  group: 'regole',
  order: 11,
  tool: 'multa',
  related: ['ricorso', 'varchi', 'area-c', 'permessi', 'roma', 'milano'],
  sources: ['cds7', 'cds198', 'cds201', 'cds202', 'cds203'],
  it: {
    slug: 'multa-ztl',
    nav: 'Multa ZTL',
    card: 'Da 83 a 332 €, 58,10 € se paghi entro 5 giorni: una multa per giorno, anche con più passaggi.',
    title: 'Multa ZTL 2026: quanto costa, sconto del 30% e giorni',
    description: 'Multa ZTL: da 83 a 332 € per ogni giorno con passaggi, 58,10 € pagando entro 5 giorni dalla notifica. Calcola il totale per più giorni, Area C e auto vietate.',
    h1: 'Multa ZTL: quanto costa e come si calcola',
    intro: 'La multa ZTL si conta a giorni, non a passaggi. Inserisci quanti giorni sei entrato e la data della notifica: il calcolo dà il totale e le scadenze.',
    resume: (h) => {
      const uno = h.M.multa({ tipo: 'ztl', giorni: 1 });
      return `Chi entra senza autorizzazione in una zona a traffico limitato quando è attiva riceve la sanzione dell’articolo 7, comma 14, del Codice della Strada: da ${h.eur(h.P.multa.ztl.min)} a ${h.eur(h.P.multa.ztl.max)}. Dal 14 dicembre 2024 l’articolo 198, comma 2-bis stabilisce che, quando i passaggi nella stessa ZTL sono rilevati dalle telecamere, si applica una sola sanzione per ciascun giorno di calendario: tre passaggi lo stesso giorno fanno una multa, tre giorni diversi ne fanno tre. Secondo l’articolo 202 si paga il minimo, ${h.eur(h.P.multa.ztl.min)}, entro 60 giorni dalla notifica, e il 30% in meno, ${h.eur(uno.entro5, 2)}, entro 5 giorni. Se non si paga e non si fa ricorso, la somma diventa la metà del massimo, ${h.eur(uno.dopo60)}. Nelle zone a pagamento, come Area C a Milano, il comma 14-bis aggiunge la tariffa del giorno. Chi entra con un veicolo vietato per le emissioni rischia da ${h.eur(h.P.multa.emissioni.min)} a ${h.eur(h.P.multa.emissioni.max)}. A questi importi l’ente aggiunge le spese di notifica e di procedimento, scritte sul verbale.`;
    },
    faqs: (h) => [
      { q: 'Sono passato due volte dallo stesso varco nello stesso giorno: quante multe?', a: 'Una sola, se i passaggi sono nella stessa ZTL e sono stati rilevati dalle telecamere: lo prevede l’articolo 198, comma 2-bis, del Codice della Strada, in vigore dal 14 dicembre 2024. Se invece arrivano due verbali per lo stesso giorno e la stessa zona, conviene segnalarlo all’ente prima di pagare o fare ricorso.' },
      { q: 'Lo sconto del 30% vale anche per la multa ZTL?', a: `Sì: pagando entro 5 giorni dalla notifica o dalla contestazione si paga il 30% in meno della sanzione minima, cioè ${h.eur(h.M.multa({ tipo: 'ztl', giorni: 1 }).entro5, 2)} invece di ${h.eur(h.P.multa.ztl.min)}. Le spese di notifica non si riducono. Nelle zone a pagamento lo sconto riguarda la sanzione, non la tariffa del giorno che viene recuperata.` },
      { q: 'Entro quanto deve arrivare la multa ZTL?', a: 'Il verbale va notificato entro 90 giorni dall’accertamento, secondo l’articolo 201 del Codice della Strada; per chi risiede all’estero il termine è di 360 giorni. Il termine parte dal giorno in cui l’ente ha identificato il proprietario del veicolo, che può essere diverso dal giorno del passaggio.' },
    ],
    body: (h) => {
      const r = (g: number) => h.M.multa({ tipo: 'ztl', giorni: g });
      return `<h2>Multa ZTL per numero di giorni</h2>
${h.table([h.T('Giorni con passaggi', 'Days with entries'), h.T('Entro 5 giorni', 'Within 5 days'), h.T('Entro 60 giorni', 'Within 60 days'), h.T('Non pagata, senza ricorso', 'Unpaid, no appeal')],
  [1, 2, 3, 5].map((g) => [g, h.eur(r(g).entro5, 2), h.eur(r(g).entro60, 2), h.eur(r(g).dopo60, 2)]),
  h.T('Calcolo con gli articoli 7, 198 e 202 del Codice della Strada (vedi le fonti). Spese di notifica escluse.', 'Calculated with articles 7, 198 and 202 of the Highway Code (see the sources). Notification costs excluded.'), ['r', 'r', 'r', 'r'])}
<h2>Tre tipi di violazione</h2>
<p>Il calcolo distingue tre casi. L’ingresso in una ZTL senza permesso è il caso normale. L’ingresso in una zona a pagamento senza aver pagato, come ${h.a('area-c', 'Area C')}, aggiunge alla sanzione la tariffa dell’intero periodo del giorno. La circolazione con un veicolo di classe di emissioni inferiore a quella prescritta, come nella ${h.a('fascia-verde', 'Fascia Verde')} o in ${h.a('area-b', 'Area B')}, ha una sanzione più alta, e se si ripete nel biennio porta la sospensione della patente da 15 a 30 giorni.</p>
<h2>Che cosa il calcolo non sa</h2>
<p>Non conosce le spese di notifica e di procedimento, diverse per ogni ente, né le maggiorazioni per i ritardi oltre i termini di legge. Non dice se il verbale è valido: per questo c’è la pagina sul ${h.a('ricorso', 'ricorso contro la multa ZTL')}. E non sa se avevi un permesso: in quel caso il problema è la banca dati dei varchi, da segnalare all’ente.</p>`;
    },
  },
  en: {
    slug: 'ztl-fine-italy',
    nav: 'ZTL fine',
    card: '€83 to €332, €58.10 if paid within 5 days: one fine per day, even with several entries.',
    title: 'ZTL fine in Italy 2026: how much, the 30% discount, days',
    description: 'ZTL fine in Italy: €83 to €332 for each day with entries, €58.10 if paid within 5 days of notice. Work out the total for several days, Area C and banned cars.',
    h1: 'ZTL fine in Italy: how much and how it adds up',
    intro: 'A ZTL fine in Italy is counted by days, not by entries. Enter how many days you drove in and the notice date: the calculator gives the total and the deadlines.',
    resume: (h) => {
      const uno = h.M.multa({ tipo: 'ztl', giorni: 1 });
      return `Anyone who drives into an Italian limited-traffic zone without authorisation while it is active gets the fine set by article 7, paragraph 14, of the Highway Code: ${h.eur(h.P.multa.ztl.min)} to ${h.eur(h.P.multa.ztl.max)}. Since 14 December 2024, article 198, paragraph 2-bis provides that when entries into the same ZTL are recorded by cameras, a single fine applies for each calendar day: three entries on one day make one fine, three different days make three. Under article 202 you pay the minimum, ${h.eur(h.P.multa.ztl.min)}, within 60 days of notice, and 30% less, ${h.eur(uno.entro5, 2)}, within 5 days. If you neither pay nor appeal, the amount becomes half the maximum, ${h.eur(uno.dopo60)}. In charging zones such as Milan’s Area C, paragraph 14-bis adds the day’s charge. Driving in with a vehicle banned for its emissions risks ${h.eur(h.P.multa.emissioni.min)} to ${h.eur(h.P.multa.emissioni.max)}. On top of these amounts the authority adds notification and processing costs, shown on the notice.`;
    },
    faqs: (h) => [
      { q: 'I passed the same gate twice on the same day: how many fines?', a: 'Just one, if the entries are in the same ZTL and were recorded by cameras: article 198, paragraph 2-bis, of the Highway Code says so, in force since 14 December 2024. If two notices arrive for the same day and zone, report it to the authority before paying or appealing.' },
      { q: 'Does the 30% discount apply to a ZTL fine?', a: `Yes: paying within 5 days of notice or of being stopped, you pay 30% less than the minimum fine, that is ${h.eur(h.M.multa({ tipo: 'ztl', giorni: 1 }).entro5, 2)} instead of ${h.eur(h.P.multa.ztl.min)}. Notification costs are not reduced. In charging zones the discount applies to the fine, not to the day’s charge being recovered.` },
      { q: 'How long does the authority have to send a ZTL fine?', a: 'The notice must be served within 90 days of the offence being established, under article 201 of the Highway Code; for people living abroad the limit is 360 days. The clock starts when the authority has identified the vehicle’s owner, which may be later than the day of the entry.' },
    ],
    body: (h) => {
      const r = (g: number) => h.M.multa({ tipo: 'ztl', giorni: g });
      return `<h2>ZTL fine by number of days</h2>
${h.table([h.T('Giorni con passaggi', 'Days with entries'), h.T('Entro 5 giorni', 'Within 5 days'), h.T('Entro 60 giorni', 'Within 60 days'), h.T('Non pagata, senza ricorso', 'Unpaid, no appeal')],
  [1, 2, 3, 5].map((g) => [g, h.eur(r(g).entro5, 2), h.eur(r(g).entro60, 2), h.eur(r(g).dopo60, 2)]),
  h.T('Calcolo con gli articoli 7, 198 e 202 del Codice della Strada (vedi le fonti). Spese di notifica escluse.', 'Calculated with articles 7, 198 and 202 of the Highway Code (see the sources). Notification costs excluded.'), ['r', 'r', 'r', 'r'])}
<h2>Three kinds of offence</h2>
<p>The calculator separates three cases. Entering a ZTL without a permit is the usual one. Entering a charging zone without paying, such as ${h.a('area-c', 'Area C')}, adds the charge for the whole day’s period to the fine. Driving a vehicle of a lower emission class than required, as in Rome’s ${h.a('fascia-verde', 'Fascia Verde')} or Milan’s ${h.a('area-b', 'Area B')}, carries a higher fine, and if repeated within two years a licence suspension of 15 to 30 days.</p>
<h2>What the calculator does not know</h2>
<p>It does not know the notification and processing costs, which differ by authority, nor surcharges for paying after the legal deadlines. It does not say whether the notice is valid: that is what the ${h.a('ricorso', 'ZTL fine appeal')} page is for. And it does not know whether you had a permit: if you did, the problem lies in the gate database and should be reported to the authority.</p>`;
    },
  },
});
