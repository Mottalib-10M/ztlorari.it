# Test naïf du 2026-11-14 (tour3), testeur 2 : ztlorari.it
**Persona :** Italien(ne) de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat « ZTL attiva adesso: orari per città, varchi e multa 2026 » parce qu'il/elle se demande si la ZTL est allumée en ce moment.

## 1. Concept

**Après 5 s :** le titre « ZTL attiva adesso? » reprend mot pour mot ma question Google, la phrase dessous dit « la risposta dice se la ZTL è attiva adesso, fino a che ora, e quando riparte ». Le formulaire est déjà rempli (Roma, « ZTL Centro Storico diurna », date et heure du moment) et la barre collée en bas affiche déjà « Non attiva » en vert. Je comprends tout de suite : je choisis ma ville et ma zone, le site me dit si je peux passer. C'est exactement ce que la description Google promettait.

**Après 2 min :** c'est un vérificateur d'horaires de ZTL pour 7 villes (Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia), avec en plus un calcul d'amende (« Multa ZTL ») et des pages par zone (Area B, Area C, Fascia Verde) qui adaptent le verdict (« La tua auto entra », « Si entra senza ticket »). Chaque résultat dit d'où vient l'horaire et de quand date la page source. Clair, oui. Pour qui : n'importe quel conducteur qui approche d'un centre-ville, y compris un touriste en voiture de location. Bénéfice concret : éviter une amende de 83 à 332 €, savoir à quelle heure ça « riattiva », et si j'ai déjà pris l'amende, savoir combien payer et avant quand.

## 2. « Tout le monde peut-il comprendre ? »

Oui pour l'outil principal : verdict en gros, en couleur, avec une phrase d'action (« Puoi entrare. ») et l'heure de reprise. Ça décroche à trois endroits :
- les sources anciennes (Bologna 2021, Firenze 2023) qu'on ne découvre qu'en page Metodo, alors que le site se vante ailleurs de ne pas copier des « tabelle vecchie di anni » ;
- les pages zones à émissions (Area B, Fascia Verde) : le verdict dépend de la classe Euro, que beaucoup ne connaissent pas ; le site explique où la trouver (« il libretto »), c'est bien, mais le titre de résultat Fascia Verde fait 5 lignes ;
- la page Permessi, qui ouvre sur l'outil « ZTL attiva ? » au lieu de parler de permis.

## 3. Parcours écran par écran

