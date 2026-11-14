import { defineGuide } from '../../lib/guide-types';

/** ZTL attive oggi : panorama di tutte le zone del file ztl.json a una data e un’ora. */
export default defineGuide({
  id: 'attive-oggi',
  group: 'regole',
  order: 14,
  tool: 'panorama',
  related: ['notturne', 'festivi', 'roma', 'milano', 'varchi', 'multa'],
  sources: ['roma', 'milanoC', 'firenze', 'bologna', 'torino', 'palermo', 'pavia'],
  it: {
    slug: 'ztl-attive-oggi',
    nav: 'ZTL attive oggi',
    card: 'Tutte le zone di Roma, Milano, Firenze, Bologna, Torino, Palermo e Pavia: quali sono attive adesso.',
    title: 'ZTL attive oggi: tutte le zone accese adesso, per città',
    description: 'ZTL attive oggi: l’elenco di tutte le zone di Roma, Milano, Firenze, Bologna, Torino, Palermo e Pavia con lo stato a quest’ora. Cambia data e ora se parti dopo.',
    h1: 'ZTL attive oggi in Italia, città per città',
    intro: 'Le ZTL attive oggi cambiano da un’ora all’altra. L’elenco mostra tutte le zone del sito con lo stato all’ora attuale; cambia data e ora per pianificare.',
    resume: (h) => {
      const c = h.M.CITTA.length, z = h.M.CITTA.reduce((n, x) => n + x.zone.length, 0);
      return `Questa pagina mette insieme, in un solo elenco, le ${z} zone a traffico limitato delle ${c} città di cui abbiamo trovato orari ufficiali leggibili e datati: Roma, Milano, Firenze, Bologna, Torino, Palermo e Pavia. Per ogni zona il calcolo applica le fasce orarie della fonte comunale, i mesi in cui valgono, le sospensioni estive annunciate e la regola sui giorni festivi, e dice se la zona è attiva, quando si spegne o quando si riaccende. All’apertura usa la data e l’ora attuali di Roma; puoi cambiarle per sapere che cosa troverai domani mattina o sabato sera. Le zone attive 24 ore su 24, come le aree pedonali di Bologna e Torino o tutta la ZTL di Pavia, risultano sempre attive. Le zone ambientali, come la Fascia Verde di Roma e Area B a Milano, sono attive solo per i veicoli vietati. Le città che non pubblicano gli orari in forma leggibile, come Napoli, Verona o Genova, non sono nell’elenco: abbiamo preferito lasciarle fuori piuttosto che indovinare.`;
    },
    faqs: () => [
      { q: 'Perché alcune città non ci sono?', a: 'Abbiamo provato una trentina di città e ne abbiamo tenute sette: quelle che pubblicano gli orari in una pagina o in un dataset ufficiale leggibile e datato. Per altre, come Napoli, Genova, Verona o Bari, non abbiamo trovato orari leggibili e completi, quindi non possiamo dire se le loro zone sono attive.' },
      { q: 'L’elenco si aggiorna da solo?', a: 'Lo stato sì: viene ricalcolato sul tuo telefono o computer con la data e l’ora che scegli. Gli orari invece sono quelli delle fonti comunali alla data di lettura indicata: se un Comune cambia gli orari, l’elenco cambia solo quando rileggiamo la fonte. Per questo ogni zona porta la data della sua fonte.' },
      { q: 'Posso vedere solo una città?', a: 'Sì: il filtro in alto riduce l’elenco a una sola città. La scelta resta nell’indirizzo della pagina, così puoi salvarla nei preferiti o mandarla a chi viaggia con te. Il filtro cambia solo l’elenco: le fasce orarie e le fonti di ogni zona restano le stesse, ciascuna con la propria data di lettura.' },
    ],
    body: (h) => `<h2>ZTL attive oggi: quante zone per città</h2>
${h.table([h.T('Città', 'City'), h.T('Zone', 'Zones'), h.T('Fonte del', 'Source dated')], h.M.CITTA.map((c) => [h.a(c.id, h.M.nomeCitta(c, h.lang)), c.zone.length, h.date(c.fonte.data)]), h.T('Fonti comunali lette il 13 novembre 2026.', 'City sources read on 13 November 2026.'), ['l', 'r', 'r'])}
<h2>Come leggere lo stato</h2>
<p>«Attiva» vuol dire che, alla data e all’ora scelte, la zona è dentro una fascia di divieto: senza permesso non si entra. «Non attiva» vuol dire che si è fuori fascia, in un festivo in cui la zona si ferma o in una sospensione annunciata. Quando la fonte non dice nulla sui festivi, la zona è considerata attiva e il risultato lo segnala.</p>
<h2>Per un’ora precisa</h2>
<p>Per una sola zona con il conto alla rovescia usa la pagina della città, per esempio ${h.a('roma', 'ZTL Roma')} o ${h.a('milano', 'ZTL Milano')}. Per la sera e la notte c’è la pagina sulle ${h.a('notturne', 'ZTL notturne')}, per Natale e le altre feste quella sui ${h.a('festivi', 'festivi')}.</p>`,
  },
  en: {
    slug: 'ztl-active-today',
    nav: 'ZTLs active today',
    card: 'Every zone in Rome, Milan, Florence, Bologna, Turin, Palermo and Pavia: which are active right now.',
    title: 'ZTLs active today in Italy: every zone on now, city by city',
    description: 'ZTLs active today: every zone in Rome, Milan, Florence, Bologna, Turin, Palermo and Pavia with its status at this time. Change the date and time to plan.',
    h1: 'ZTLs active today in Italy, city by city',
    intro: 'The ZTLs active today change from hour to hour. The list shows every zone on this site with its status at the current time; change the date and time to plan.',
    resume: (h) => {
      const c = h.M.CITTA.length, z = h.M.CITTA.reduce((n, x) => n + x.zone.length, 0);
      return `This page brings together, in a single list, the ${z} limited-traffic zones of the ${c} cities for which we found readable, dated official hours: Rome, Milan, Florence, Bologna, Turin, Palermo and Pavia. For each zone the calculation applies the time periods from the city source, the months in which they apply, announced summer suspensions and the public-holiday rule, and says whether the zone is active, when it switches off or when it comes back on. On opening it uses the current date and time in Rome; you can change them to see what you will find tomorrow morning or on Saturday night. Zones active 24 hours a day, such as the pedestrian areas of Bologna and Turin or the whole Pavia ZTL, always show as active. Environmental zones, such as Rome’s Fascia Verde and Milan’s Area B, are active only for banned vehicles. Cities that do not publish their hours in readable form, such as Naples, Verona or Genoa, are not on the list: we preferred to leave them out rather than guess.`;
    },
    faqs: () => [
      { q: 'Why are some cities missing?', a: 'We tried about thirty cities and kept seven: those that publish their hours on an official page or dataset that is readable and dated. For others, such as Naples, Genoa, Verona or Bari, we found no readable, complete hours, so we cannot say whether their zones are active.' },
      { q: 'Does the list update itself?', a: 'The status does: it is recalculated in your browser with the date and time you pick. The hours, however, are those of the city sources as of the reading date shown: if a city changes its hours, the list only changes when we read the source again. That is why every zone carries the date of its source.' },
      { q: 'Can I see a single city?', a: 'Yes: the filter at the top narrows the list to one city. The choice stays in the page address, so you can bookmark it or send it to whoever is travelling with you. The filter only changes the list: the time periods and sources of each zone stay the same, each with its own reading date.' },
    ],
    body: (h) => `<h2>ZTLs active today in Italy: zones per city</h2>
${h.table([h.T('Città', 'City'), h.T('Zone', 'Zones'), h.T('Fonte del', 'Source dated')], h.M.CITTA.map((c) => [h.a(c.id, h.M.nomeCitta(c, h.lang)), c.zone.length, h.date(c.fonte.data)]), h.T('Fonti comunali lette il 13 novembre 2026.', 'City sources read on 13 November 2026.'), ['l', 'r', 'r'])}
<h2>How to read the status</h2>
<p>“Active” means that, at the chosen date and time, the zone is inside a ban period: without a permit you may not enter. “Not active” means you are outside the period, on a holiday when the zone stops, or in an announced suspension. When the source says nothing about holidays, the zone is treated as active and the result flags it.</p>
<h2>For a precise time</h2>
<p>For a single zone with a countdown, use the city page, for example ${h.a('roma', 'Rome ZTL')} or ${h.a('milano', 'Milan ZTL')}. For evenings and nights there is the ${h.a('notturne', 'night ZTL')} page, and for Christmas and other holidays the ${h.a('festivi', 'public holidays')} page.</p>`,
  },
});
