import { route, ROUTES, type Locale } from './routes';
import { PAGES, pageById, GROUPS } from '../lib/guides';
import type { Group } from '../lib/guide-types';
export interface NavLink { href: string; label: string } export interface NavCategory { label: string; links: NavLink[] }
const CORE: Record<Locale, Record<string, string>> = {
  it: { home: 'ZTL attiva adesso?', method: 'Metodo e fonti', about: 'Chi siamo', widget: 'Inserisci lo strumento', contact: 'Contatti', editorial: 'Politica editoriale', privacy: 'Privacy', terms: 'Note legali', cookies: 'Cookie' },
  en: { home: 'Is the ZTL active now?', method: 'Method and sources', about: 'About', widget: 'Embed the checker', contact: 'Contact', editorial: 'Editorial policy', privacy: 'Privacy', terms: 'Legal notice', cookies: 'Cookies' },
};
const GROUP_LABEL: Record<Locale, Record<Group, string>> = {
  it: { citta: 'ZTL per città', regole: 'Multe, varchi e regole' },
  en: { citta: 'ZTL by city', regole: 'Fines, gates and rules' },
};
const SITE: Record<Locale, string> = { it: 'Il sito', en: 'Site' };
export const label = (id: string, lang: Locale) => CORE[lang][id] ?? pageById(id)?.[lang]?.nav ?? id;
const has = (id: string, lang: Locale) => !!ROUTES.find((r) => r.id === id)?.paths[lang];
const link = (id: string, lang: Locale): NavLink => ({ href: route(id, lang), label: label(id, lang) });
const inGroup = (g: Group, lang: Locale) => PAGES.filter((p) => p.group === g && p[lang]).sort((a, b) => a.order - b.order).map((p) => link(p.id, lang));
export function navCategories(lang: Locale): NavCategory[] {
  return GROUPS.map((g) => ({ label: GROUP_LABEL[lang][g], links: inGroup(g, lang) })).filter((c) => c.links.length);
}
export const navDirect = (lang: Locale): NavLink[] => [link('method', lang)];
export const footerColumns = (lang: Locale): NavCategory[] => [...navCategories(lang), { label: SITE[lang], links: ['home', 'method', 'about', 'contact', 'editorial', 'widget', 'terms', 'privacy', 'cookies'].filter((i) => has(i, lang)).map((i) => link(i, lang)) }];
export const popularLinks = (_lang: Locale): NavLink[] => [];
