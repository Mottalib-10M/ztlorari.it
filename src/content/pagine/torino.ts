import { defineGuide } from '../../lib/guide-types';
import { tabellaZone, fonteFrase } from '../../lib/citta';

/** Torino : ZTL Centrale 7:30–10:30 feriali, Area Romana, corsie riservate, pedonale, Valentino (scheda del 12/11/2026). */
export default defineGuide({
  id: 'torino',
  group: 'citta',
  order: 7,
  tool: 'stato',
  citta: 'torino',
  zona: 'centrale',
  related: ['permessi', 'varchi', 'multa', 'festivi', 'milano', 'pavia'],
  sources: ['torino', 'torinoAgosto', 'torinoValentino', 'cds7'],
  it: {
    slug: 'ztl-torino',
    nav: 'Torino',
    card: 'ZTL Centrale solo dalle 7:30 alle 10:30 nei feriali, Area Romana la notte, Valentino 24 ore su 24.',
    title: 'ZTL Torino 2026: orari 7:30–10:30, Area Romana e varchi',
    description: 'ZTL Torino: la ZTL Centrale è attiva solo dal lunedì al venerdì dalle 7:30 alle 10:30; Area Romana ogni notte dalle 21 alle 7:30, Valentino sempre. Stato ora.',
    h1: 'ZTL Torino: orari, Area Romana e varchi',
    intro: 'La ZTL di Torino è attiva tre ore al giorno, ma dentro ci sono zone più severe. Preimpostata la ZTL Centrale: scegli zona, giorno e ora.',
    resume: (h) => `La ZTL Centrale di Torino ha un orario breve: secondo la scheda della Città di Torino, dalle 7:30 alle 10:30 di tutti i giorni feriali, sabato escluso, sono vietate la circolazione e la sosta e circolano solo i veicoli autorizzati. Il resto della giornata, il sabato, la domenica e i festivi si entra liberamente. Dentro la ZTL Centrale però ci sono limitazioni più strette, valide tutti i giorni compresi i festivi: l’Area Romana, chiusa dalle 21:00 alle 7:30 del giorno dopo, e in piazza Emanuele Filiberto già dalle 19:30; le strade e corsie riservate al trasporto pubblico, chiuse dalle 7:00 alle 20:00; la ZTL Pedonale, chiusa 24 ore su 24. Fuori dal centro la ZTL Valentino, nel parco, è chiusa a ogni ora. Gli accessi sono controllati da telecamere in 41 punti. Nel 2026 la ZTL Centrale è sospesa dal 10 al 23 agosto, mentre restano attive l’Area Romana, le corsie riservate, la Pedonale e il Valentino. ${fonteFrase(h, 'torino')}`,
    faqs: (h) => [
      { q: 'A che ora finisce la ZTL di Torino?', a: 'La ZTL Centrale finisce alle 10:30, dal lunedì al venerdì. Dopo quell’ora si può entrare con qualunque veicolo, ma restano chiuse l’Area Romana dalle 21:00, le corsie riservate al trasporto pubblico fino alle 20:00 e la ZTL Pedonale a ogni ora. Lo strumento in alto mostra ciascuna di queste zone separatamente.' },
      { q: 'Sono entrato per sbaglio nella ZTL di Torino: posso evitare la multa?', a: `Solo se rientri in uno dei casi del manuale delle esenzioni a posteriori: per esempio una visita in una struttura sanitaria, un veicolo sostitutivo di un’auto rubata o in riparazione, un contrassegno disabili non registrato. In quel caso la comunicazione a GTT va fatta entro ${h.P.permessi.torino_giorni_esenzione} giorni dal primo transito, sabato e festivi compresi. Un ingresso per distrazione non è fra i casi previsti.` },
      { q: 'La ZTL di Torino è attiva ad agosto?', a: 'Nel 2026 la ZTL Centrale è sospesa dal 10 al 23 agosto, insieme al pagamento della sosta sulle strisce blu, secondo il comunicato della Città del 4 giugno 2026. Il comunicato esclude dalla sospensione le ZTL «Trasporto Pubblico», «Pedonale», «Area Romana» e «Valentino», che restano attive.' },
    ],
    body: (h) => `<h2>Orari della ZTL Torino per zona</h2>
${tabellaZone(h, 'torino')}
<p>La sospensione estiva viene dal ${h.src('torinoAgosto', 'comunicato del 4 giugno 2026')}; i dati del Valentino dal ${h.src('torinoValentino', 'comunicato del 24 marzo 2026')}, che amplia la zona a viale Medaglie d’Oro e al tratto nord di viale Ceppi. I nuovi varchi del Valentino partono solo dopo l’autorizzazione del Ministero delle Infrastrutture e un periodo di pre-esercizio.</p>
<h2>Chi può entrare nella ZTL Centrale</h2>
<p>Durante le tre ore del divieto entrano i veicoli con permesso rilasciato dalla Città o da GTT, e quelli autorizzati senza permesso: mezzi di soccorso e di polizia, taxi e noleggio con conducente, trasporto pubblico. Per avere un permesso il veicolo deve essere almeno Euro 3, oppure Euro 2 a GPL o metano. Chi accompagna un alunno in una scuola della ZTL chiede il «permesso scuola» tramite la scuola; chi va in ospedale comunica la targa all’accettazione.</p>
<h2>Più varchi, una multa al giorno</h2>
<p>Le telecamere fotografano la targa e la confrontano con la banca dati dei permessi. Più passaggi nella stessa ZTL nello stesso giorno valgono una sola sanzione, secondo l’articolo 198 del Codice della Strada. La pagina sui ${h.a('varchi', 'varchi ZTL')} spiega come funzionano, il ${h.a('multa', 'calcolo della multa ZTL')} dice quanto si paga.</p>`,
  },
  en: {
    slug: 'turin-ztl',
    nav: 'Turin',
    card: 'The ZTL Centrale runs only 7:30 to 10:30 on weekdays; Area Romana at night, Valentino 24 hours a day.',
    title: 'Turin ZTL 2026: 7:30–10:30 hours, Area Romana and gates',
    description: 'Turin ZTL: the ZTL Centrale is active only Monday to Friday from 7:30 to 10:30; Area Romana every night from 21:00 to 7:30, Valentino at all times. Status now.',
    h1: 'Turin ZTL: hours, Area Romana and gates',
    intro: 'The Turin ZTL is active three hours a day, but stricter zones sit inside it. The ZTL Centrale is preset: pick a zone, a day and a time.',
    resume: (h) => `Turin’s ZTL Centrale has short hours: according to the City of Turin information page, from 7:30 to 10:30 on every working day, Saturday excluded, driving and parking are banned and only authorised vehicles may circulate. The rest of the day, on Saturday, Sunday and public holidays, anyone may enter. Inside the ZTL Centrale, however, there are stricter limits that apply every day, holidays included: Area Romana, closed from 21:00 to 7:30 the next morning, and from 19:30 in Piazza Emanuele Filiberto; the streets and lanes reserved for public transport, closed from 7:00 to 20:00; and the Pedestrian ZTL, closed 24 hours a day. Outside the centre the Valentino ZTL, in the park, is closed at all hours. Entries are controlled by cameras at 41 points. In 2026 the ZTL Centrale is suspended from 10 to 23 August, while Area Romana, the reserved lanes, the Pedestrian ZTL and Valentino stay active. ${fonteFrase(h, 'torino')}`,
    faqs: (h) => [
      { q: 'What time does the Turin ZTL end?', a: 'The ZTL Centrale ends at 10:30, Monday to Friday. After that any vehicle may enter, but Area Romana closes from 21:00, the public-transport lanes stay closed until 20:00 and the Pedestrian ZTL is closed at all hours. The tool at the top shows each of these zones separately.' },
      { q: 'I entered the Turin ZTL by mistake: can I avoid the fine?', a: `Only if you fall within one of the cases in the after-the-fact exemption manual: for example a visit to a health facility, a replacement for a stolen car or one being repaired, or a disability badge not yet registered. In that case GTT must be notified within ${h.P.permessi.torino_giorni_esenzione} days of the first entry, Saturdays and holidays counted. Driving in absent-mindedly is not one of the cases.` },
      { q: 'Is the Turin ZTL active in August?', a: 'In 2026 the ZTL Centrale is suspended from 10 to 23 August, together with paid parking on blue lines, according to the city notice of 4 June 2026. The notice excludes from the suspension the “Trasporto Pubblico”, “Pedonale”, “Area Romana” and “Valentino” ZTLs, which stay active.' },
    ],
    body: (h) => `<h2>Turin ZTL hours by zone</h2>
${tabellaZone(h, 'torino')}
<p>The summer suspension comes from the ${h.src('torinoAgosto', 'notice of 4 June 2026')}; the Valentino details from the ${h.src('torinoValentino', 'notice of 24 March 2026')}, which extends the zone to Viale Medaglie d’Oro and the northern part of Viale Ceppi. The new Valentino gates only start after approval by the Ministry of Infrastructure and a trial period.</p>
<h2>Who may enter the ZTL Centrale</h2>
<p>During the three hours of the ban, vehicles with a permit issued by the city or by GTT may enter, as may those authorised without a permit: emergency and police vehicles, taxis and hire cars with driver, public transport. To get a permit a vehicle must be at least Euro 3, or Euro 2 running on LPG or methane. Parents taking a pupil to a school in the ZTL ask for the “school permit” through the school; hospital visitors give their plate at reception.</p>
<h2>Several gates, one fine per day</h2>
<p>The cameras photograph the plate and compare it with the permit database. Several entries in the same ZTL on the same day count as one fine, under article 198 of the Highway Code. The ${h.a('varchi', 'ZTL camera gates')} page explains how they work, and the ${h.a('multa', 'ZTL fine calculator')} shows what you pay.</p>`,
  },
});
