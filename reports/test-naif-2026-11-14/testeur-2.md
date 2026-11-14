# Test naïf du 2026-11-14, testeur 2 : ztlorari.it
**Persona :** Italien(ne) de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat « ZTL attiva adesso: orari per città, varchi e multa 2026 » parce qu'il/elle veut savoir si la ZTL est allumée maintenant.

## 1. Concept

**Après 5 s :** « C'est exactement ce que j'ai cherché. » Le titre « ZTL attiva adesso? » reprend mot pour mot ma question Google, la phrase dessous dit ce que je vais obtenir (« se la ZTL è attiva adesso, fino a che ora, e quando riparte »), et le formulaire est déjà rempli. En bas du premier écran je vois déjà « ZTL attiva » en très gros. Pas besoin de cliquer pour avoir une réponse.

**Après 2 min :** j'ai compris que c'est un outil qui couvre 7 villes (Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia) et 26 zones, qui me dit ON/OFF à l'heure choisie, jusqu'à quand, et quand ça reprend, avec la source et sa date. Autour, des pages par ville/zone, un calcul de l'amende et une page sur les permis. Le site n'appartient pas à la commune (« Sito indipendente, non è un servizio del comune »), ne vend rien et ne demande rien.

**Clair ?** Oui, très. **Pour qui ?** Quiconque va en voiture dans le centre d'une de ces 7 villes, ou qui a reçu une amende. **Bénéfice concret :** ne pas prendre une amende de 83 € (ou plus) en sachant si le varco est allumé et à quelle heure il s'éteint. Si j'étais à Naples, Vérone ou Pise, je repartirais déçu(e) : la ville n'est pas dans la liste, et je ne l'apprends qu'en ouvrant le menu déroulant ou en lisant le paragraphe « Le città e le zone coperte », loin en bas.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'outil, presque oui pour le reste.** La réponse principale (« ZTL attiva » / « Non attiva » + « Attiva fino alle 18:00 » / « Riattiva lunedì 16 novembre 2026 alle 07:30 ») est compréhensible par n'importe qui.

Où ça décroche :
- Le verdict est toujours dans la même boîte rose/rouge, que la zone soit active ou non : il faut lire le mot, la couleur n'aide pas.
- Le vocabulaire juridique des pages amende et méthode (« comma 14-bis », « art. 198 c.2-bis », « D.Lgs. 150/2011 », « Ogni build controlla decine di casi », « `ztl.json` ») perd le public non initié. Ça ne bloque pas l'outil, mais ça fait « site de juriste/développeur » par endroits.
- Le tableau Fascia Verde mélange « Vietato » et « in deroga fino al 31 ottobre 2027 » dans la même colonne : je ne sais plus si ma moto diesel Euro 2 est interdite ou non.

## 3. Parcours écran par écran

**01-accueil-1.png** : compris tout de suite. Titre = ma question. Formulaire Città / Zona / Giorno / Ora déjà rempli (Roma, ZTL Centro Storico diurna). Le verdict « ZTL attiva » apparaît au bas de l'écran, « Attiva fino alle 18:00. » Rassurant. Petit accroc : la date et l'heure s'affichent « 11/14/2026 » et « 05:25 PM » (format américain) alors que tout le reste est en italien et que le libellé dit « ora italiana ». Je me demande une seconde si c'est bien le 14 novembre et 17h25 ; la ligne « 14 novembre 2026 ore 17:25 » dans le résultat lève le doute.

**01-accueil-suite1.png** : très bien. « Motivo : dentro una fascia oraria », « Fasce di questo giorno : 14:00–18:00 », source « Roma Servizi per la Mobilità (Roma Capitale), pagina del 28 luglio 2026 » et rappel « verifica sempre il cartello al varco ». Les horaires de la zone (« lun–ven 6:30–18:00 · sab 14:00–18:00 », « Moto e ciclomotori entrano liberamente ») complètent bien. Puis long texte explicatif.

