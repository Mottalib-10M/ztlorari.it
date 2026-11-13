import { defineGuide } from '../../lib/guide-types';
import { tabellaZone, fonteFrase } from '../../lib/citta';

/** Roma : sette ZTL orarie più la Fascia Verde (romamobilita.it, pagine del 28/07/2026 e del 02/11/2026). */
export default defineGuide({
  id: 'roma',
  group: 'citta',
  order: 1,
  tool: 'stato',
  citta: 'roma',
  zona: 'centro-diurna',
  related: ['fascia-verde', 'notturne', 'multa', 'permessi', 'festivi', 'milano'],
  sources: ['roma', 'romaFV', 'romaElettrici', 'romaPermessi', 'cds7'],
  it: {
    slug: 'ztl-roma',
    nav: 'Roma',
    card: 'Centro Storico, Tridente, Trastevere, San Lorenzo, Testaccio: orari diurni e notturni e stato adesso.',
    title: 'ZTL Roma 2026: orari, ZTL notturna e varchi attivi adesso',
    description: 'ZTL Roma: Centro Storico 6:30–18:00 dal lunedì al venerdì, Tridente fino alle 19, notturne di Trastevere e San Lorenzo. Vedi se il varco è attivo adesso.',
    h1: 'ZTL Roma: orari e varchi attivi adesso',
    intro: 'La ZTL di Roma ha sette zone con orari diversi. È preimpostato il Centro Storico diurno: cambia zona, giorno e ora per sapere se il varco è attivo.',
    resume: (h) => `Roma ha la rete di zone a traffico limitato più articolata d’Italia: la ZTL Centro Storico diurna, chiusa dal lunedì al venerdì dalle 6:30 alle 18:00 e il sabato dalle 14:00 alle 18:00; il Tridente, l’area tra piazza del Popolo e piazza di Spagna, chiuso dal lunedì al venerdì dalle 6:30 alle 19:00 e il sabato dalle 10:00 alle 19:00, anche per moto e ciclomotori senza permesso; Trastevere, chiuso la mattina dal lunedì al sabato dalle 6:30 alle 10:00; e quattro ZTL notturne che si accendono il venerdì e il sabato sera. Il Centro Storico e Testaccio di notte sono chiusi dalle 23:00 alle 3:00; Trastevere e San Lorenzo dalle 21:30 alle 3:00, e da maggio a ottobre anche il mercoledì e il giovedì. Le zone diurne e quelle notturne del Centro e di Testaccio si fermano nei festivi; Trastevere e San Lorenzo notturne no. In agosto le notturne del Centro Storico e di San Lorenzo sono spente. ${fonteFrase(h, 'roma')}`,
    faqs: (h) => [
      { q: 'La ZTL di Roma è attiva la domenica?', a: 'Le zone diurne no: Centro Storico, Tridente e Trastevere diurna non hanno fasce la domenica. Le ZTL notturne invece partono il venerdì e il sabato sera e finiscono alle 3 di notte, quindi la notte fra sabato e domenica il varco resta attivo fino alle 3:00 della domenica. Trastevere e San Lorenzo notturne restano attive anche se il giorno è festivo.' },
      { q: 'Con la moto posso entrare nella ZTL di Roma?', a: 'Sì, nel Centro Storico, a Trastevere, a San Lorenzo e a Testaccio moto e ciclomotori hanno libero accesso a tutte le ore e possono sostare negli spazi per le due ruote. L’eccezione è il Tridente (A1): lì anche moto e ciclomotori devono avere il permesso per quella zona. Resta valido il divieto della Fascia Verde per i motoveicoli più vecchi.' },
      { q: 'Le auto elettriche entrano gratis nella ZTL di Roma?', a: `Non più. Con la deliberazione della Giunta Capitolina n. 63 del 27 febbraio 2026, dal 1° luglio 2026 anche le auto esclusivamente elettriche o a idrogeno devono avere un permesso per entrare e circolare nelle ZTL. Il permesso è annuale e costa meno di quello per le auto a benzina o diesel; per alcune categorie è gratuito.` },
      { q: 'In agosto la ZTL di Roma è aperta?', a: 'Solo in parte. Roma Servizi per la Mobilità scrive che in agosto la ZTL notturna del Centro Storico e quella di San Lorenzo non sono attive. La ZTL Centro Storico diurna, il Tridente, Trastevere e Testaccio non hanno una sospensione estiva indicata nella pagina, quindi seguono i loro orari normali anche in agosto.' },
    ],
    body: (h) => `<h2>Orari della ZTL Roma zona per zona</h2>
${tabellaZone(h, 'roma', ['centro-diurna', 'centro-notturna', 'tridente', 'trastevere-diurna', 'trastevere-notturna', 'san-lorenzo', 'testaccio'])}
<h2>Chi può entrare senza multa</h2>
<p>Possono entrare i titolari di un permesso per quella ZTL, esposto sul parabrezza o sul lunotto, le persone con disabilità titolari del contrassegno CUDE con il titolare a bordo, i taxi e le auto a noleggio con conducente, e le categorie previste dalla legge. Le regole e gli importi dei permessi sono sulla pagina ${h.src('romaPermessi', 'dei permessi ZTL')}; la pagina ${h.a('permessi', 'permessi e deroghe')} confronta Roma con le altre città.</p>
<h2>La Fascia Verde non è una ZTL oraria</h2>
<p>La ${h.a('fascia-verde', 'Fascia Verde')} è un perimetro molto più ampio del centro, che si verifica indirizzo per indirizzo sulla mappa di Roma Servizi per la Mobilità, e non chiude la strada a tutti: vieta, dal lunedì al sabato a ogni ora, i veicoli più inquinanti. Un’auto Euro 6 entra liberamente nella Fascia Verde ma non nel Centro Storico durante la fascia diurna. Per il venerdì sera usa la pagina sulle ${h.a('notturne', 'ZTL notturne')}, per la multa il ${h.a('multa', 'calcolo della multa ZTL')}.</p>`,
  },
  en: {
    slug: 'rome-ztl',
    nav: 'Rome',
    card: 'Historic Centre, Tridente, Trastevere, San Lorenzo, Testaccio: day and night hours and status now.',
    title: 'Rome ZTL 2026: hours, night ZTL and gates active now',
    description: 'Rome ZTL: Historic Centre 6:30–18:00 Monday to Friday, Tridente until 19:00, Trastevere and San Lorenzo night zones. See whether the gate is active right now.',
    h1: 'Rome ZTL: hours and gates active now',
    intro: 'The Rome ZTL has seven zones with different hours. The daytime Historic Centre is preset: change zone, day and time to see whether the gate is active.',
    resume: (h) => `Rome has the most complex set of limited-traffic zones in Italy: the daytime Historic Centre ZTL, closed Monday to Friday from 6:30 to 18:00 and on Saturday from 14:00 to 18:00; the Tridente, the area between Piazza del Popolo and Piazza di Spagna, closed Monday to Friday from 6:30 to 19:00 and on Saturday from 10:00 to 19:00, motorbikes and mopeds without a permit included; Trastevere, closed in the morning from Monday to Saturday between 6:30 and 10:00; and four night ZTLs that switch on on Friday and Saturday evenings. The Historic Centre and Testaccio night zones close from 23:00 to 3:00; Trastevere and San Lorenzo from 21:30 to 3:00, and from May to October also on Wednesday and Thursday. The daytime zones and the Centre and Testaccio night zones stop on public holidays; the Trastevere and San Lorenzo night zones do not. In August the Historic Centre and San Lorenzo night zones are switched off. ${fonteFrase(h, 'roma')}`,
    faqs: (h) => [
      { q: 'Is the Rome ZTL active on Sundays?', a: 'The daytime zones are not: the Historic Centre, the Tridente and daytime Trastevere have no hours on Sunday. The night ZTLs, however, start on Friday and Saturday evening and end at 3 a.m., so on the night between Saturday and Sunday the gate stays on until 3:00 on Sunday. The Trastevere and San Lorenzo night zones stay active even when the day is a public holiday.' },
      { q: 'Can I ride a motorbike into the Rome ZTL?', a: 'Yes, in the Historic Centre, Trastevere, San Lorenzo and Testaccio, motorbikes and mopeds may enter at any time and park in the two-wheeler bays. The exception is the Tridente (A1): there, motorbikes and mopeds also need a permit for that zone. The Fascia Verde ban on the oldest motorbikes still applies.' },
      { q: 'Do electric cars enter the Rome ZTL for free?', a: `Not any more. Under city council resolution 63 of 27 February 2026, from 1 July 2026 fully electric and hydrogen cars also need a permit to enter and drive in the ZTLs. The permit is annual and cheaper than the one for petrol or diesel cars; for some categories it is free.` },
      { q: 'Is the Rome ZTL open in August?', a: 'Only partly. Roma Servizi per la Mobilità states that in August the Historic Centre night ZTL and the San Lorenzo ZTL are not active. The daytime Historic Centre, the Tridente, Trastevere and Testaccio have no summer suspension on that page, so they keep their normal hours in August.' },
    ],
    body: (h) => `<h2>Rome ZTL hours, zone by zone</h2>
${tabellaZone(h, 'roma', ['centro-diurna', 'centro-notturna', 'tridente', 'trastevere-diurna', 'trastevere-notturna', 'san-lorenzo', 'testaccio'])}
<h2>Who may enter without a fine</h2>
<p>Holders of a permit for that ZTL, displayed on the windscreen or rear window, may enter, as may people with a disability holding the CUDE badge with the holder on board, taxis and chauffeur-driven hire cars, and the categories set by law. Permit rules and prices are on the ${h.src('romaPermessi', 'ZTL permits page')}; our ${h.a('permessi', 'permits and exemptions')} page compares Rome with other cities.</p>
<h2>The Fascia Verde is not a timed ZTL</h2>
<p>The ${h.a('fascia-verde', 'Fascia Verde')} is a perimeter much wider than the centre, which you can check address by address on Roma Servizi per la Mobilità’s map, and it does not close the road to everyone: it bans the most polluting vehicles from Monday to Saturday at all hours. A Euro 6 car drives freely in the Fascia Verde but not into the Historic Centre during the daytime period. For Friday night use the ${h.a('notturne', 'night ZTL')} page, for the fine the ${h.a('multa', 'ZTL fine calculator')}.</p>`,
  },
});
