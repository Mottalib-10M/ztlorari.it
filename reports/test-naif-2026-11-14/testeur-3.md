# Test naïf du 2026-11-14, testeur 3 : ztlorari.it
**Persona :** Italien(ne) de 61 ans, se sert de son téléphone pour WhatsApp et la météo, lit lentement, se méfie des sites qui demandent des données, ne comprend pas les sigles, ne lit pas l'anglais. Il/elle a cliqué sur le résultat Google « ZTL attiva adesso: orari per città, varchi e multa 2026 » parce qu'il/elle a cette question pour lui/elle-même ou un proche.

## 1. Concept

**Après 5 secondes (01-accueil-1) :** « ZTL attiva adesso? » en très gros, puis Città / Zona / Giorno / Ora déjà remplis, et plus bas un grand « ZTL attiva ». Elle comprend tout de suite : « on me dit si je peux entrer dans le centre maintenant ». C'est exactement la promesse du résultat Google (« vedi se il varco è acceso, fino a quando »). Le sigle ZTL, elle le connaît comme tout le monde en Italie (panneaux, amendes), même si elle ne saurait pas le développer ; le site le développe dans le texte (« Una zona a traffico limitato, la ZTL »), mais seulement sous l'outil.

**Après 2 minutes :** elle a compris qu'il y a 7 villes (Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia), qu'on choisit sa zone et l'heure, que le site dit « attiva / Non attiva / Divieto in vigore », jusqu'à quelle heure, et quand ça repart. Elle a aussi trouvé une page pour calculer l'amende (« Multa ZTL ») et une page sur les permis. Le site n'est pas la mairie (« Sito indipendente, non è un servizio del comune ») et ne demande rien : ça la rassure.

**Clair ? Pour qui ? Bénéfice ?** Oui, clair pour quelqu'un qui va en voiture dans le centre de Rome ou de Milan et a peur de l'amende. Bénéfice concret : savoir « est-ce que je peux passer maintenant / samedi soir » et « combien je paie si j'ai pris une amende ». Limite : si sa ville n'est pas dans les 7 (Napoli, Verona, Genova…), le site ne l'aide pas, et il le dit honnêtement.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'essentiel (la réponse en gros caractères), non pour les détails.** Elle comprend « ZTL attiva » et « Attiva fino alle 18:00 ». Ça décroche à quatre endroits :
- **Date et heure à l'américaine** dans les champs : « 11/14/2026 » et « 05:25 PM ». Une Italienne lit « 11 du 14e mois ? » et « PM » ne lui dit rien. Le résultat en dessous, lui, dit bien « 14 novembre 2026 ore 17:25 », mais elle doit faire le lien.
- **La couleur du résultat ne change pas** : « ZTL attiva » et « Non attiva » sont dans la même boîte rose/rouge. Pour elle, rouge = interdit. Sur Area B et Area C, elle voit du rouge et s'inquiète alors qu'elle a le droit d'entrer.
- **Les classes Euro** (Area B, Fascia Verde, Area C) : « Pre-Euro 1, Euro 1, Euro 2 », « dual fuel, mixed fuel », « GPL », « veicoli più inquinanti indicati dal Comune ». Elle ne sait pas quelle « Euro » est sa voiture, et rien ne lui dit où le trouver.
- **Le vocabulaire juridique et technique** : « commi 9, 13-bis, 14 e 14-bis », « art. 7 CdS », « Normattiva », « open data », « CC BY », « dataset », « file di dati (`ztl.json`) », « Ogni build controlla », « deroga », « esenzione a posteriori », « notifica », « autorimesse convenzionate ». Ce sont surtout les pages Metodo et Fonti, qu'elle ne lira pas, mais certains de ces mots sont dans la boîte de résultat (Area C) et dans les cartes de liens.

## 3. Parcours écran par écran

