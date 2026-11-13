/**
 * Libellés des composants communs de la trame, par langue (testeurs naïfs du 2026-11-08,
 * RECETTE §15.8). Ils ne dépendent pas de `i18n/ui.ts` du site : un composant de la trame
 * recopié dans un site existant parle aussitôt la langue de la page. Langue inconnue → anglais.
 *
 * - `exemple` : mention posée sur le résultat d'un calculateur tant que le lecteur n'a modifié
 *   aucun champ. Sans elle, trois testeurs sur trois ont lu le résultat pré-rempli comme leur
 *   verdict (« je suis éligible ») alors qu'il venait des valeurs d'exemple (financecertcost.com).
 * - `exempleAide` : la suite de la mention, qui dit quoi faire.
 * - `faqAide` : aide posée au-dessus des questions repliées (« Touchez une question pour voir la réponse ») :
 *   plusieurs testeurs ne voyaient pas que les questions s'ouvraient (goldbycarat.co.uk, dumpfeesbystate.com).
 * - `plusDeReglages`, `actuellement` : repli des champs facultatifs d'un calculateur ; son titre montre la
 *   valeur actuelle de chaque champ caché, car elle change le résultat (calculobeca.com : « d'où sort ce seuil 2 ? »).
 *   Depuis le 2026-11-09 : « Ce que nous avons supposé », une ligne « libellé : valeur » par champ (« Now: Age 40 »
 *   restait en anglais sur des sites espagnols et collait le libellé à la valeur).
 * - `lireTout` : lien du résumé replié (Clamp.astro). « Read more » laissait croire qu'il ouvrait
 *   une autre page, « Read the rest of this summary » qu'il existait un résumé ailleurs
 *   (dumpfeesbystate.com, goldbycarat.co.uk).
 */
export interface LibellesTrame {
  exemple: string; exempleAide: string; lireTout: string; faqAide: string; plusDeReglages: string; actuellement: string;
  /** Champs fixés par la page (`locked` de MiniSim) : titre de la ligne qui les nomme. */
  fixeParLaPage: string;
  /** Titre du pied de page replié sur téléphone (BaseLayout, < 768 px). */
  piedDePage: string;
}

