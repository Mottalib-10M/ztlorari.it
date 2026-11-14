/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://ztlorari.it";
export const SITE_NAMES: Record<string, string> = {"it": "ZTL Orari", "en": "ZTL Orari"};
// Partie du nom affichée en couleur dans l'en-tête (RECETTE §10.3), « » pour aucune.
export const BRAND_ACCENT = "Orari";
export const LANG_TAGS: Record<string, string> = {"it": "it-IT", "en": "en-IT"};
export const OG_LOCALES: Record<string, string> = {"it": "it_IT", "en": "en_GB"};
export const LOCALE_TAG = 'it-IT';
export const CURRENCY = 'EUR';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-11-13';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"it": "Editore indipendente di una guida alle zone a traffico limitato italiane: orari per città letti nelle ordinanze comunali, stato in tempo reale calcolato sul tuo telefono o computer, varchi, permessi e sanzione", "en": "Independent publisher of a guide to Italy’s limited-traffic zones: hours per city read in municipal orders, live status worked out in your browser, camera gates, permits and the fine"};
export const AUTHOR_DESC: Record<string, string> = {"it": "Radif Partners legge per ogni città le ordinanze e le pagine ufficiali del comune o della sua società della mobilità, trascrive gli orari di ciascuna ZTL con la data dell’atto e li incrocia nel browser con l’ora, il giorno della settimana, le festività nazionali e le sospensioni stagionali per dire se la zona è attiva adesso e quando riapre. Gli open data di Milano, Bologna e Torino (licenza CC BY) forniscono perimetri e varchi. Non siamo un comune, una polizia locale né un servizio di permessi, non vendiamo nulla e non chiediamo dati di contatto.", "en": "Radif Partners reads, for each city, the orders and official pages of the comune or its mobility company, transcribes the hours of every limited-traffic zone with the date of the act, and combines them in your browser with the time, the weekday, Italian public holidays and seasonal suspensions to say whether the zone is active right now and when it reopens. Open data from Milan, Bologna and Turin (CC BY licence) provide perimeters and camera gates. We are not a comune, a municipal police force or a permit service, we sell nothing and ask for no contact details."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"it": ["Zone a traffico limitato italiane: orari, giorni e sospensioni per città", "Varchi elettronici e rilevamento degli accessi", "Permessi, deroghe e accessi temporanei in ZTL", "Sanzione per accesso non autorizzato in ZTL (art. 7 Codice della Strada)", "Area B e Area C di Milano, Fascia Verde di Roma"], "en": ["Italian limited-traffic zones: hours, days and suspensions by city", "Camera gates and access detection", "Permits, exemptions and temporary access in a ZTL", "The fine for unauthorised ZTL access (article 7 of the Italian Highway Code)", "Milan’s Area B and Area C, Rome’s Fascia Verde"]};
export const CONTACT_EMAIL = "contatti@ztlorari.it";
export const THEME_COLOR = '#9B1B30';
export const LOGO_SYMBOL = 'ZTL';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau ; Clarity chargé en mode sans cookie (consentv2 denied) ; GA4 avec cookies si GA4_ID.
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
/** Propriété Google Analytics 4 (décision de l'éditeur du 2026-10-17, RECETTE §15.6) : GA4 normal,
 *  avec cookies _ga / _ga_<ID> (390 jours), sans bandeau, publicité refusée. Créée par
 *  `seo-platform/scripts/create-ga4.ts accounts/372759688` (RECETTE §15.3, étape 15), puis
 *  pages légales régénérées : `python3 scripts/gen-legal-pages.py .`. Vide = pas de GA4. */
export const GA4_ID = 'G-0SPS3MBBK4';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = 'zdgfinqfq2';
export const INDEXNOW_KEY = 'd94d3afdd755afe61a40b35cb93ea7ac';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',            // raison sociale ou nom commercial exploité
  legalForm: '',  // vide : publication à titre personnel, pas de société
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "Partita IVA / TVA",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city'];

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