**01-accueil-suite2.png** : texte dense, mais avec de vrais horaires (Trident jusqu'à 19:00, Area C 7:30–19:30, Bologna 7–20). Le lien « Leggi tutto il paragrafo » montre qu'il y a encore plus. Je scrolle sans lire. « Come sapere se la ZTL è attiva adesso » : explication du fonctionnement, utile mais je l'ai déjà compris en utilisant l'outil.

**01-accueil-suite3.png** : « Le città e le zone coperte » : c'est ici que j'apprends que seules 7 villes sont couvertes et que Napoli, Verona, Pisa, Genova n'y sont pas. Honnête (« Preferiamo una città in meno a un orario non verificato »), mais trop bas pour l'utilisateur qui vient d'une ville absente.

**01-accueil-suite4.png** : « Che cosa succede se entri quando il varco è attivo » : amende 83–332 €, 168–678 € pour Area B / Fascia Verde, lien vers le calcul de l'amende. Clair et utile.

**01-accueil-suite5.png / suite6.png** : varchi, permis, ZTL nocturnes, liens « ZTL attive oggi » et « festivi ». Intéressant, mais c'est un mur de texte avec des liens noyés dedans ; sur mobile je ne clique pas.

**01-accueil-suite7.png** : FAQ en accordéon, bonnes questions (« Quanto costa entrare in una ZTL senza permesso? », « Con un'auto a noleggio pago io la multa della ZTL? »). « Tocchi una domanda per vedere la risposta » : le vouvoiement (« Tocchi ») détonne avec le tutoiement du reste du site (« Scegli », « verifica »).

**01-accueil-suite8.png / suite9.png** : liste des sources avec dates, encadré « Scritto da Radif Partners ». Sérieux, ça rassure. Pied de page replié « Chi siamo, note legali e tutte le pagine ».

**02-menu-1.png** : menu clair : « ZTL per città » ouvert avec les villes et zones, « Multe, varchi e regole » replié, « Metodo e fonti ». Je trouve ma ville en une seconde (si elle y est).

**03-it-area-b-milano-1.png / suite1.png** : même outil, préréglé Milano / Area B. Verdict « Non attiva », « Riattiva lunedì 16 novembre 2026 alle 07:30 », « Divieto solo per i veicoli più inquinanti… gli altri entrano liberamente ». Parfait. Mais « Non attiva » est dans la même boîte rose que « ZTL attiva » sur l'accueil : visuellement, ça ressemble à une alerte alors que c'est une bonne nouvelle.

**03-…-suite2.png / suite3.png** : tableau « Orari di Area B Milano e chi è vietato » lisible ; « Area B non è Area C » explique bien la différence (« Un'auto recente entra in Area B senza fare nulla, ma in Area C deve comunque pagare il ticket »). Très utile. « Giornate libere per ogni veicolo : 5 l'anno, dal secondo anno di divieto » : je ne comprends pas ce que veut dire « dal secondo anno di divieto ».

**03-…-suite4.png à suite6.png** : FAQ + « Pagine e strumenti collegati » en cartes, bien faites. La carte Area B dit « le 5 e le 20 giornate di deroga dal 1° ottobre 2026 » ; le tableau disait « dal secondo anno di divieto » : deux façons différentes de dire la même chose, je ne sais pas laquelle croire.

**04-it-area-c-milano-1.png / suite1.png** : titre « Area C Milano: è attiva adesso? », verdict « Non attiva », reprise lundi 7:30. Les tarifs du ticket (7,50 €, 3,00 €, 4,50 €, 22,50 €) sont dans la boîte du résultat : utile mais un peu touffu dans le bloc verdict.

**04-…-suite2.png / suite3.png** : tableau des tarifs clair. « Chi è escluso del tutto » : liste des véhicules interdits, puis « l'elenco completo, con le deroghe, è sulla pagina di Area C » alors que je suis déjà sur la page Area C : je comprends après coup que c'est la page de la commune, mais sur le moment c'est confus.

**04-…-suite4.png à suite6.png** : « Area C, Area B e la sera » : excellente info (Navigli dès 20:00, Arco della Pace dès 22:00), exactement le piège que je redoute. FAQ et cartes liées OK.

**05-it-chi-siamo-1.png à suite3.png** : page « Chi pubblica ZTL Orari » claire : qui, pourquoi, d'où viennent les chiffres, « Non vendiamo nulla… non chiediamo dati di contatto », pourquoi aussi en anglais, e-mail de contact. Rassurant, rien à redire.

**06-it-fascia-verde-roma-1.png / suite1.png** : préréglé Fascia Verde, verdict « Divieto in vigore » (et pas « ZTL attiva » : changement de mot, compréhensible), « Attiva fino alle 00:00 di domani. » La formule « 00:00 di domani » est bizarre : je préférerais « fino a mezzanotte, domenica libera ». Liste des catégories interdites claire. **Incohérence :** la boîte dit « Orari da Roma Servizi per la Mobilità… pagina del 28 luglio 2026 », alors que le texte juste dessous et les sources disent « aggiornata il 2 novembre 2026 » pour la page Fascia Verde. Sur une règle qui a changé au 1er novembre, cette date de juillet m'inquiète.

**06-…-suite2.png / suite3.png** : texte et tableau « Veicoli vietati » ; la dernière ligne « Ciclomotori, microcar, moto diesel Euro 2 → in deroga fino al 31 ottobre 2027 » sous la colonne « Vietato » : contradictoire à la lecture rapide. « Fascia Verde e ZTL del centro » : très bonne mise en garde.

**06-…-suite4.png à suite6.png** : « Smog e misure temporanee » honnête (« Queste misure non sono nel calcolo »). FAQ pertinentes (« Un'auto Euro 3 a benzina può entrare in Fascia Verde? »). Cartes liées.

**07-it-metodo-1.png à suite6.png** : page sérieuse, utile pour la confiance (dates de source par ville). Mais : « (`ztl.json`) » avec les accents graves visibles et « Ogni build controlla decine di casi » sont du jargon de développeur. Elle révèle aussi que Bologna repose sur une source du « 26 agosto 2021 » et Firenze du « 30 ottobre 2023 » : bien de le dire, mais ça refroidit si je vais à Bologne. La section « Limiti » (« dice se la zona è attiva, non se tu puoi entrare ») est claire et importante.

**08-it-multa-ztl-1.png / suite1.png** : calculateur d'amende compris : « Che cosa dice il verbale », « Giorni diversi con passaggi : 1 », date de notification, résidence. Le bandeau « Esempio: un giorno di passaggi, verbale notificato oggi — cambi una cifra per vedere il suo risultato » est très bien. Résultat « 58,10 € » en gros, puis échéances datées. Accroc : « Ricorso al prefetto entro il 13 gennaio 2027 » est listé avant « Ricorso al giudice di pace entro il 14 dicembre 2026 », donc la date la plus proche vient en dernier ; je risque de croire que j'ai jusqu'en janvier pour tout recours. « Cambi una cifra » / « il suo risultato » : encore du vouvoiement.

**08-…-suite2.png à suite6.png** : tableau 1/2/3/5 jours clair. « Tre tipi di violazione » utile (suspension du permis si récidive). « Che cosa il calcolo non sa » honnête. FAQ et cartes OK.

**09-it-permessi-ztl-1.png / suite1.png** : page « Permessi ZTL: chi entra e come », mais l'outil est préréglé sur « Area B a Milano » (« Preimpostata Area B a Milano: verifica l'orario del divieto ») : je ne comprends pas pourquoi une page sur les permis ouvre sur Area B, qui justement ne demande pas de permis. Ça sent le copier-coller.

**09-…-suite2.png / suite3.png** : tableau « Permessi ZTL a confronto » utile (Roma, Milano B et C, Torino, Pavia, Palermo). **Il manque Firenze et Bologna** alors que les cartes parlent des « sette città ». Le conseil « a Pavia il permesso residente annuale costa meno di una sola multa al minimo » est concret et malin.

**09-…-suite4.png à suite6.png** : « Se il permesso c'era ma la multa arriva » très utile (location, changement d'auto). FAQ (« Ho prenotato un albergo nella ZTL: chi pensa al permesso? ») pertinente.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Outil « ZTL attiva adesso? » (ville/zone/jour/heure → verdict) | Oui, dès le 1er écran | Oui | Très | 5/5 |
| « Fino a che ora / Riattiva… » | Oui | Oui | Très | 5/5 |
| Source + date sous le verdict | Oui | Oui | Rassurant | 4/5 (date incohérente sur Fascia Verde) |
| Choisir un autre jour/heure (« venerdì sera alle 23 ») | Oui (champs visibles) | Oui | Oui | 4/5 |
| Partager le résultat « con il link della pagina » | Annoncé dans le texte, aucun bouton visible dans les captures | Non vérifiable | Potentiellement | 2/5 |
| Calcul de l'amende | Oui (page Multa ZTL, liens) | Oui | Très | 4/5 (ordre des échéances) |
| Pages ville/zone (Area B, Area C, Fascia Verde) | Oui (menu + cartes) | Oui | Oui | 5/5 |
| Comparatif des permis | Oui | Oui | Oui | 3/5 (Firenze/Bologna absents, outil préréglé hors sujet) |
| « ZTL attive oggi » / « festivi » | Liens dans le texte seulement | Annoncé, non visité | Probablement | 2/5 |
| Méthode et sources | Oui | En partie (jargon) | Pour la confiance | 3/5 |
| Version anglaise (bouton EN) | Oui | Oui | Pour touristes | 5/5 |

## 5. Enchaînement et navigation

- Header constant (logo, EN, ☰), fil d'Ariane « Home / … » sur chaque page : je ne me perds jamais.
- Le même outil en tête de chaque page, préréglé sur la zone de la page : excellent pour Area B / Area C / Fascia Verde, incongru sur la page Permessi.
- Les cartes « Pagine e strumenti collegati » font bien le lien entre pages.
- Sur l'accueil, les pages utiles (« ZTL attive oggi », « festivi », « varchi elettronici », « ZTL notturne ») sont cachées dans des paragraphes ; aucune carte ou bouton ne les met en avant. Le menu les range sous « Multe, varchi e regole », replié.
- Les pages sont longues ; heureusement la réponse est toujours en haut.

## 6. Difficultés classées

1. **Verdict de la même couleur qu'il soit positif ou négatif** (01-accueil-1, 03-…-suite1, 04-…-suite1, 06-…-suite1, 09-…-suite1). Vécu : « ZTL attiva » et « Non attiva » sont dans la même boîte rose bordée de rouge ; d'un coup d'œil au volant ou pressé(e), je ne distingue pas le feu rouge du feu vert, il faut lire le mot. Recommandation : boîte rouge + icône ⛔ pour « attiva / Divieto in vigore », boîte verte + icône ✓ pour « Non attiva », avec un sous-titre d'action : « Non entrare senza permesso » / « Puoi entrare senza multa ».

2. **Date de source contradictoire sur Fascia Verde** (06-…-suite1). Vécu : la boîte dit « pagina del 28 luglio 2026 » alors que la page parle de règles « dal 1° novembre 2026 » et d'une source « aggiornata il 2 novembre 2026 ». Je doute de la fraîcheur pile au moment où les règles ont changé. Recommandation : afficher la date de la source propre à la zone : « Orari da Roma Servizi per la Mobilità, pagina «ZTL Fascia Verde» del 2 novembre 2026 ».

3. **Villes non couvertes découvertes trop tard** (01-accueil-suite3). Vécu : si je viens d'une ville absente, je ne le sais qu'après avoir ouvert le menu ou lu un long paragraphe. Recommandation : sous le titre, une ligne courte : « 7 città: Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia. »

4. **Échéances de recours dans le désordre** (08-multa-ztl-suite1). Vécu : « Ricorso al prefetto entro il 13 gennaio 2027 » apparaît avant « Ricorso al giudice di pace entro il 14 dicembre 2026 » ; je risque de rater la date la plus proche. Recommandation : trier par date et préciser : « Ricorso al giudice di pace: entro il 14 dicembre 2026 (30 giorni) » puis « Ricorso al prefetto: entro il 13 gennaio 2027 (60 giorni) ».

5. **Page Permessi : outil préréglé sur Area B et tableau incomplet** (09-permessi-ztl-1, suite2). Vécu : Area B n'a pas de permis ; Firenze et Bologna manquent alors qu'on annonce « sette città ». Recommandation : précharger une ZTL à permis (Roma Centro Storico) avec « Preimpostata la ZTL Centro Storico di Roma: verifica se ti serve il permesso a quest'ora. », et ajouter les lignes Firenze et Bologna (ou écrire « Firenze e Bologna: vedi la pagina della città »).

6. **Colonne « Vietato » qui contient une dérogation** (06-fascia-verde-roma-suite3). Vécu : « in deroga fino al 31 ottobre 2027 » sous « Vietato » : interdit ou pas ? Recommandation : sortir la ligne du tableau et écrire en dessous : « Ciclomotori, microcar e moto diesel Euro 2: ancora ammessi fino al 31 ottobre 2027. »

7. **Jargon technique et juridique** (07-metodo-1, suite6 ; 08-multa-ztl-suite3). Vécu : « (`ztl.json`) » avec les accents graves visibles, « Ogni build controlla decine di casi », « art. 198 c.2-bis » : on dirait des notes internes. Recommandation : « Ogni orario sta in un solo elenco, con l'indirizzo della fonte e la sua data » et « A ogni aggiornamento del sito controlliamo decine di casi ».

8. **Petites incohérences de ton et de formulation** (01-accueil-suite7, 08-…-suite1, 06-…-suite1, 03-…-suite3). Vécu : on passe du tu (« Scegli », « verifica ») au vous (« Tocchi una domanda », « cambi una cifra per vedere il suo risultato ») ; « Attiva fino alle 00:00 di domani » ; « dal secondo anno di divieto » obscur. Recommandation : tout au tutoiement (« Tocca una domanda per vedere la risposta », « cambia una cifra per vedere il tuo risultato ») ; « Attiva fino a mezzanotte; domenica libera » ; « 5 giornate libere l'anno per ogni veicolo vietato ».

## 7. À garder

- Le titre « ZTL attiva adesso? » qui reprend la recherche Google, et la réponse visible sans rien toucher.
- Le couple « Attiva fino alle 18:00 » / « Riattiva lunedì 16 novembre 2026 alle 07:30 » : exactement l'info qu'on veut.
- « Motivo » et « Fasce di questo giorno » : on comprend pourquoi.
- La source datée et cliquable sous chaque verdict + « verifica sempre il cartello al varco ».
- « Area B non è Area C » et « Area C, Area B e la sera » (Navigli dès 20:00) : vraies mises en garde utiles.
- Le calculateur d'amende avec le bandeau « Esempio… cambi una cifra » et le tableau 1/2/3/5 jours.
- L'honnêteté : « Preferiamo una città in meno a un orario non verificato », « Limiti », « Che cosa il calcolo non sa ».
- La page Chi siamo : « Non vendiamo nulla… non chiediamo dati di contatto ».
- Le fil d'Ariane, le menu par ville, le bouton EN.

## 8. Notes

Clarté : 8/10
Facilité : 8/10
Utilité : 8/10
