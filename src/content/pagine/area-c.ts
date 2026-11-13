import { defineGuide } from '../../lib/guide-types';

/** Area C Milano : orari (pagina del 15/10/2026) e ticket in vigore dal 30/10/2023 (tabella del Comune). */
export default defineGuide({
  id: 'area-c',
  group: 'citta',
  order: 3,
  tool: 'stato',
  citta: 'milano',
  zona: 'area-c',
  related: ['milano', 'area-b', 'multa', 'ricorso', 'varchi', 'festivi'],
  sources: ['milanoC', 'milanoTicket', 'cds7', 'cds198'],
  it: {
    slug: 'area-c-milano',
    nav: 'Area C Milano',
    card: 'Lunedì–venerdì 7:30–19:30, festivi esclusi: ticket da 7,50 €, cosa succede se lo dimentichi.',
    title: 'Area C Milano 2026: orari, ticket da 7,50 € e multa',
    description: 'Area C Milano: attiva dal lunedì al venerdì dalle 7:30 alle 19:30, festivi esclusi. Ticket giornaliero 7,50 €, 22,50 € se pagato tardi. Vedi se è attiva adesso.',
    h1: 'Area C Milano: è attiva adesso?',
    intro: 'Area C Milano chiede un ticket solo nei giorni feriali dalle 7:30 alle 19:30. Lo strumento dice se a quest’ora devi pagare e quando finisce la fascia.',
    resume: (h) => `Area C è la zona a traffico limitato a pagamento del centro di Milano, dentro la Cerchia dei Bastioni. Secondo il Comune di Milano è attiva tutto l’anno dal lunedì al venerdì, dalle 7:30 alle 19:30, festivi esclusi: fuori da questi orari, il sabato, la domenica e nei giorni festivi si entra senza ticket. Quando è attiva, l’ingresso è regolato da varchi elettronici che leggono le targhe. Il ticket ordinario costa ${h.eur(h.P.areaC.ticket, 2)} ed è giornaliero: con un solo ticket si entra e si esce con lo stesso veicolo tutte le volte che si vuole nella stessa giornata. I residenti in Area C registrati pagano ${h.eur(h.P.permessi.milano_residenti_ticket, 2)} a partire dal ${h.P.permessi.milano_residenti_dal_accesso}° ingresso dell’anno; chi parcheggia in un’autorimessa convenzionata dentro l’area paga ${h.eur(4.5, 2)}. Chi dimentica il ticket può ancora pagarlo, maggiorato a ${h.eur(h.P.areaC.ticket_tardivo, 2)}, dal giorno dopo fino al settimo giorno successivo all’ingresso. Tariffe in vigore dal 30 ottobre 2023.`,
    faqs: (h) => [
      { q: 'Area C è attiva ad agosto?', a: 'La pagina del Comune dice che Area C è attiva tutto l’anno dal lunedì al venerdì, festivi esclusi, senza indicare una sospensione estiva. Il 15 agosto, festivo, l’area non è attiva; gli altri giorni feriali di agosto sì. Lo strumento in alto calcola ogni giorno, compreso il Ferragosto.' },
      { q: 'Come si paga il ticket di Area C?', a: 'Il ticket si compra sul portale di Area C, ai parcometri, nelle tabaccherie e nei punti convenzionati, ai bancomat abilitati, con addebito Telepass, UnipolMove o PayPal, nelle autorimesse convenzionate o al numero 02 4868 4001. Dopo l’acquisto va attivato associando il codice del tagliando alla targa, entro la mezzanotte del giorno dell’ingresso.' },
      { q: 'Che cosa succede se non pago il ticket di Area C?', a: `Passati i sette giorni per il ticket maggiorato, arriva il verbale: la sanzione dell’articolo 7 del Codice della Strada, da ${h.eur(h.P.multa.ztl.min)} a ${h.eur(h.P.multa.ztl.max)}, più l’importo del ticket del giorno, come prevede il comma 14-bis. Il calcolo della multa ZTL mostra quanto si paga entro 5 e 60 giorni.` },
    ],
    body: (h) => `<h2>Orari e tariffe di Area C Milano</h2>
${h.table([h.T('Voce', 'Item'), h.T('Valore', 'Value')], [
  [h.T('Giorni e orari', 'Days and hours'), h.T('lunedì–venerdì 7:30–19:30, festivi esclusi', 'Monday–Friday 7:30–19:30, holidays excluded')],
  [h.T('Ticket giornaliero', 'Day ticket'), h.eur(h.P.areaC.ticket, 2)],
  [h.T('Residenti in Area C, dal 51° ingresso', 'Area C residents, from the 51st entry'), h.eur(3, 2)],
  [h.T('Veicoli di servizio registrati, autorimesse convenzionate', 'Registered service vehicles, affiliated garages'), h.eur(4.5, 2)],
  [h.T('Ticket pagato dal giorno dopo al settimo giorno', 'Ticket paid from the next day to the seventh day'), h.eur(h.P.areaC.ticket_tardivo, 2)],
], h.src('milanoTicket', h.T('Comune di Milano, tabella dei ticket in vigore dal 30 ottobre 2023', 'City of Milan, ticket table in force since 30 October 2023')), ['l', 'r'])}
<h2>Chi è escluso del tutto</h2>
<p>Area C non è solo un pedaggio: alcune categorie di veicoli non possono entrare nemmeno pagando. La pagina del Comune elenca, tra gli altri, i motoveicoli e ciclomotori a due tempi Euro 2 e 3, quelli a gasolio Euro 2 e 3 e quelli a benzina a quattro tempi Euro 0, 1 e 2; l’elenco completo, con le deroghe, è sulla pagina di ${h.src('milanoC', 'Area C')}. Per un veicolo vietato il verbale può citare una norma diversa da quella del ticket mancato: fa fede ciò che vi è scritto.</p>
<h2>Area C, Area B e la sera</h2>
<p>Dopo le 19:30 Area C si spegne, ma alcune ZTL di quartiere si accendono: i Navigli dalle 20:00, l’Arco della Pace dalle 22:00. La pagina ${h.a('milano', 'ZTL Milano')} le elenca tutte; ${h.a('area-b', 'Area B')} ha lo stesso orario di Area C ma vale per un’area molto più grande e solo per i veicoli più inquinanti.</p>`,
  },
  en: {
    slug: 'milan-area-c',
    nav: 'Area C Milan',
    card: 'Monday–Friday 7:30–19:30, holidays excluded: €7.50 ticket, and what happens if you forget it.',
    title: 'Area C Milan 2026: hours, the €7.50 ticket and the fine',
    description: 'Area C Milan: active Monday to Friday from 7:30 to 19:30, public holidays excluded. Day ticket €7.50, €22.50 if paid late. See whether it is active right now.',
    h1: 'Area C Milan: is it active now?',
    intro: 'Area C Milan charges only on weekdays from 7:30 to 19:30. The tool tells you whether you need to pay at this time and when the period ends.',
    resume: (h) => `Area C is the charging limited-traffic zone of central Milan, inside the Cerchia dei Bastioni ring. According to the City of Milan it is active all year from Monday to Friday, from 7:30 to 19:30, public holidays excluded: outside those hours, on Saturday, Sunday and public holidays you may enter without a ticket. While it is active, entry is controlled by electronic gates that read number plates. The ordinary ticket costs ${h.eur(h.P.areaC.ticket, 2)} and is a day ticket: with one ticket you may drive in and out with the same vehicle as often as you like on the same day. Registered Area C residents pay ${h.eur(h.P.permessi.milano_residenti_ticket, 2)} from their ${h.P.permessi.milano_residenti_dal_accesso}st entry of the year; drivers parking in an affiliated garage inside the area pay ${h.eur(4.5, 2)}. If you forget the ticket you can still pay it, raised to ${h.eur(h.P.areaC.ticket_tardivo, 2)}, from the next day up to the seventh day after entry. Prices in force since 30 October 2023.`,
    faqs: (h) => [
      { q: 'Is Area C active in August?', a: 'The city page says Area C is active all year Monday to Friday, public holidays excluded, with no summer suspension stated. On 15 August, a public holiday, the area is not active; on the other August weekdays it is. The tool at the top works out every day, Ferragosto included.' },
      { q: 'How do I pay the Area C ticket?', a: 'Tickets are sold on the Area C portal, at parking meters, in tobacconists and affiliated outlets, at enabled cash machines, by Telepass, UnipolMove or PayPal billing, in affiliated garages or on 02 4868 4001. After buying, you must activate it by linking the ticket code to your plate, by midnight on the day of entry.' },
      { q: 'What happens if I do not pay the Area C ticket?', a: `Once the seven days for the late ticket have passed, a fine notice follows: the article 7 Highway Code fine of ${h.eur(h.P.multa.ztl.min)} to ${h.eur(h.P.multa.ztl.max)}, plus the day’s ticket, as paragraph 14-bis provides. The ZTL fine calculator shows how much you pay within 5 and 60 days.` },
    ],
    body: (h) => `<h2>Area C Milan hours and prices</h2>
${h.table([h.T('Voce', 'Item'), h.T('Valore', 'Value')], [
  [h.T('Giorni e orari', 'Days and hours'), h.T('lunedì–venerdì 7:30–19:30, festivi esclusi', 'Monday–Friday 7:30–19:30, holidays excluded')],
  [h.T('Ticket giornaliero', 'Day ticket'), h.eur(h.P.areaC.ticket, 2)],
  [h.T('Residenti in Area C, dal 51° ingresso', 'Area C residents, from the 51st entry'), h.eur(3, 2)],
  [h.T('Veicoli di servizio registrati, autorimesse convenzionate', 'Registered service vehicles, affiliated garages'), h.eur(4.5, 2)],
  [h.T('Ticket pagato dal giorno dopo al settimo giorno', 'Ticket paid from the next day to the seventh day'), h.eur(h.P.areaC.ticket_tardivo, 2)],
], h.src('milanoTicket', h.T('Comune di Milano, tabella dei ticket in vigore dal 30 ottobre 2023', 'City of Milan, ticket table in force since 30 October 2023')), ['l', 'r'])}
<h2>Vehicles banned altogether</h2>
<p>Area C is not just a toll: some vehicle categories may not enter even if they pay. The city page lists, among others, two-stroke Euro 2 and 3 motorbikes and mopeds, Euro 2 and 3 diesel ones and Euro 0, 1 and 2 four-stroke petrol ones; the full list, with exemptions, is on the ${h.src('milanoC', 'Area C page')}. For a banned vehicle the notice may cite a different rule from the missing-ticket one: what it says is what counts.</p>
<h2>Area C, Area B and the evening</h2>
<p>After 19:30 Area C switches off, but some neighbourhood ZTLs switch on: the Navigli from 20:00, Arco della Pace from 22:00. The ${h.a('milano', 'Milan ZTL')} page lists them all; ${h.a('area-b', 'Area B')} has the same hours as Area C but covers a much larger area and only the most polluting vehicles.</p>`,
  },
});
