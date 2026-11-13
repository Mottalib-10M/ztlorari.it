import type { Locale } from './routes';
const it = {
  updatedOn: 'Aggiornato il', editorialPolicy: 'Politica editoriale', contactLabel: 'Contatti', reviewedBy: 'Verificato da',
  skipToContent: 'Vai al contenuto', mainNav: 'Navigazione principale', breadcrumbLabel: 'Percorso', breadcrumbHome: 'Home', menuOpen: 'Apri il menu',
  faqTitle: 'Domande frequenti', relatedCalculators: 'Pagine e strumenti collegati', sourcesTitle: 'Fonti', writtenBy: 'Scritto da',
  asOf: 'Orari letti nel', lastUpdated: 'ultima lettura il', footerValidated: 'Fonti: ordinanze e pagine ufficiali dei comuni, Codice della Strada su Normattiva', footerBrowser: 'Calcola nel tuo browser · nessuna registrazione, nessuna e-mail · gratis',
  footerDisclaimer: 'Sito indipendente pubblicato da Radif Partners, senza alcun legame con i comuni, le polizie locali, le società della mobilità o il Ministero. Gli orari sono trascritti dalle pagine ufficiali e dalle ordinanze citate, con la loro data; fanno fede l’ordinanza in vigore e la segnaletica al varco. Lo stato «attiva» o «non attiva» è indicativo e non vale come autorizzazione; il calcolo della multa non sostituisce il parere di un professionista.', footerPopular: '', notFound: 'Questa pagina non esiste.',
  readMore: 'Continua a leggere', independent: 'Sito indipendente, non è un servizio del comune: fanno fede l’ordinanza e la segnaletica al varco.',
  licenze: 'Dati: Comune di Milano, «Aree pedonali e ZTL» (licenza CC BY) e Comune di Bologna, «Zona a traffico limitato» (licenza ', licenzeFine: '), adattati; calcoli e trascrizioni Radif Partners.',
};
const en: typeof it = {
  updatedOn: 'Updated on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Checked by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Frequently asked questions', relatedCalculators: 'Related pages and tools', sourcesTitle: 'Sources', writtenBy: 'Written by',
  asOf: 'Hours read in', lastUpdated: 'last read on', footerValidated: 'Sources: municipal orders and official city pages, Italian Highway Code on Normattiva', footerBrowser: 'Works in your browser · no sign-up, no email · free',
  footerDisclaimer: 'Independent site published by Radif Partners, with no link to any comune, municipal police, mobility company or ministry. Hours are transcribed from the official pages and orders cited, with their dates; the order in force and the signs at the gate are what count. The “active” or “not active” status is for guidance only and is not a permit; the fine calculation is not legal advice.', footerPopular: '', notFound: 'This page does not exist.',
  readMore: 'Read more', independent: 'Independent site, not a city service: the municipal order and the signs at the gate are what count.',
  licenze: 'Data: City of Milan, “Aree pedonali e ZTL” (CC BY licence) and City of Bologna, “Zona a traffico limitato” (licence ', licenzeFine: '), adapted; calculations and transcriptions by Radif Partners.',
};
export function t(lang: Locale) { return lang === 'en' ? en : it; }