// 2026-11-09 (testeurs naïfs de 11 sites) : « Example, not your result yet » faisait douter du chiffre ;
// la mention dit maintenant que ce sont des chiffres courants, et une spec peut dire ce que l'exemple suppose
// (`exemple` de MiniSpec). « Now: » devient « We assumed: » (ce qu'on a supposé), une ligne par champ.
export const LIBELLES_TRAME: Record<string, LibellesTrame> = {
  en: { exemple: 'Example with typical figures', exempleAide: 'change any figure to see your own result', lireTout: 'Show the whole paragraph', faqAide: 'Tap a question to see the answer.', plusDeReglages: 'More about your case (optional, already filled in)', actuellement: 'We assumed', fixeParLaPage: 'Set by this page', piedDePage: 'About this site, legal notices and all pages' },
  fr: { exemple: 'Exemple avec des chiffres courants', exempleAide: 'modifiez un chiffre pour voir votre résultat', lireTout: 'Lire tout le paragraphe', faqAide: 'Touchez une question pour voir la réponse.', plusDeReglages: 'Plus de détails sur votre cas (facultatif, déjà remplis)', actuellement: 'Ce que nous avons supposé', fixeParLaPage: 'Fixé par cette page', piedDePage: 'À propos, mentions légales et toutes les pages' },
  es: { exemple: 'Ejemplo con cifras habituales', exempleAide: 'cambie cualquier cifra para ver su resultado', lireTout: 'Leer todo el párrafo', faqAide: 'Toque una pregunta para ver la respuesta.', plusDeReglages: 'Más datos de su caso (opcional, ya rellenos)', actuellement: 'Lo que hemos supuesto', fixeParLaPage: 'Fijado por esta página', piedDePage: 'Sobre este sitio, aviso legal y todas las páginas' },
  de: { exemple: 'Beispiel mit üblichen Zahlen', exempleAide: 'ändern Sie eine Zahl, um Ihr Ergebnis zu sehen', lireTout: 'Ganzen Absatz lesen', faqAide: 'Tippen Sie auf eine Frage, um die Antwort zu sehen.', plusDeReglages: 'Mehr zu Ihrem Fall (freiwillig, schon ausgefüllt)', actuellement: 'Angenommen haben wir', fixeParLaPage: 'Auf dieser Seite festgelegt', piedDePage: 'Über diese Website, Impressum und alle Seiten' },
  it: { exemple: 'Esempio con cifre tipiche', exempleAide: 'cambi una cifra per vedere il suo risultato', lireTout: 'Leggi tutto il paragrafo', faqAide: 'Tocchi una domanda per vedere la risposta.', plusDeReglages: 'Altri dati del suo caso (facoltativi, già compilati)', actuellement: 'Cosa abbiamo ipotizzato', fixeParLaPage: 'Fissato da questa pagina', piedDePage: 'Chi siamo, note legali e tutte le pagine' },
  pt: { exemple: 'Exemplo com valores habituais', exempleAide: 'altere qualquer valor para ver o seu resultado', lireTout: 'Ler o parágrafo inteiro', faqAide: 'Toque numa pergunta para ver a resposta.', plusDeReglages: 'Mais dados do seu caso (opcional, já preenchidos)', actuellement: 'O que supusemos', fixeParLaPage: 'Definido por esta página', piedDePage: 'Sobre o site, aviso legal e todas as páginas' },
  nl: { exemple: 'Voorbeeld met gangbare bedragen', exempleAide: 'wijzig een getal om uw eigen resultaat te zien', lireTout: 'Hele alinea lezen', faqAide: 'Tik op een vraag om het antwoord te zien.', plusDeReglages: 'Meer over uw situatie (optioneel, al ingevuld)', actuellement: 'Waar we van uitgingen', fixeParLaPage: 'Vastgelegd door deze pagina', piedDePage: 'Over deze site, juridische informatie en alle pagina’s' },
  pl: { exemple: 'Przykład dla typowych liczb', exempleAide: 'zmień dowolną liczbę, aby zobaczyć swój wynik', lireTout: 'Pokaż cały akapit', faqAide: 'Dotknij pytania, aby zobaczyć odpowiedź.', plusDeReglages: 'Więcej o Twojej sytuacji (opcjonalnie, już wypełnione)', actuellement: 'Co przyjęliśmy', fixeParLaPage: 'Ustalone na tej stronie', piedDePage: 'O serwisie, informacje prawne i wszystkie strony' },
  sv: { exemple: 'Exempel med vanliga siffror', exempleAide: 'ändra en siffra för att se ditt eget resultat', lireTout: 'Visa hela stycket', faqAide: 'Tryck på en fråga för att se svaret.', plusDeReglages: 'Mer om din situation (frivilligt, redan ifyllt)', actuellement: 'Det här antog vi', fixeParLaPage: 'Bestämt av den här sidan', piedDePage: 'Om webbplatsen, juridisk information och alla sidor' },
  da: { exemple: 'Eksempel med almindelige tal', exempleAide: 'ændr et tal for at se dit eget resultat', lireTout: 'Vis hele afsnittet', faqAide: 'Tryk på et spørgsmål for at se svaret.', plusDeReglages: 'Mere om din situation (valgfrit, allerede udfyldt)', actuellement: 'Det har vi antaget', fixeParLaPage: 'Fastsat af denne side', piedDePage: 'Om siden, juridiske oplysninger og alle sider' },
  nb: { exemple: 'Eksempel med vanlige tall', exempleAide: 'endre et tall for å se ditt eget resultat', lireTout: 'Vis hele avsnittet', faqAide: 'Trykk på et spørsmål for å se svaret.', plusDeReglages: 'Mer om din situasjon (valgfritt, allerede fylt ut)', actuellement: 'Dette har vi antatt', fixeParLaPage: 'Fastsatt av denne siden', piedDePage: 'Om nettstedet, juridisk informasjon og alle sider' },
  fi: { exemple: 'Esimerkki tavallisilla luvuilla', exempleAide: 'muuta mitä tahansa lukua nähdäksesi oman tuloksesi', lireTout: 'Näytä koko kappale', faqAide: 'Napauta kysymystä nähdäksesi vastauksen.', plusDeReglages: 'Lisää tilanteestasi (valinnainen, valmiiksi täytetty)', actuellement: 'Oletimme', fixeParLaPage: 'Tämän sivun asettama', piedDePage: 'Tietoa sivustosta, oikeudelliset tiedot ja kaikki sivut' },
  tr: { exemple: 'Yaygın rakamlarla örnek', exempleAide: 'kendi sonucunuzu görmek için herhangi bir rakamı değiştirin', lireTout: 'Paragrafın tamamını göster', faqAide: 'Cevabı görmek için bir soruya dokunun.', plusDeReglages: 'Durumunuz hakkında daha fazlası (isteğe bağlı, dolduruldu)', actuellement: 'Varsaydıklarımız', fixeParLaPage: 'Bu sayfada sabit', piedDePage: 'Site hakkında, yasal bilgiler ve tüm sayfalar' },
  id: { exemple: 'Contoh dengan angka umum', exempleAide: 'ubah angka mana pun untuk melihat hasil Anda', lireTout: 'Tampilkan seluruh paragraf', faqAide: 'Ketuk pertanyaan untuk melihat jawabannya.', plusDeReglages: 'Detail lain tentang Anda (opsional, sudah terisi)', actuellement: 'Yang kami asumsikan', fixeParLaPage: 'Ditetapkan oleh halaman ini', piedDePage: 'Tentang situs, informasi hukum, dan semua halaman' },
  el: { exemple: 'Παράδειγμα με συνήθη ποσά', exempleAide: 'αλλάξτε οποιονδήποτε αριθμό για να δείτε το δικό σας αποτέλεσμα', lireTout: 'Εμφάνιση ολόκληρης της παραγράφου', faqAide: 'Πατήστε μια ερώτηση για να δείτε την απάντηση.', plusDeReglages: 'Περισσότερα για την περίπτωσή σας (προαιρετικά, ήδη συμπληρωμένα)', actuellement: 'Τι υποθέσαμε', fixeParLaPage: 'Ορίζεται από αυτή τη σελίδα', piedDePage: 'Σχετικά, νομικές πληροφορίες και όλες οι σελίδες' },
  zh: { exemple: '常见数字示例', exempleAide: '修改任一数字即可看到您自己的结果', lireTout: '显示整段', faqAide: '点击问题即可查看答案。', plusDeReglages: '关于您情况的更多信息（可选，已预填）', actuellement: '我们的假设', fixeParLaPage: '本页已设定', piedDePage: '关于本站、法律信息和全部页面' },
  ja: { exemple: '一般的な数値での例', exempleAide: 'どの数字を変えてもご自身の結果になります', lireTout: '段落をすべて表示', faqAide: '質問をタップすると答えが表示されます。', plusDeReglages: 'ご自身の状況の詳細（任意・入力済み）', actuellement: '仮定した値', fixeParLaPage: 'このページで固定', piedDePage: 'このサイトについて・法的情報・全ページ' },
  ar: { exemple: 'مثال بأرقام شائعة', exempleAide: 'غيّر أي رقم لترى نتيجتك', lireTout: 'عرض الفقرة كاملة', faqAide: 'المس سؤالاً لترى الإجابة.', plusDeReglages: 'تفاصيل أخرى عن حالتك (اختيارية، معبأة مسبقًا)', actuellement: 'ما افترضناه', fixeParLaPage: 'محدد في هذه الصفحة', piedDePage: 'عن الموقع والمعلومات القانونية وجميع الصفحات' },
};
// Variantes de code (« no » pour le norvégien, « fr-BE », « pt_BR ») ramenées à la langue.
const ALIAS: Record<string, string> = { no: 'nb', nn: 'nb' };

