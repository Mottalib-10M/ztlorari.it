/** Home (pagina pilastro) : testo delle due lingue in src/content/home/{it,en}.ts. Resa : components/HomePage.astro. */
import type { PageText, Lang } from '../lib/guide-types';
import { it } from './home/it';
import { en } from './home/en';
type Home = Omit<PageText, 'slug' | 'card' | 'nav'>;
export const HOME: Record<Lang, Home> = { it, en };