- **01-accueil-1.png** — Compris. Question = titre, formulaire prérempli, « Non attiva » dans la barre du bas. La mention « Sito indipendente, non è un servizio del comune » rassure sans faire peur. « Ore e minuti su 24 ore, per esempio 17:25 » : utile. Je ne sais pas encore quelles villes existent : la liste « Città » est fermée sur Roma.
- **01-accueil-suite1.png** — Compris, avec un accroc visuel : la barre collée « ZTL Centro Storico diurna · saba… Non attiva » passe par-dessus le gros titre « Non attiva » de la carte, qu'on voit coupé en deux derrière. Le reste est très clair : « Puoi entrare. », « Riattiva lunedì 16 novembre 2026 alle 06:30. », « Motivo : a quest'ora la zona è aperta », « Orari di chiusura in questo giorno 14:00–18:00 », source datée du 28 luglio 2026. « Manda questo risultato » : je comprends (envoyer à un ami). « Moto e ciclomotori entrano liberamente » : info précieuse.
- **01-accueil-suite2.png** — Compris mais long. Le paragraphe explicatif donne déjà des exemples d'horaires (Roma, Milano, Bologna) ; « Leggi tutto il paragrafo » plie bien le reste.
- **01-accueil-suite3.png** — Compris. Explique les cas possibles (festivo, sospesa, stagionale). Texte dense ; je ne le lirais pas.
- **01-accueil-suite4.png** — Utile : c'est ici que j'apprends la liste des villes couvertes, et que Napoli, Verona, Pisa, Genova ne le sont pas (« Preferiamo una città in meno a un orario non verificato »). Honnête, mais trop bas : si je suis à Napoli, j'ai déjà perdu du temps dans le menu déroulant.
- **01-accueil-suite5.png / suite6.png** — Compris. Montants de l'amende, liens vers « calcolo della multa ZTL », « ZTL attive oggi », « festivi ». Bonne idée la page « ZTL attive oggi » (toutes les zones allumées d'un coup), mais elle n'apparaît qu'en lien dans un paragraphe.
- **01-accueil-suite7.png / suite8.png** — FAQ en accordéon avec de vraies questions (« Con un'auto a noleggio pago io la multa della ZTL? »). Liste « Fonti » datée par ville… sauf Bologna (« CC BY 4.0 », pas de date) et Palermo. Firenze « aggiornata il 30/10/2023 » : je tique, on est fin 2026.
- **01-accueil-suite9.png** — Encadré « Scritto da Radif Partners », « Aggiornato il 13 novembre 2026 ». Rassurant. Pied de page replié « Chi siamo, note legali e tutte le pagine ».
- **02-menu-1.png** — Compris. « ZTL per città » ouvert avec 10 entrées, puis « Multe, varchi e regole » replié et « Metodo e fonti ». Petit doute : « Milano », « Area C Milano », « Area B Milano » sont trois entrées séparées, et « Fascia Verde Roma » est rangée en bas, loin de « Roma ».
- **03-it-area-b-milano-1.png** — Compris. « Area B Milano vieta i veicoli più inquinanti nei giorni feriali dalle 7:30 alle 19:30 ». Barre du bas : « La tua auto entra ».
- **03-it-area-b-milano-suite1.png** — Compris : « La tua auto entra. Il divieto per i veicoli più inquinanti non è in vigore. », « Il divieto riprende lunedì 16 novembre 2026 alle 07:30 ». L'explication « la classe Euro è scritta sulla carta di circolazione (il libretto) » est exactement ce qu'il me fallait. Même chevauchement de la barre collée sur le haut de la carte.
- **03-it-area-b-milano-suite2.png / suite3.png** — Compris. Tableau « Voce / Regola » clair ; « Giornate libere per ogni veicolo : dal 1° ottobre 2026, 5 l'anno, a partire dal secondo anno in cui il veicolo è vietato » : je dois relire deux fois.
- **03-it-area-b-milano-suite4.png à suite6.png** — « Area B non è Area C » : excellent, c'est la confusion que tout le monde fait. FAQ et cartes « Pagine e strumenti collegati » lisibles, chacune résumée en une ligne avec un chiffre.
- **04-it-area-c-milano-1.png / suite1.png** — Compris. « Non attiva. Si entra senza ticket. », « Riattiva lunedì 16 novembre 2026 alle 07:30. », « Ticket giornaliero 7,50 € ». Parfait pour un samedi soir.
- **04-it-area-c-milano-suite2.png / suite3.png** — Le tableau est sous-titré « tabella dei ticket in vigore dal 30 ottobre 2023 » : je me demande si c'est encore valable, rien ne dit « toujours en vigueur en 2026 ». « Chi è escluso del tutto » : utile (même en payant, certains véhicules ne rentrent pas).
- **04-it-area-c-milano-suite4.png à suite6.png** — « Area C, Area B e la sera » : très bon (Navigli dès 20:00, Arco della Pace dès 22:00), c'est le piège du soir. FAQ et cartes : OK.
- **05-it-chi-siamo-1.png à suite3.png** — Compris. « Perché questo sito » critique les sites qui « copiano tabelle vecchie di anni » ; « 7 città e 26 zone, verificate una per una » ; « Non vendiamo nulla, non prendiamo commissioni e non chiediamo dati di contatto » ; « Perché anche in inglese » pour les touristes. Ça inspire confiance… jusqu'à ce que je voie les dates Bologna/Firenze en page Metodo.
- **06-it-fascia-verde-roma-1.png / suite1.png** — Compris mais lourd. Barre du bas orange « Entra se non è vietata » : ambigu, je ne sais pas si « vietata » c'est moi. Le grand titre de la carte fait 5 lignes : « La tua auto entra se non è a benzina, GPL o metano fino a Euro 2, né diesel fino a Euro 3. » Puis « Divieto fino a mezzanotte. Riprende lunedì 16 novembre 2026 alle 00:00. » Compris, mais le lecteur pressé lit « La tua auto entra » et file.
- **06-it-fascia-verde-roma-suite2.png à suite6.png** — Compris. Tableau Veicolo / Vietato clair, « Fascia Verde e ZTL del centro » utile (les deux règles se cumulent). « Smog e misure temporanee… Queste misure non sono nel calcolo » : honnête.
- **07-it-metodo-1.png à suite6.png** — Compris, et c'est là que j'apprends que Bologna a pour « Data della fonte : 26 agosto 2021 » et Firenze « 30 ottobre 2023 ». Le texte dit « lo diciamo accanto al risultato », mais je n'ai pas vu de résultat Bologna/Firenze, donc je ne peux pas vérifier. La partie « Limiti » (pas d'événements, pas de cantieri, pas d'état en temps réel des varchi) est franche et utile.
- **08-it-multa-ztl-1.png** — Compris. « La multa ZTL si conta a giorni, non a passaggi » : phrase d'accroche excellente. Champs clairs. Le champ « Residenza » est en bas de l'écran.
- **08-it-multa-ztl-suite1.png** — Le menu « Residenza » est caché sous la barre collée « Da pagare entro 5 giorni 58,10 € » : je vois le libellé, pas le choix. L'encadré « Esempio: un giorno di passaggi, verbale notificato oggi — cambia una cifra per vedere il tuo risultato » est très bien. Résultat 58,10 € énorme, puis échéancier. L'ordre des dates mélange paiement et recours (sconto 19/11, giudice di pace 14/12, senza sconto 13/01, prefetto 13/01) : il faut lire attentivement.
- **08-it-multa-ztl-suite2.png** — Sous un calcul d'amende, le lien s'appelle « Metodo e fonti degli orari » : incohérent, ici je ne parle pas d'horaires.
- **08-it-multa-ztl-suite3.png à suite6.png** — Tableau par nombre de jours (1, 2, 3, 5) : très parlant (5 jours = 830 € si je ne paie pas). « Tre tipi di violazione » et « Che cosa il calcolo non sa » : clairs.
- **09-it-permessi-ztl-1.png / suite1.png** — Coince un peu. Je viens pour un permis, et je retombe sur le même outil « ZTL attiva ? » (Roma, Centro Storico diurna, « Non attiva »). L'intro le justifie (« forse il permesso non ti serve »), mais sur téléphone je dois faire deux écrans entiers avant de voir quoi que ce soit sur les permis.
- **09-it-permessi-ztl-suite2.png** — Le chapeau replié se résume à « Ogni Comune decide… Alcune regole però si ripetono. Leggi tutto il paragrafo » : ça ne m'apprend rien, j'ai envie de cliquer juste pour savoir quelles règles. Le tableau « Permessi ZTL a confronto » arrive enfin.
- **09-it-permessi-ztl-suite3.png à suite6.png** — Tableau ville par ville : clair et utile (Pavia 42 €/an, Palermo app PalerMobilità, Torino dérogation à demander dans les 10 jours). « Per Firenze e Bologna… chiedi al Comune » : honnête. « Se il permesso c'era ma la multa arriva » : très bonne section.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Vérificateur « ZTL attiva adesso? » (accueil et pages zone) | Oui, immédiatement | Oui | Oui, c'est ma question | 5 |
| Barre collée en bas avec le verdict | Oui | Oui | Oui, je n'ai pas besoin de défiler | 4 (chevauche la carte) |
| Verdicts adaptés Area B / Area C / Fascia Verde | Oui | Oui, sauf Fascia Verde trop long | Oui | 4 |
| « Manda questo risultato » | Oui | Oui | Moyennement (envoyer à un passager) | 4 |
| Calcul « Multa ZTL » | Via menu ou liens | Oui | Très | 4 (Residenza masquée) |
| Tableau multa par nombre de jours | Oui | Oui | Oui | 5 |
| Tableau Permessi a confronto | Oui, mais tard | Oui | Oui | 3 |
| Page Metodo (sources, dates, limites) | Oui | Oui | Oui pour la confiance | 4 |
| « ZTL attive oggi » et « festivi » | Seulement en lien dans un paragraphe | Non testé | Probablement très | 2 |
| FAQ en accordéon | Oui | Oui | Oui | 5 |

## 5. Enchaînement et navigation

Bon dans l'ensemble : fil d'Ariane « Home / … » sur chaque page, cartes « Pagine e strumenti collegati » bien résumées, FAQ repliées, paragraphes longs pliés par « Leggi tutto il paragrafo ». Le menu ☰ est simple. Ce qui accroche : la liste des villes couvertes n'est jamais affichée près du sélecteur ; « Fascia Verde Roma » est rangée loin de « Roma » dans le menu ; « ZTL attive oggi » est cachée dans un texte ; sur la page Permessi, l'outil générique passe avant le sujet de la page. Le même outil réapparaît sur plusieurs pages (cohérent, rassurant) mais les formules de verdict changent d'une page à l'autre (« Non attiva / Puoi entrare », « La tua auto entra », « Entra se non è vietata », « Si entra senza ticket » ; « Riattiva » / « Il divieto riprende » / « Riprende »). Chacune est compréhensible seule, l'ensemble paraît un peu disparate.

## 6. Difficultés classées

1. **07-it-metodo-suite1.png + 05-it-chi-siamo-suite1.png + 01-accueil-suite8.png** — Vécu : « Chi siamo » critique ceux qui « copiano tabelle vecchie di anni », puis Metodo montre Bologna « 26 agosto 2021 » et Firenze « 30 ottobre 2023 », et la liste « Fonti » de l'accueil n'affiche même pas de date pour Bologna. Je me sens un peu trahi(e) sur l'argument principal du site. Recommandation : afficher la même date partout (y compris Bologna dans les Fonti de l'accueil) et ajouter la date de dernière vérification humaine à côté de la date de la source, par ex. « Fonte del 26 agosto 2021, ricontrollata il 13 novembre 2026: ancora valida ». Si ce n'est pas vérifiable, le dire clairement près du résultat : « Fonte vecchia (2021): verifica il cartello al varco ».
2. **01-accueil-suite1.png, 03-…-suite1.png, 04-…-suite1.png, 06-…-suite1.png, 09-…-suite1.png** — Vécu : en faisant défiler, la barre collée se pose sur le grand titre « Non attiva » de la carte, qu'on voit coupé derrière : effet de bug. Recommandation : masquer la barre collée dès que la carte de résultat est visible à l'écran (elle n'a d'intérêt que quand la carte est hors champ).
3. **08-it-multa-ztl-suite1.png** — Vécu : le menu « Residenza » disparaît sous la barre « Da pagare entro 5 giorni 58,10 € » ; je ne sais pas ce qu'il propose. Recommandation : même correctif que ci-dessus (barre masquée tant que le formulaire ou la carte est à l'écran), ou monter « Residenza » avant « Data di notifica ».
4. **06-it-fascia-verde-roma-1.png / suite1.png** — Vécu : barre du bas « Entra se non è vietata » ambiguë, et titre de carte de 5 lignes. Recommandation : barre « Divieto attivo per auto vecchie » ; titre de la carte « Divieto attivo fino a mezzanotte », puis en sous-titre « Vietate: benzina/GPL/metano fino a Euro 2, diesel fino a Euro 3. La tua è più recente? Puoi entrare. »
5. **01-accueil-1.png / suite4.png** — Vécu : je ne sais pas quelles villes existent avant de dérouler la liste ou de lire un paragraphe tout en bas ; si je suis à Napoli, je perds du temps. Recommandation : sous le titre, « 7 città: Roma, Milano, Firenze, Bologna, Torino, Palermo, Pavia. Napoli, Verona, Genova: non ancora (orari non pubblicati in modo leggibile). »
6. **09-it-permessi-ztl-1.png / suite2.png** — Vécu : je viens pour un permis et je retombe sur l'outil horaire ; le chapeau replié « Alcune regole però si ripetono » ne dit rien. Recommandation : placer le tableau « Permessi ZTL a confronto » avant l'outil, ou ajouter en haut un lien d'ancre « Vai al confronto dei permessi città per città ↓ » ; chapeau : « Residenti, disabili, alberghi, auto elettriche: chi entra senza multa dipende dal Comune. Il confronto è qui sotto. »
7. **08-it-multa-ztl-suite2.png** — Vécu : lien « Metodo e fonti degli orari » sous un calcul d'amende. Recommandation : « Metodo e fonti della multa ». Et regrouper l'échéancier en deux blocs : « Pagare » (19/11 −30 %, 13/01 sans réduction) et « Fare ricorso » (giudice di pace 14/12, prefetto 13/01).
8. **01-accueil-suite6.png / 02-menu-1.png** — Vécu : « ZTL attive oggi » (toutes les zones allumées d'un coup) semble être la fonction la plus pratique pour un touriste, mais elle n'est qu'un lien dans un paragraphe. Recommandation : bouton sous l'outil de l'accueil « Vedi tutte le ZTL attive adesso » et entrée dans le menu.

## 7. À garder

- Titre « ZTL attiva adesso? » identique à la recherche Google, formulaire prérempli avec l'heure actuelle, verdict immédiat.
- Le format du verdict : gros mot (« Non attiva »), phrase d'action (« Puoi entrare. »), heure de reprise, « Motivo », horaires du jour.
- La source et sa date dans chaque résultat, et « verifica sempre il cartello al varco ».
- « Moto e ciclomotori entrano liberamente », « Area B non è Area C », « Area C, Area B e la sera » : les vrais pièges.
- « La multa ZTL si conta a giorni, non a passaggi » et le tableau par nombre de jours.
- L'encadré « Esempio: … cambia una cifra per vedere il tuo risultato ».
- La franchise : villes absentes expliquées, section « Limiti », « Queste misure non sono nel calcolo ».
- « Non vendiamo nulla, non prendiamo commissioni e non chiediamo dati di contatto ».

## 8. Notes

Clarté : 8/10
Facilité : 8/10
Utilité : 8/10
