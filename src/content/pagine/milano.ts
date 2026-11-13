import { defineGuide } from '../../lib/guide-types';
import { tabellaZone } from '../../lib/citta';

/** Milano : Area C, Area B e le ZTL minori con orario nel dataset ds51 (comune.milano.it, dati.comune.milano.it). */
export default defineGuide({
  id: 'milano',
  group: 'citta',
  order: 2,
  tool: 'stato',
  citta: 'milano',
  zona: 'navigli-notturna',
  related: ['area-c', 'area-b', 'notturne', 'multa', 'roma', 'pavia'],
  sources: ['milanoC', 'milanoB', 'milanoOD', 'milanoTicket', 'cds7'],
  it: {
    slug: 'ztl-milano',
    nav: 'Milano',
    card: 'Area C, Area B, Navigli, Arco della Pace, Lagrange, Ascanio Sforza: le ZTL di Milano con i loro orari.',
    title: 'ZTL Milano 2026: Area C, Area B, Navigli e orari notturni',
    description: 'ZTL Milano: Area C e Area B dal lunedì al venerdì 7:30–19:30, Navigli chiusi ogni notte dalle 20 alle 7, Arco della Pace dalle 22 alle 6. Stato del varco ora.',
    h1: 'ZTL Milano: Area C, Area B e zone notturne',
    intro: 'La ZTL di Milano non è una sola: preimpostata c’è la ZTL Navigli notturna. Scegli Area C, Area B o un’altra zona e l’ora per vedere se è attiva.',
    resume: (h) => `A Milano le limitazioni al traffico sono su tre livelli. Area C, la Cerchia dei Bastioni, è una zona a pagamento: dal lunedì al venerdì dalle 7:30 alle 19:30, festivi esclusi, si entra solo con un ticket giornaliero da ${h.eur(h.P.areaC.ticket, 2)}, e i varchi elettronici leggono la targa. Area B, molto più ampia e delimitata dai varchi blu, ha gli stessi orari, ma non chiede un ticket: vieta l’ingresso ai veicoli più inquinanti indicati dal Comune. Poi ci sono le ZTL di quartiere, che il Comune elenca nel dataset aperto «Aree pedonali e ZTL»: alcune con orari notturni, come i Navigli, chiusi tutti i giorni dalle 20:00 alle 7:00, l’Arco della Pace, dalle 22:00 alle 6:00, via Lagrange e corso Manusardi, dalle 20:00 alle 2:00 dal lunedì al giovedì e dalle 19:00 alle 3:00 nel fine settimana, e Ascanio Sforza, chiusa dal venerdì sera al lunedì mattina. Le pagine di Area C e Area B sono aggiornate al 15 ottobre 2026; il dataset all’8 maggio 2026.`,
    faqs: (h) => [
      { q: 'La ZTL di Milano è attiva il sabato e la domenica?', a: 'Area C e Area B no: valgono dal lunedì al venerdì, festivi esclusi. Le ZTL notturne dei Navigli e dell’Arco della Pace invece sono attive tutti i giorni, sabato e domenica compresi, e quella di Ascanio Sforza è chiusa ininterrottamente dalle 19:00 del venerdì alle 6:00 del lunedì.' },
      { q: 'Quanto costa entrare in Area C senza ticket?', a: `Se non si paga il ticket entro i termini, la sanzione è quella dell’articolo 7, comma 14-bis, del Codice della Strada: da ${h.eur(h.P.multa.ztl.min)} a ${h.eur(h.P.multa.ztl.max)}, più l’importo del ticket del giorno. Chi si accorge dell’ingresso può ancora pagare il ticket maggiorato da ${h.eur(h.P.areaC.ticket_tardivo, 2)} dal giorno dopo fino al settimo giorno successivo, come indica la tabella del Comune.` },
      { q: 'Le ZTL dei Navigli bloccano anche i residenti?', a: 'Le ZTL di Milano, come tutte, vietano l’ingresso ai veicoli non autorizzati: i residenti e le altre categorie indicate nell’ordinanza entrano con il permesso. Il dataset del Comune riporta l’ordinanza di ogni zona, per i Navigli la 648 del 2015, ma non l’elenco completo delle deroghe, che resta nell’atto.' },
    ],
    body: (h) => `<h2>Orari della ZTL Milano zona per zona</h2>
${tabellaZone(h, 'milano')}
<p>Area C e Area B vengono dalle pagine del ${h.src('milanoC', 'Comune di Milano')}; le zone di quartiere dal dataset ${h.src('milanoOD', '«Aree pedonali e ZTL»')} (licenza CC BY), nel campo delle note. Nel dataset ci sono anche ZTL senza orario indicato, come Ticinese, corso Como o Garibaldi: non le mostriamo, perché senza l’orario non possiamo dire se sono attive.</p>
<h2>Area C e Area B in breve</h2>
<p>${h.a('area-c', 'Area C')} è la zona a pagamento del centro: il ticket vale tutto il giorno, si può entrare e uscire più volte con lo stesso veicolo, e si attiva entro la mezzanotte del giorno dell’ingresso. ${h.a('area-b', 'Area B')} è una zona a basse emissioni: non costa nulla a chi ha un veicolo ammesso. Le due aree hanno lo stesso orario, quindi una sera o un sabato a Milano non pongono problemi per chi resta fuori dalle zone notturne.</p>
<h2>La sera a Milano</h2>
<p>Chi va sui Navigli in auto la sera trova la ZTL già attiva dalle 20:00, ogni giorno dell’anno. Per sapere quali zone sono accese a un’ora precisa in tutte le città, usa la pagina sulle ${h.a('notturne', 'ZTL notturne')}; per il conto di una multa il ${h.a('multa', 'calcolo della multa ZTL')}.</p>`,
  },
  en: {
    slug: 'milan-ztl',
    nav: 'Milan',
    card: 'Area C, Area B, Navigli, Arco della Pace, Lagrange, Ascanio Sforza: Milan’s ZTLs and their hours.',
    title: 'Milan ZTL 2026: Area C, Area B, Navigli and night hours',
    description: 'Milan ZTL: Area C and Area B Monday to Friday 7:30–19:30, the Navigli closed every night from 20:00 to 7:00, Arco della Pace 22:00 to 6:00. Gate status now.',
    h1: 'Milan ZTL: Area C, Area B and night zones',
    intro: 'The Milan ZTL is not a single zone: the Navigli night ZTL is preset. Pick Area C, Area B or another zone and the time to see whether it is active.',
    resume: (h) => `Milan restricts traffic on three levels. Area C, inside the Cerchia dei Bastioni ring, is a charging zone: Monday to Friday from 7:30 to 19:30, public holidays excluded, you may only enter with a ${h.eur(h.P.areaC.ticket, 2)} day ticket, and electronic gates read your plate. Area B, much wider and marked out by blue gates, has the same hours but charges nothing: it bans the most polluting vehicles listed by the city. Then there are neighbourhood ZTLs, which the city lists in its open “Aree pedonali e ZTL” dataset: some with night hours, such as the Navigli, closed every day from 20:00 to 7:00, Arco della Pace, from 22:00 to 6:00, Via Lagrange and Corso Manusardi, from 20:00 to 2:00 Monday to Thursday and from 19:00 to 3:00 at weekends, and Ascanio Sforza, closed from Friday evening to Monday morning. The Area C and Area B pages were updated on 15 October 2026; the dataset on 8 May 2026.`,
    faqs: (h) => [
      { q: 'Is the Milan ZTL active on Saturday and Sunday?', a: 'Area C and Area B are not: they apply Monday to Friday, public holidays excluded. The Navigli and Arco della Pace night ZTLs, however, are active every day, weekends included, and Ascanio Sforza is closed without a break from 19:00 on Friday to 6:00 on Monday.' },
      { q: 'How much does entering Area C without a ticket cost?', a: `If the ticket is not paid in time, the fine is the one in article 7, paragraph 14-bis, of the Highway Code: ${h.eur(h.P.multa.ztl.min)} to ${h.eur(h.P.multa.ztl.max)}, plus the day’s ticket. A driver who realises they entered can still pay the ${h.eur(h.P.areaC.ticket_tardivo, 2)} late ticket from the next day up to the seventh day after, according to the city’s price table.` },
      { q: 'Do the Navigli ZTLs block residents as well?', a: 'Milan’s ZTLs, like all ZTLs, ban vehicles without authorisation: residents and the other categories listed in the order enter with a permit. The city dataset gives each zone’s order, number 648 of 2015 for the Navigli, but not the full list of exemptions, which stays in the order itself.' },
    ],
    body: (h) => `<h2>Milan ZTL hours, zone by zone</h2>
${tabellaZone(h, 'milano')}
<p>Area C and Area B come from the ${h.src('milanoC', 'City of Milan')} pages; the neighbourhood zones from the ${h.src('milanoOD', '“Aree pedonali e ZTL” dataset')} (CC BY licence), in its notes field. The dataset also lists ZTLs with no hours stated, such as Ticinese, Corso Como or Garibaldi: we do not show them, because without hours we cannot say whether they are active.</p>
<h2>Area C and Area B in short</h2>
<p>${h.a('area-c', 'Area C')} is the central charging zone: the ticket lasts the whole day, you may drive in and out several times with the same vehicle, and it must be activated by midnight on the day of entry. ${h.a('area-b', 'Area B')} is a low-emission zone: it costs nothing for an allowed vehicle. Both areas have the same hours, so an evening or a Saturday in Milan is no problem as long as you stay out of the night zones.</p>
<h2>Evenings in Milan</h2>
<p>Anyone driving to the Navigli in the evening finds the ZTL already active from 20:00, every day of the year. To see which zones are on at a given time in every city, use the ${h.a('notturne', 'night ZTL')} page; to work out a fine, the ${h.a('multa', 'ZTL fine calculator')}.</p>`,
  },
});
