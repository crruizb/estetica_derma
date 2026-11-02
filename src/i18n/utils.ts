import {ui, defaultLang} from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
// Prefixes a site path with the language segment (Spanish lives at the root).
export function localizedPath(lang: keyof typeof ui, path = "") {
  return lang === defaultLang ? `/${path}` : `/${lang}/${path}`;
}
