/** Types des mini-simulateurs (RECETTE §9.3). Chaque site décrit les siens dans `lib/mini-specs.ts`.
 *  Tous les champs ajoutés le 2026-11-09 sont facultatifs : une spec plus ancienne reste valable telle quelle. */
export interface MiniInput { id: string; label: string; def: number; unit?: string; max?: number; decimals?: number; help?: string; options?: Array<{ value: string; label: string }>;
  /** Champ facultatif rangé dans le repli « Plus de détails » ; sa valeur actuelle reste lisible dans le titre du repli. */
  avance?: boolean;
  /** Champ montré seulement quand il change le résultat (financecertcost.com, 2026-11-08 : un champ sans effet se lit
   *  comme une panne). Un champ caché garde sa valeur et ne compte pas parmi les champs modifiables. */
  showIf?: (v: Record<string, number>) => boolean }
export interface MiniOut { head: [string, string]; rows: Array<[string, string]>; note?: string;
  /** Ligne d'alerte en gras juste sous le gros chiffre : ce que le chiffre laisse de côté, ou ce qui le rend
   *  inapplicable pour cette réponse (financecertcost.com, 2026-11-09 : « la préparation, la plus grosse ligne, est cachée »). */
  alert?: string;
  /** Lien qui dépend de la réponse : [libellé, chemin] (« Not eligible? See the other route → »). Remplace le lien
   *  fixe de la spec (`cta` + `href`) pour cette réponse ; chemin en dur, sans importer le routeur côté client. */
  go?: [string, string] }
export interface MiniSpec {
  title: string; cta: string; inputs: MiniInput[];
  /** Ce que suppose l'exemple, en une phrase qui commence par « Example for… » dans la langue de la page
   *  (« Example for a 40-year-old with a £180,000 mortgage ») : remplace « Example with typical figures » dans la
   *  mention posée tant que rien n'est modifié. Fonction : reçoit les valeurs (celles de la page comprises). */
  exemple?: string | ((v: Record<string, number>) => string);
  /** `touched` : les champs que le lecteur a modifiés (testeurs naïfs du 2026-11-08). Tant qu'il est vide,
   *  le composant pose la mention d'exemple ; une spec peut aussi s'en servir pour taire un verdict
   *  (« vous êtes éligible ») tant que les chiffres sont ceux de l'exemple. */
  run: (v: Record<string, number>, touched?: Record<string, boolean>) => MiniOut;
}
