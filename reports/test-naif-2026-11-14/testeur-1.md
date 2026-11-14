# Test naïf du 2026-11-14, testeur 1 : ztlorari.it
**Persona :** Italien(ne) de 45 ans, salarié(e), à l'aise avec son téléphone, aucune connaissance particulière du sujet, ne lit pas les longs paragraphes. Il/elle a tapé sa question dans Google (« ZTL attiva adesso ») et a cliqué sur le résultat « ZTL attiva adesso: orari per città, varchi e multa 2026 » parce qu'il/elle a vraiment cette question.

## 1. Concept

**Après 5 secondes (01-accueil-1) :** « C'est exactement ce que j'ai cherché. » Le titre « ZTL attiva adesso? » reprend mot pour mot ma question Google, la phrase dessous explique la promesse (« la risposta dice se la ZTL è attiva adesso, fino a che ora, e quando riparte »), et le formulaire est déjà rempli : Roma, ZTL Centro Storico diurna, aujourd'hui, l'heure actuelle. En bas de l'écran je vois déjà « ZTL attiva » en très gros. Je n'ai rien à faire pour avoir une réponse. Concept compris en 5 secondes.

**Après 2 minutes :** c'est un outil qui dit, ville par ville et zone par zone, si la ZTL est allumée à une heure donnée, jusqu'à quand, et quand elle repart ; plus une page pour calculer la multa et des pages par ville/zone (Area B, Area C, Fascia Verde, permessi). Le site n'est pas la mairie (« Sito indipendente, non è un servizio del comune ») et me dit toujours de vérifier le panneau au varco.

**Clair ?** Oui, très. **Pour qui ?** Quiconque doit entrer en voiture dans un centre-ville italien (Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia), habitant ou visiteur. **Bénéfice concret :** éviter une multa de 83 à 332 € en sachant si je peux passer maintenant, et sinon à quelle heure ; et si j'ai déjà reçu une multa, savoir combien payer et avant quelle date.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour la fonction principale, avec quelques accrocs.** La réponse « ZTL attiva / Non attiva / Divieto in vigore » + « Attiva fino alle 18:00 » / « Riattiva lunedì 16 novembre 2026 alle 07:30 » est compréhensible par n'importe qui.

Où ça décroche :
- Les champs date et heure s'affichent au format américain : « 11/14/2026 » et « 05:25 PM ». Une Italienne lit « 11/14 » comme un jour 11 d'un mois 14 qui n'existe pas, et « PM » n'est pas son réflexe (elle dit 17:25). Le résultat, lui, écrit bien « 14 novembre 2026 ore 17:25 » : incohérence visible sur le même écran.
- La case résultat est rose/rouge dans TOUS les cas, que la zone soit « ZTL attiva » (01-accueil) ou « Non attiva » (03, 04, 09). Elle ne peut pas se fier à la couleur ; « Non attiva » en rouge fait peur alors que c'est la bonne nouvelle.
- Sur Area B et Fascia Verde, la réponse « Non attiva » / « Divieto in vigore » ne dit pas si MA voiture est concernée. La Fascia Verde liste bien les catégories (« auto a benzina, GPL e metano fino a Euro 2, diesel fino a Euro 3… »), mais elle ne sait pas de quelle classe Euro est sa voiture et rien ne lui dit où le trouver (la question « Come verifico se la mia auto può entrare in Area B? » est repliée).
- La page « Metodo » parle de « file di dati (`ztl.json`) », « codice del programma », « Ogni build » : du jargon d'informaticien.

## 3. Parcours écran par écran

