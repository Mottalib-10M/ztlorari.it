import { defineGuide } from '../../lib/guide-types';
import { tabellaZone } from '../../lib/citta';

/** Bologna : ZTL 7–20 tutti i giorni, zona T e pedonali 24 ore su 24 (open data CC BY 4.0, descrizione del 26/08/2021). */
export default defineGuide({
  id: 'bologna',
  group: 'citta',
  order: 6,
  tool: 'stato',
  citta: 'bologna',
  zona: 'ztl',
  related: ['firenze', 'varchi', 'multa', 'festivi', 'permessi', 'torino'],
  sources: ['bologna', 'cds7', 'cds198'],
  it: {
    slug: 'ztl-bologna',
    nav: 'Bologna',
    card: 'Sirio controlla il centro tutti i giorni dalle 7 alle 20; zona T e aree pedonali chiuse 24 ore su 24.',
    title: 'ZTL Bologna 2026: orari Sirio, zona T e varchi attivi',
    description: 'ZTL Bologna: i varchi Sirio controllano il centro tutti i giorni dalle 7 alle 20, festivi compresi; zona T e aree pedonali 24 ore su 24. Vedi lo stato adesso.',
    h1: 'ZTL Bologna: orari Sirio e zona T',
    intro: 'La ZTL di Bologna è attiva ogni giorno, anche la domenica. Preimpostata la ZTL del centro: scegli l’ora per sapere se Sirio è acceso.',
    resume: (h) => `La zona a traffico limitato di Bologna è una vasta area del centro storico in cui la circolazione dei veicoli a motore è limitata. Secondo la descrizione del dataset pubblicato negli open data del Comune di Bologna, gli accessi sono controllati dal sistema di videosorveglianza Sirio, il «vigile elettronico», tutti i giorni dalle 7 alle 20: anche il sabato, la domenica e nei festivi, perché la fonte dice «tutti i giorni» senza eccezioni. Dentro la ZTL ci sono zone chiuse 24 ore su 24: le zone pedonali e la zona T. Dal 1° gennaio 2020 è in vigore la ZTL ambientale, che ha cambiato i criteri di accesso al centro storico e le regole della sosta. Il dataset dei perimetri conta 14 aree con l’ordinanza 4000/343434, ma la sua descrizione è del 26 agosto 2021: è la fonte ufficiale aperta più recente che abbiamo trovato con gli orari scritti, e per questo ne mostriamo sempre la data. Fuori dalla fascia 7–20 si entra con qualunque veicolo, salvo nella zona T e nelle aree pedonali.`,
    faqs: (h) => [
      { q: 'La ZTL di Bologna è attiva la domenica?', a: 'Sì. La descrizione del Comune dice che Sirio controlla gli accessi tutti i giorni dalle 7 alle 20, quindi anche la domenica e i festivi. È una differenza importante rispetto a Roma e Milano, dove le zone diurne si fermano nei festivi. Per questo lo strumento in alto dà la ZTL attiva anche alle 10 del giorno di Natale.' },
      { q: 'Che cos’è la zona T di Bologna?', a: 'È una zona dentro la ZTL in cui il divieto vale 24 ore su 24, come nelle aree pedonali. Il nome viene dalla forma a T delle vie che la compongono. Qui non conta l’ora: senza autorizzazione non si entra mai.' },
      { q: 'Quanti permessi ZTL ci sono a Bologna?', a: `Il dataset «Permessi per ZTL» del Comune, aggiornato il 31 dicembre 2025, elenca ${h.num(28472)} permessi rilasciati negli anni, di cui ${h.num(9606)} validi al 31 dicembre 2025. Il numero dice quanto è regolato il centro, non se il tuo veicolo ha diritto a un permesso: per questo bisogna rivolgersi al Comune.` },
    ],
    body: (h) => `<h2>Orari della ZTL Bologna</h2>
${tabellaZone(h, 'bologna')}
<h2>Sirio, il vigile elettronico</h2>
<p>Sirio è il nome del sistema di telecamere che a Bologna legge le targhe ai varchi della ZTL. Funziona come gli altri ${h.a('varchi', 'varchi elettronici')}: confronta la targa con l’elenco dei veicoli autorizzati e, se non la trova durante la fascia attiva, la polizia locale prepara il verbale. Passaggi ripetuti nello stesso giorno nella stessa ZTL valgono una sola sanzione, secondo l’articolo 198 del Codice della Strada.</p>
<h2>Una fonte da confermare al varco</h2>
<p>Gli orari vengono dalla descrizione del dataset ufficiale, che il Comune pubblica con licenza CC BY 4.0 ma che non è stata aggiornata dal 2021. Le pagine del sito del Comune sulla ZTL non si leggono senza JavaScript e non abbiamo potuto confrontarle. Prima di entrare guarda il cartello al varco; se noti un orario diverso, ${h.a('contact', 'scrivici')}. Per i giorni di festa la pagina sui ${h.a('festivi', 'festivi')} mostra quali città chiudono anche a Natale.</p>`,
  },
  en: {
    slug: 'bologna-ztl',
    nav: 'Bologna',
    card: 'Sirio watches the centre every day from 7:00 to 20:00; the T zone and pedestrian areas are closed 24 hours a day.',
    title: 'Bologna ZTL 2026: Sirio hours, the T zone and gates now',
    description: 'Bologna ZTL: Sirio camera gates watch the centre every day from 7:00 to 20:00, holidays included; the T zone and pedestrian areas 24 hours a day. Status now.',
    h1: 'Bologna ZTL: Sirio hours and the T zone',
    intro: 'The Bologna ZTL is active every day, Sunday included. The central ZTL is preset: pick the time to see whether Sirio is on.',
    resume: (h) => `Bologna’s limited-traffic zone is a wide area of the historic centre where motor traffic is restricted. According to the description of the dataset published in the City of Bologna open data, entries are controlled by the Sirio camera system, the “electronic warden”, every day from 7:00 to 20:00: on Saturday, Sunday and public holidays too, because the source says “every day” with no exceptions. Inside the ZTL some zones are closed 24 hours a day: the pedestrian zones and the T zone. Since 1 January 2020 the environmental ZTL has been in force, changing the criteria for access to the historic centre and the parking rules. The perimeter dataset counts 14 areas under order 4000/343434, but its description dates from 26 August 2021: it is the most recent open official source we found with the hours written out, and that is why we always show its date. Outside the 7–20 period any vehicle may enter, except in the T zone and the pedestrian areas.`,
    faqs: (h) => [
      { q: 'Is the Bologna ZTL active on Sunday?', a: 'Yes. The city’s description says Sirio controls entries every day from 7:00 to 20:00, so on Sundays and public holidays too. That is a big difference from Rome and Milan, where the daytime zones stop on holidays. That is why the tool at the top shows the ZTL as active at 10:00 on Christmas Day too.' },
      { q: 'What is Bologna’s T zone?', a: 'It is a zone inside the ZTL where the ban applies 24 hours a day, as in the pedestrian areas. The name comes from the T shape of the streets it covers. Here the time does not matter: without authorisation you never enter.' },
      { q: 'How many ZTL permits are there in Bologna?', a: `The city’s “Permessi per ZTL” dataset, updated on 31 December 2025, lists ${h.num(28472)} permits issued over the years, ${h.num(9606)} of them valid on 31 December 2025. The figure shows how regulated the centre is, not whether your vehicle is entitled to a permit: for that you have to ask the city.` },
    ],
    body: (h) => `<h2>Bologna ZTL hours</h2>
${tabellaZone(h, 'bologna')}
<h2>Sirio, the electronic warden</h2>
<p>Sirio is the name of the camera system that reads plates at Bologna’s ZTL gates. It works like other ${h.a('varchi', 'camera gates')}: it compares the plate with the list of authorised vehicles and, if it does not find it during the active period, the municipal police draw up a fine. Repeated entries on the same day in the same ZTL count as a single fine, under article 198 of the Highway Code.</p>
<h2>A source to confirm at the gate</h2>
<p>The hours come from the description of the official dataset, which the city publishes under CC BY 4.0 but which has not been updated since 2021. The city website’s ZTL pages cannot be read without JavaScript and we could not compare them. Before entering, look at the sign at the gate; if you see different hours, ${h.a('contact', 'write to us')}. For holidays, the ${h.a('festivi', 'public holidays')} page shows which cities stay closed even at Christmas.</p>`,
  },
});