- **01-accueil-1** — Compris. Titre = sa question. Formulaire pré-rempli Roma / « ZTL Centro Storico diurna ». Coince : « 11/14/2026 », « 05:25 PM ». « diurna » est compris (= de jour). Elle ne sait pas s'il faut appuyer sur un bouton pour obtenir la réponse : il n'y en a pas, la réponse est déjà là, ce qui est bien mais surprenant.
- **01-accueil-suite1** — Compris : « ZTL attiva », « Attiva fino alle 18:00 », « Fasce di questo giorno 14:00–18:00 ». Elle hésite : « Orari della zona: lun–ven 6:30–18:00, sab 14:00–18:00 » — elle doit deviner que le 14 novembre est un samedi, le résultat ne nomme pas le jour (« 14 novembre 2026 ore 17:25 », sans « sabato »). « Motivo: dentro una fascia oraria » est lourd mais compris. Rassurant : « Moto e ciclomotori entrano liberamente », « verifica sempre il cartello al varco ».
- **01-accueil-suite2** — Texte dense (Codice della Strada, delibera della giunta) ; « Leggi tutto il paragrafo » la soulage. Elle retient « il verbale arriva a casa settimane dopo ».
- **01-accueil-suite3** — « Come sapere se la ZTL è attiva adesso » : explique l'outil, utile mais long. La liste des villes couvertes est trouvée ; la phrase « Preferiamo una città in meno a un orario non verificato » lui inspire confiance.
- **01-accueil-suite4** — « Che cosa succede se entri quando il varco è attivo » : elle comprend « 83 € a 332 € » et « 90 giorni ». « prefetto », « giudice di pace » : connus vaguement.
- **01-accueil-suite5** — « Varchi, permessi e orari notturni » : compris, la mention des ZTL de nuit (« si accendono la sera del fine settimana, spesso fino alle 3 ») est utile pour elle.
- **01-accueil-suite6** — « Le fonti » : liste de liens « articolo 7, 198, 202, 203 », « open data » : elle saute.
- **01-accueil-suite7** — FAQ : questions très parlantes (« Quanto costa entrare in una ZTL senza permesso? », « Se passo più volte nello stesso giorno ricevo più multe? »). Elle en ouvrirait. « Posso inserire lo strumento sul mio sito? » ne la concerne pas.
- **01-accueil-suite8 / suite9** — Liste des sources, encadré « Scritto da Radif Partners » : « Radif Partners » ne lui dit rien (nom anglais ?), mais « Editore indipendente » et la date « Aggiornato il 13 novembre 2026 » rassurent. Coince : « stato in tempo reale calcolato nel browser » (« browser » ?). En pied de page, « Chi siamo, note legali e tutte le pagine » replié.
- **02-menu-1** — Compris : « ZTL per città » ouvert avec les villes. Elle trouve vite Roma ou Milano. « Multe, varchi e regole » replié ; « Metodo e fonti » ne lui parle pas. Le bouton « EN » en haut ne la concerne pas (elle ne lit pas l'anglais) mais ne gêne pas.
- **03-it-area-b-milano-1** — Compris : « Area B Milano vieta i veicoli più inquinanti nei giorni feriali dalle 7:30 alle 19:30 ». Elle se demande aussitôt : « ma voiture est-elle "più inquinante" ? ». Pas de réponse à cet endroit.
- **03-…-suite1** — « Non attiva » dans une boîte rose : elle comprend le mot mais la couleur l'inquiète. « Riattiva lunedì 16 novembre 2026 alle 07:30 » : très clair. « nessuna fascia » compris.
- **03-…-suite2 / suite3** — Tableau : « Sempre vietati: … veicoli senza segnalazione dell'angolo cieco » (elle ne sait pas ce que c'est), « Giornate libere per ogni veicolo: 5 l'anno, dal secondo anno di divieto » (elle ne comprend pas « dal secondo anno di divieto »). « Area B non è Area C » : bonne explication simple (« Un'auto recente entra in Area B senza fare nulla »). C'est la phrase qui la rassure le plus.
- **03-…-suite4 → suite6** — FAQ « Come verifico se la mia auto può entrare in Area B? » : exactement sa question, mais cachée tout en bas dans un accordéon. Cartes de liens claires.
- **04-it-area-c-milano-1 / suite1** — Compris : « chiede un ticket solo nei giorni feriali ». « Non attiva », même boîte rose. La boîte contient une phrase-fleuve sur les tarifs (« 3,00 € per i residenti in Area C dal 51° accesso dell'anno; 4,50 € per i veicoli di servizio registrati e per chi sosta in un'autorimessa convenzionata… ») : trop d'information au mauvais endroit, elle décroche.
- **04-…-suite2 / suite3** — Phrase clé bien écrite : « il sabato, la domenica e nei giorni festivi si entra senza ticket ». Tableau des tarifs lisible. « Chi è escluso del tutto » : « motoveicoli e ciclomotori a due tempi Euro 2 e 3 », « benzina a quattro tempi Euro 0, 1 e 2 » : incompréhensible pour elle ; « l'elenco completo… è sulla pagina di Area C » : elle croit être déjà sur la page d'Area C.
- **04-…-suite4 → suite6** — « Area C, Area B e la sera » utile (Navigli dès 20:00). FAQ « Come si paga il ticket di Area C? » : sa vraie question pratique, encore en accordéon tout en bas.
- **05-it-chi-siamo-1 → suite3** — Lu en partie : « Non vendiamo nulla, non prendiamo commissioni e non chiediamo dati di contatto », « Il sito è gratuito e senza registrazione » : très rassurant pour quelqu'un de méfiant. Coince : « open data … (licenza CC BY) », « browser ». L'adresse « contatti@ztlorari.it » est visible.
- **06-it-fascia-verde-roma-1 / suite1** — Compris : interdiction « dal lunedì al sabato, giorno e notte ». Résultat « Divieto in vigore » puis « Attiva fino alle 00:00 di domani » : deux mots différents (« Divieto » / « Attiva ») pour la même chose, et « 00:00 di domani » la fait réfléchir (= minuit ce soir). La liste « auto a benzina, GPL e metano fino a Euro 2, diesel fino a Euro 3 » : elle ne sait pas si elle est concernée. Incohérence : la boîte cite « pagina del 28 luglio 2026 » alors que le texte juste en dessous dit « aggiornata il 2 novembre 2026 » et parle d'une règle « dal 1° novembre 2026 ».
- **06-…-suite2 / suite3** — Tableau « Veicolo / Vietato » : « Pre-Euro 1 », « dual fuel, mixed fuel » (anglais !), « microcar ». Elle décroche. « Fascia Verde e ZTL del centro » : bien expliqué.
- **06-…-suite4** — « Smog e misure temporanee » : « ARPA Lazio », « PM10, biossido di azoto o ozono » : sigles, elle saute.
- **06-…-suite5 / suite6** — FAQ « Come so se il mio indirizzo è in Fascia Verde? », « Un'auto Euro 3 a benzina può entrare in Fascia Verde? » : bonnes questions, cachées.
- **07-it-metodo-1 → suite6** — Page pour spécialistes. « file di dati (`ztl.json`) », « nessun orario è scritto nel codice del programma », « Ogni build » : charabia pour elle. Elle remarque toutefois « Firenze … 30 ottobre 2023 » et « Bologna … 26 agosto 2021 » : « des horaires de 2021, c'est encore bon ? » — ça l'inquiète, alors que l'accueil promettait « Orari letti nel 2026 ». La section « Limiti » (« dice se la zona è attiva, non se tu puoi entrare ») est honnête et utile, mais enterrée ici.
- **08-it-multa-ztl-1 / suite1** — Compris dans les grandes lignes : « Inserisci quanti giorni sei entrato e la data della notifica ». Coince : « Giorni diversi con passaggi » (elle hésite : nombre de passages ou nombre de jours ?), la phrase d'aide le précise. Date à nouveau « 11/14/2026 ». Résultat : « 58,10 € » énorme, très clair, et l'encadré « Esempio: … cambi una cifra per vedere il suo risultato » l'aide. Coince : « Pagamento minimo fino al 13 gennaio 2027 » (elle pense à une mensualité minimum) ; l'ordre des dates est déroutant : « Ricorso al prefetto entro il 13 gennaio 2027 » est avant « Ricorso al giudice di pace entro il 14 dicembre 2026 », qui arrive pourtant plus tôt.
- **08-…-suite2** — « Art. 7 CdS · art. 198 · art. 202 · art. 203 · Normattiva » : sigles. Le paragraphe explicatif est clair (« tre passaggi lo stesso giorno fanno una multa, tre giorni diversi ne fanno tre »).
- **08-…-suite3** — Tableau par nombre de jours : très clair, chiffres lisibles. Coince : « Calcolo con l'art. 7 c.14, l'art. 198 c.2-bis » (« c. » ?).
- **08-…-suite4 → suite6** — « Tre tipi di violazione », « Che cosa il calcolo non sa » : honnête. « sospensione della patente da 15 a 30 giorni » l'effraie mais c'est utile. FAQ pertinentes.
- **09-it-permessi-ztl-1 / suite1** — Elle s'attendait à une page qui explique comment obtenir un permis ; elle retombe sur le même outil « Città / Zona / Giorno / Ora » avec « Preimpostata Area B a Milano: verifica l'orario del divieto ». « Preimpostata » ? Et pourquoi Area B, qui n'a justement pas de permis ? Elle ne voit pas le rapport avec le titre « Permessi ZTL: chi entra e come ».
- **09-…-suite2 / suite3** — Tableau « Permessi ZTL a confronto » : utile (Pavia « giornaliero 10,00 € », Palermo « pass giornalieri online »). Mais Firenze et Bologna manquent, alors que les cartes annoncent « come si entra in ZTL senza multa nelle sette città ». « esenzione a posteriori entro 10 giorni » : incompris. Le conseil « basta spostare l'orario di arrivo » est concret et lui plaît.
- **09-…-suite4 → suite6** — « Se il permesso c'era ma la multa arriva » : clair. FAQ « Con il contrassegno disabili si entra in tutte le ZTL? » : question très utile pour un proche. « Deliberazione GC n. 63 » dans les sources : sigle.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Outil « ZTL attiva adesso? » (accueil) | Oui, en haut | Oui pour le gros résultat ; non pour la date « 11/14/2026 » et « PM » | Très | 4 |
| Même outil sur les pages ville (Area B, Area C, Fascia Verde) | Oui | Oui, mais la boîte rose pour « Non attiva » fait peur | Très | 4 |
| « Riattiva lunedì … alle 07:30 » / « Attiva fino alle 18:00 » | Oui | Oui | Très | 5 |
| « Orari della zona » sous le résultat | Oui | Oui, sauf qu'il faut savoir quel jour on est | Oui | 4 |
| Calcul de l'amende (Multa ZTL) | Oui via menu / liens | Oui pour le montant ; « Pagamento minimo », ordre des dates et « Giorni diversi con passaggi » gênent | Très | 4 |
| Tableau « Multa ZTL per numero di giorni » | Oui | Oui | Oui | 5 |
| Page Permessi | Oui via menu | Le tableau oui ; l'outil horaire en tête non (hors sujet) | Moyen | 2 |
| Savoir si SA voiture est interdite (Area B / Fascia Verde) | Seulement une FAQ fermée en bas | Non (classes Euro) | Ce serait la plus utile | 1 |
| Menu ☰ | Oui | Oui (« ZTL per città ») | Oui | 4 |
| FAQ en accordéon | Oui | Oui (« Tocchi una domanda ») | Oui | 4 |
| Bouton EN | Oui | Sans objet pour elle | Non | — |
| Partager le résultat (« mandare il risultato con il link ») | Annoncé dans le texte, pas vu de bouton sur les écrans | Non | Elle enverrait bien à son fils sur WhatsApp | 1 |