- **01-accueil-1** — Compris. Titre = ma question, formulaire pré-rempli, réponse visible. Coince : « 11/14/2026 » et « 05:25 PM ». La petite phrase grise « fanno fede l'ordinanza e la segnaletica al varco » rassure (honnête) mais « fanno fede » est un peu administratif.
- **01-accueil-suite1** — Compris : « ZTL attiva », « Attiva fino alle 18:00 », « Fasce di questo giorno 14:00–18:00 », la source et sa date dans un encadré jaune. Très rassurant. « Orari della zona: lun–ven 6:30–18:00, sab 14:00–18:00 » : utile, je comprends pourquoi c'est actif un samedi à 17:25. Puis un gros paragraphe juridique (« articolo 7 del Codice della Strada ») : je ne le lis pas.
- **01-accueil-suite2 / suite3** — Texte long. Le titre « Come sapere se la ZTL è attiva adesso » explique ce que j'ai déjà compris. Je survole. « Leggi tutto il paragrafo » : je ne clique pas.
- **01-accueil-suite3 / suite4** — « Le città e le zone coperte » : utile, je vois les villes couvertes (Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia). Napoli, Verona, Pisa, Genova non couvertes : dit honnêtement. Si j'habite Napoli, je suis déçue mais au moins je le sais.
- **01-accueil-suite4** — « Che cosa succede se entri quando il varco è attivo » : 83 € à 332 €, 168 € à 678 € pour Area B/Fascia Verde. Ça fait peur, donc je retiens. Lien « calcolo della multa ZTL » repéré.
- **01-accueil-suite5 / suite6** — « Varchi, permessi e orari notturni » et « Le fonti » : je survole. J'apprends qu'il existe une page « ZTL attive oggi » et une page « festivi », mais je ne les retrouve pas dans le menu (02-menu).
- **01-accueil-suite7** — FAQ repliée : bonnes questions (« Quanto costa entrare in una ZTL senza permesso? », « Con un'auto a noleggio pago io la multa della ZTL? »). « Posso inserire lo strumento sul mio sito? » ne me concerne pas.
- **01-accueil-suite8 / suite9** — Liste des sources avec dates. Je remarque « Servizi alla Strada per il Comune di Firenze, «ZTL» (aggiornata il 30/10/2023) » : 2023, ça m'inquiète un peu pour Firenze. Bloc « Scritto da Radif Partners » : je ne sais pas qui c'est, mais « Editore indipendente » me va.
- **02-menu-1** — Compris. « ZTL per città » ouvert avec les villes, puis « Multe, varchi e regole » et « Metodo e fonti ». Simple. Coince : Roma, Milano, puis « Area C Milano », « Area B Milano » mélangés aux villes, et « Fascia Verde Roma » tout en bas, séparée de Roma.
- **03-it-area-b-milano-1 / suite1** — Compris : « Area B Milano vieta i veicoli più inquinanti nei giorni feriali dalle 7:30 alle 19:30 ». Résultat « Non attiva — Riattiva lunedì 16 novembre 2026 alle 07:30 ». Coince : « Motivo: fuori dalle fasce orarie » + « Fasce di questo giorno: nessuna fascia » ; j'aurais compris plus vite « sabato: Area B non è attiva ». Et toujours : est-ce que MA voiture est « più inquinante » ? Pas de réponse visible.
- **03-…-suite2 / suite3** — Tableau clair (« Giorni e orari », « Pagamento: nessuno per i veicoli ammessi », « Sempre vietati »). « Giornate libere per ogni veicolo: 5 l'anno, dal secondo anno di divieto » : je ne comprends pas « dal secondo anno di divieto ». « segnalazione dell'angolo cieco » : jargon. La section « Area B non è Area C » est très utile.
- **03-…-suite4 / suite5 / suite6** — FAQ et « Pagine e strumenti collegati » en cartes : clair. Coince : la carte Area B ailleurs dit « le 5 e le 20 giornate di deroga dal 1° ottobre 2026 », ici « dal secondo anno di divieto » : je ne sais pas laquelle croire.
- **04-it-area-c-milano-1 / suite1** — Compris : « Area C Milano: è attiva adesso? », « chiede un ticket solo nei giorni feriali dalle 7:30 alle 19:30 ». Résultat « Non attiva », reprend lundi 7:30. Le bloc tarifs (« Ticket giornaliero 7,50 €; 3,00 € per i residenti… dal 51° accesso… 22,50 € se pagato dal giorno dopo… ») est dense pour une case réponse. Je ne vois pas de bouton « dove pago il ticket ».
- **04-…-suite2 / suite3** — Tableau des tarifs clair. « Comune di Milano, tabella dei ticket in vigore dal 30 ottobre 2023 » : la date 2023 me fait douter, même si c'est sans doute la date d'entrée en vigueur. « Chi è escluso del tutto » : liste Euro 2, 3… je ne connais pas ma classe Euro.
- **04-…-suite4 → suite6** — « Area C, Area B e la sera » : utile (Navigli dès 20:00, Arco della Pace dès 22:00). FAQ (« Come si paga il ticket di Area C? ») et cartes liées : clair.
- **05-it-chi-siamo-1 → suite3** — Compris, rassurant : « Non vendiamo nulla, non prendiamo commissioni e non chiediamo dati di contatto », « Il sito è gratuito e senza registrazione ». « 7 città e 26 zone, verificate una per una ». Rien à redire, mais je ne serais jamais venue là d'elle-même.
- **06-it-fascia-verde-roma-1 / suite1** — Compris : « vieta i veicoli più inquinanti dal lunedì al sabato, giorno e notte ». Résultat « Divieto in vigore — Attiva fino alle 00:00 di domani ». Coince : « Divieto in vigore » me fait paniquer alors que la ligne dessous dit « Gli altri veicoli circolano liberamente ». Je dois lire tout le bloc pour savoir si je suis concernée. Incohérence : la case réponse dit « pagina del 28 luglio 2026 », alors que le texte juste en dessous et le tableau disent « aggiornata il 2 novembre 2026 » et « dal 1° novembre 2026 ».
- **06-…-suite2 / suite3** — Tableau « Veicolo / Vietato » clair. « dual fuel, mixed fuel », « microcar » : mots pas évidents. « Fascia Verde e ZTL del centro » : utile.
- **06-…-suite4 → suite6** — « Smog e misure temporanee » : PM10, ARPA Lazio, « dal quinto giorno di superamento » : trop technique, je saute. FAQ « Come so se il mio indirizzo è in Fascia Verde? », « Un'auto Euro 3 a benzina può entrare in Fascia Verde? » : excellentes questions mais repliées.
- **07-it-metodo-1 → suite6** — Je décroche. « `ztl.json` », « nessun orario è scritto nel codice del programma », « Ogni build controlla decine di casi » : langage de développeur. Je découvre « Bologna… Data della fonte 26 agosto 2021 » et « Firenze… 30 ottobre 2023 » : là je doute vraiment pour ces deux villes. « Il santo patrono di ogni città non è calcolato » : bon à savoir mais je ne l'aurais vu nulle part ailleurs. « Limiti » est honnête et clair (« dice se la zona è attiva, non se tu puoi entrare »).
- **08-it-multa-ztl-1 / suite1** — Compris : « Che cosa dice il verbale », « Giorni diversi con passaggi », « Data di notifica del verbale », « Residenza ». Encadré jaune « Esempio: un giorno di passaggi, verbale notificato oggi — cambi una cifra per vedere il suo risultato » : très clair. « Da pagare entro 5 giorni 58,10 € » : la réponse que je cherche. Coince : dates encore en « 11/14/2026 » ; « Giorni diversi con passaggi » est maladroit. Les échéances ne sont pas dans l'ordre : « Ricorso al prefetto entro il 13 gennaio 2027 » puis « Ricorso al giudice di pace entro il 14 dicembre 2026 » (plus tôt) ; je risque de rater le délai le plus court.
- **08-…-suite2 → suite6** — Tableau par nombre de jours : très clair. « Tre tipi di violazione » : utile (sospensione della patente !). « Che cosa il calcolo non sa » : honnête. FAQ et liens : bien.
- **09-it-permessi-ztl-1 / suite1** — Coince : je viens pour les permis, et je tombe d'abord sur le même outil « attiva / non attiva » préréglé sur « Area B a Milano » avec « Non attiva ». Je ne comprends pas le rapport avec ma question « come ottengo un permesso ».
- **09-…-suite2 / suite3** — Tableau « Permessi ZTL a confronto » : utile (Pavia 42 €/an, giornaliero 10 €, Palermo app PalerMobilità). Mais Firenze et Bologna sont absentes du tableau alors que les cartes disent « nelle sette città ». « Prima di chiedere un permesso » : bon conseil (décaler l'heure d'arrivée).
- **09-…-suite4 → suite6** — « Se il permesso c'era ma la multa arriva » : utile. FAQ pertinentes (disabili, albergo). Je ne vois pas de lien direct « richiedi il permesso sul sito del Comune » par ville, sauf dans les « Fonti » en bas.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Outil « ZTL attiva adesso? » (ville, zone, jour, heure) | Oui, dès l'écran 1 | Oui | Très | 4/5 (format de date/heure américain, couleur rouge même quand non attiva) |
| Réponse « Attiva fino alle… / Riattiva lunedì… » | Oui | Oui | Très | 5/5 |
| Encadré source + date | Oui | Oui | Rassure | 4/5 (date contradictoire sur Fascia Verde) |
| Pages par zone (Area B, Area C, Fascia Verde) | Oui (menu + liens) | Oui | Oui | 4/5 (je ne sais pas si ma voiture est concernée) |
| Calcolo della multa ZTL | Oui (liens, cartes, menu « Multe… ») | Oui | Très | 4/5 (échéances pas en ordre chronologique) |
| Tableau « Multa ZTL per numero di giorni » | Oui | Oui | Oui | 5/5 |
| Page Permessi | Oui (cartes) | Partiellement | Moyen | 3/5 (outil hors sujet en tête, villes manquantes) |
| FAQ repliées | Oui | Oui | Oui | 4/5 |
| Menu ☰ | Oui | Oui | Oui | 4/5 (pages « ZTL attive oggi » et « festivi » pas visibles au premier niveau) |
| Bouton EN | Vu | Oui | Pas pour moi | — |

## 5. Enchaînement et navigation

- Très bon départ : la page d'accueil répond à la question Google sans aucun clic.
- Fil d'Ariane « Home / … » présent partout : je sais où je suis.
- Chaque page finit par des cartes « Pagine e strumenti collegati » bien rédigées (un titre + une phrase avec des chiffres) : c'est le meilleur moyen de navigation du site, plus que le menu.
- Les pages se ressemblent toutes (outil en haut, texte, tableau, FAQ, cartes, fonti) : on s'y retrouve vite, mais sur la page Permessi ce même modèle place un outil qui n'a rien à voir avec la question.
- Pas de lien direct depuis la case réponse vers « et si j'ai déjà une multa ? » ou « comment obtenir un permis ? » ; il faut descendre loin.
- Le texte long est replié (« Leggi tutto il paragrafo ») : bien, mais les sections suivantes (« Come sapere… », « Smog e misure temporanee », « Metodo ») restent de longs blocs que je ne lis pas.

## 6. Difficultés classées

1. **Couleur de la case résultat identique pour « attiva » et « non attiva »** (01-accueil-suite1, 03-suite1, 04-suite1, 09-suite1). Vécu : « Non attiva » sur fond rose/rouge me fait croire à un danger ; je dois lire le mot pour savoir. Recommandation : vert pour « Non attiva / puoi entrare », rouge pour « ZTL attiva », orange pour « Divieto solo per alcuni veicoli » (Area B, Fascia Verde). Texte d'appoint sous le grand mot : « Puoi entrare senza permesso fino a lunedì 16 novembre alle 07:30 ».
2. **Date et heure au format américain** (tous les formulaires : « 11/14/2026 », « 05:25 PM »). Vécu : je doute de la date, et ça contraste avec « 14 novembre 2026 ore 17:25 » juste dessous. Recommandation : afficher au format italien « 14/11/2026 » et « 17:25 » (forcer la langue it du champ, ou un affichage texte à côté : « sabato 14 novembre, ore 17:25 »).
3. **« Est-ce que MA voiture est concernée ? » sans réponse immédiate** (03 Area B, 06 Fascia Verde, 04 Area C « Chi è escluso del tutto »). Vécu : « Divieto in vigore » me panique, et je ne connais pas ma classe Euro. Recommandation : une ligne dans la case réponse : « Vale solo per auto benzina fino a Euro 2 e diesel fino a Euro 3. La classe Euro è scritta sul libretto di circolazione, alla voce V.9. » ; ou un sélecteur « La tua auto: benzina/diesel + Euro ».
4. **Date de la source contradictoire sur Fascia Verde** (06-suite1 vs 06-suite2). Vécu : la case réponse dit « pagina del 28 luglio 2026 », le texte dessous « aggiornata il 2 novembre 2026 » : je ne sais plus quelle donnée est à jour. Recommandation : afficher dans la case réponse la date de la page Fascia Verde : « Orari da Roma Servizi per la Mobilità, pagina «ZTL Fascia Verde» del 2 novembre 2026 ».
5. **Échéances de la multa pas dans l'ordre** (08-suite1). Vécu : je lis « prefetto entro il 13 gennaio 2027 » avant « giudice di pace entro il 14 dicembre 2026 » et je risque de croire que j'ai jusqu'en janvier dans tous les cas. Recommandation : trier par date et annoncer : « Ricorso al giudice di pace entro il 14 dicembre 2026 (30 giorni) » puis « Ricorso al prefetto entro il 13 gennaio 2027 (60 giorni) ».
6. **Page Permessi qui commence par un outil hors sujet** (09-1, 09-suite1). Vécu : « Preimpostata Area B a Milano » + « Non attiva » : je ne vois pas le rapport avec le permis. Recommandation : mettre le tableau « Permessi ZTL a confronto » en tête, avec par ville un lien « Richiedi il permesso sul sito del Comune ». Compléter Firenze et Bologna, ou écrire « nelle cinque città » si elles manquent.
7. **Sources anciennes pour Bologna (2021) et Firenze (2023)** (01-accueil-suite8, 07-metodo-suite1). Vécu : ça me fait douter de toute la réponse pour ces deux villes. Recommandation : dans la case réponse de ces villes, écrire clairement « Ultima pagina ufficiale trovata: 2021. Controlla il cartello al varco. » (la page Metodo dit que c'est fait, à vérifier qu'on le voit bien), et relire la source dès qu'elle change.
8. **Jargon technique sur Metodo et certains libellés** (07-metodo-1 et suite6 : « `ztl.json` », « codice del programma », « Ogni build » ; 03-suite3 : « dal secondo anno di divieto », « segnalazione dell'angolo cieco » ; 01-accueil-suite1 : « Motivo: dentro una fascia oraria »). Recommandation : « Tutti gli orari sono in un unico elenco, con la fonte e la data » ; « A ogni aggiornamento del sito controlliamo decine di casi » ; « Motivo: siamo nell'orario di chiusura (14:00–18:00) » ; « Motivo: di sabato Area B è spenta ».

## 7. À garder

- Le titre « ZTL attiva adesso? » qui reprend la question Google, et l'outil pré-rempli à l'heure actuelle : réponse sans clic.
- La formule de réponse « Attiva fino alle 18:00 » / « Riattiva lunedì 16 novembre 2026 alle 07:30 » : parfaite.
- L'encadré jaune source + date + « verifica sempre il cartello al varco » : honnête et rassurant.
- « Orari della zona » sous chaque réponse (lun–ven…, sab…).
- Le calculateur de multa avec l'encadré « Esempio… cambi una cifra per vedere il suo risultato » et le gros « 58,10 € » ; le tableau par nombre de jours.
- La section « Area B non è Area C » et « Fascia Verde e ZTL del centro » : elles répondent à la confusion la plus courante.
- Les cartes « Pagine e strumenti collegati » avec un chiffre dans chaque phrase.
- « Chi siamo » : « Non vendiamo nulla… non chiediamo dati di contatto » ; l'aveu des villes non couvertes (« Preferiamo una città in meno a un orario non verificato »).

## 8. Notes

Clarté : 8/10
Facilité : 8/10
Utilité : 9/10