export function libellesTrame(lang?: string): LibellesTrame {
  const base = String(lang ?? 'en').toLowerCase().split(/[-_]/)[0];
  return LIBELLES_TRAME[ALIAS[base] ?? base] ?? LIBELLES_TRAME.en;
}

/** Vrai tant qu'aucun champ n'a été modifié par le lecteur : le résultat montré est l'exemple. */
export function resultatExemple(touched: Record<string, boolean> | undefined): boolean {
  return !touched || !Object.values(touched).some(Boolean);
}

/** Deux-points de la langue : espace insécable avant en français, deux-points pleine chasse en chinois et japonais. */
export function deuxPoints(lang?: string): string {
  const b = String(lang ?? 'en').toLowerCase().split(/[-_]/)[0];
  return b === 'fr' ? '\u00a0:' : b === 'zh' || b === 'ja' ? '：' : ':';
}

/** Ligne « Ce que nous avons supposé : … » d'un repli, en texte (lecteur d'écran, tests, sites qui l'affichent
 *  en une ligne) : chaque champ est « libellé : valeur », séparés par « · ». `titre` remplace le libellé de la
 *  langue (libellés propres au site). À l'écran, MiniSim affiche plutôt une ligne par champ (`ListeSupposee`). */
export function resumeRepli(lang: string | undefined, champs: Array<{ label: string; valeur: string }>, titre?: string): string {
  const dp = deuxPoints(lang);
  return `${titre ?? libellesTrame(lang).actuellement}${dp} ${champs.map((c) => `${c.label}${dp} ${c.valeur}`).join(' · ')}`;
}

/** Ce que suppose l'exemple, dit par la spec (`exemple`, texte ou fonction des valeurs) ou par la page. */
export function exempleSuppose(exemple: string | ((v: Record<string, number>) => string) | undefined, v: Record<string, number>): string | undefined {
  const t = typeof exemple === 'function' ? exemple(v) : exemple;
  return t && t.trim() ? t.trim() : undefined;
}