## 5. Enchaînement et navigation

- Bon : chaque page commence par la même structure (titre-question, phrase simple, outil, résultat), donc après une page elle sait lire les suivantes. Fil d'Ariane « Home / … » présent. Menu clair, villes en premier.
- Les cartes « Pagine e strumenti collegati » en bas de chaque page sont bien rédigées et donnent envie de cliquer (« ticket da 7,50 €, cosa succede se lo dimentichi »).
- Moins bon : les réponses aux questions pratiques (« ma voiture peut-elle entrer ? », « comment payer le ticket ? ») sont toutes dans des FAQ fermées tout en bas, après de longs paragraphes juridiques. Sur téléphone, elle risque de ne jamais y arriver.
- La page Permessi réutilise l'outil horaire sans rapport avec son titre : rupture de logique.
- Petites incohérences d'une page à l'autre : Fascia Verde « pagina del 28 luglio 2026 » dans le résultat contre « aggiornata il 2 novembre 2026 » dans le texte ; Area B « 5 l'anno, dal secondo anno di divieto » dans le tableau contre « le 5 e le 20 giornate di deroga dal 1° ottobre 2026 » dans la carte ; « sette città » sur Permessi mais seulement 5 villes dans le tableau.

## 6. Difficultés classées

1. **Toutes les pages ville / 01-accueil-1 — date et heure au format américain.** Vécu : « 11/14/2026 » et « 05:25 PM » : elle ne reconnaît ni la date ni l'heure, pense à une erreur et n'ose pas modifier. Recommandation : forcer l'affichage italien (jj/mm/aaaa, 24 h), ou afficher au-dessus du champ une ligne lisible : « Oggi, sabato 14 novembre, ore 17:25 — tocca per cambiare ».
2. **03 / 04 / 09 — « Non attiva » dans la même boîte rose que « ZTL attiva ».** Vécu : rouge = interdit, elle croit qu'elle ne peut pas entrer. Recommandation : boîte verte quand la zone est libre, rouge quand elle est active, avec une phrase d'action : « Non attiva: puoi entrare senza permesso fino a lunedì 16 novembre alle 7:30. » / « Attiva: senza permesso non entrare fino alle 18:00. »
3. **03 / 06 / 04 — classes Euro sans aide.** Vécu : « Pre-Euro 1, Euro 2, dual fuel, mixed fuel » : elle ne sait pas si sa voiture est concernée, donc l'outil ne répond pas à sa vraie question. Recommandation : sous le résultat, une ligne « La classe Euro è scritta sul libretto di circolazione, alla voce V.9 (o nelle note) » ; remplacer « dual fuel, mixed fuel » par « diesel con doppia alimentazione » ; remonter la FAQ « Come verifico se la mia auto può entrare in Area B? » ouverte juste sous l'outil.
4. **09-it-permessi-ztl-1 — outil hors sujet sur la page Permessi.** Vécu : titre « chi entra e come », mais on lui montre un horaire d'Area B « Preimpostata ». Recommandation : mettre le tableau « Permessi ZTL a confronto » en premier, ou remplacer « Preimpostata Area B a Milano: verifica l'orario del divieto » par « Prima di chiedere un permesso, controlla se a quell'ora la zona è attiva: » ; compléter le tableau avec Firenze et Bologna ou retirer « nelle sette città ».
5. **08-it-multa-ztl-suite1 — « Pagamento minimo » et ordre des dates.** Vécu : « minimo » évoque une mensualité ; le recours au juge (14 décembre) est listé après celui au préfet (13 janvier). Recommandation : « Prezzo pieno (83 €) fino al 13 gennaio 2027 » ; trier les échéances par date, ou écrire « Ricorso al giudice di pace: entro il 14 dicembre 2026 (30 giorni) » avant le préfet.
6. **06-it-fascia-verde-roma-suite1 — date de la source contradictoire et « Divieto in vigore » / « Attiva ».** Vécu : « pagina del 28 luglio 2026 » puis « aggiornata il 2 novembre 2026 » : elle se demande lequel croire. Recommandation : aligner la date du résultat sur la page Fascia Verde (2 novembre 2026) ; écrire « Divieto in vigore fino a mezzanotte » au lieu de « Attiva fino alle 00:00 di domani ».
7. **04-it-area-c-milano-suite1 — boîte de résultat surchargée.** Vécu : la phrase des tarifs (51° accesso, autorimesse convenzionate, 22,50 €) noie la réponse. Recommandation : dans la boîte, seulement « Oggi si entra senza ticket. Nei giorni feriali il ticket costa 7,50 € » ; le reste dans le tableau dessous.
8. **01-accueil-suite8, 05, 07 — sigles et jargon.** Vécu : « art. 7 CdS », « commi 13-bis », « open data », « CC BY », « browser », « ztl.json », « build », « ARPA », « PM10 ». Recommandation : écrire « Codice della Strada » en entier, « calcolato sul tuo telefono » au lieu de « nel browser », et réserver « ztl.json » / « build » à la page Metodo ou les reformuler (« un unico elenco degli orari », « a ogni aggiornamento del sito »).

## 7. À garder

- Le titre-question « ZTL attiva adesso? » et la réponse géante en une ligne, sans bouton à presser.
- « Riattiva lunedì 16 novembre 2026 alle 07:30 » et « Attiva fino alle 18:00 » : exactement ce qu'elle veut savoir.
- « Sito indipendente, non è un servizio del comune » et « verifica sempre il cartello al varco » : honnête et rassurant.
- « Non vendiamo nulla, non prendiamo commissioni e non chiediamo dati di contatto » / « gratuito e senza registrazione » : décisif pour quelqu'un de méfiant.
- La phrase « Un'auto recente entra in Area B senza fare nulla, ma in Area C deve comunque pagare il ticket. »
- Le gros montant « 58,10 € » et le tableau par nombre de jours dans la page Multa.
- « tre passaggi lo stesso giorno fanno una multa, tre giorni diversi ne fanno tre ».
- Les FAQ formulées comme on parle (« Se passo più volte nello stesso giorno ricevo più multe? », « Con il contrassegno disabili si entra in tutte le ZTL? »).
- « Preferiamo una città in meno a un orario non verificato. »

## 8. Notes

Clarté : 7/10
Facilité : 7/10
Utilité : 8/10
