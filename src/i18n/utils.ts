import { defaultLocale, locales, ui, type Locale, type UIKey } from './ui';

// Mapping of canonical page keys to URL slugs per locale.
// Italian (default) lives at root paths; English lives under /en/.
const pageSlugs: Record<Locale, Record<string, string>> = {
  it: {
    home: '/',
    about: '/associazione',
    school: '/scuola',
    sustainability: '/sostenibilita',
    gallery: '/gallery',
    events: '/eventi',
    donate: '/donazioni',
  },
  en: {
    home: '/en',
    about: '/en/about',
    school: '/en/school',
    sustainability: '/en/sustainability',
    gallery: '/en/gallery',
    events: '/en/events',
    donate: '/en/donate',
  },
};

export function getLocaleFromPath(pathname: string): Locale {
  const trimmed = pathname.replace(/^\/+/, '');
  const first = trimmed.split('/')[0];
  if ((locales as readonly string[]).includes(first)) return first as Locale;
  return defaultLocale;
}

export function getLocaleFromUrl(url: URL | { pathname: string }): Locale {
  return getLocaleFromPath(url.pathname);
}

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key];
}

export function useTranslations(locale: Locale) {
  return (key: UIKey) => t(locale, key);
}

export function pagePath(locale: Locale, key: keyof (typeof pageSlugs)['it']): string {
  return pageSlugs[locale][key] ?? pageSlugs[defaultLocale][key];
}

// Given a current URL path, find its canonical page key (e.g. '/scuola' -> 'school').
function findPageKey(pathname: string): string | null {
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  for (const loc of locales) {
    for (const [key, slug] of Object.entries(pageSlugs[loc])) {
      const slugNorm = slug.endsWith('/') && slug.length > 1 ? slug.slice(0, -1) : slug;
      if (slugNorm === normalized) return key;
    }
  }
  return null;
}

// Map a path in one locale to the equivalent path in another locale.
// Falls back to the locale's home page if no equivalent is known.
export function localizedPath(currentPathname: string, targetLocale: Locale): string {
  const key = findPageKey(currentPathname);
  if (key) return pagePath(targetLocale, key as keyof (typeof pageSlugs)['it']);
  return pagePath(targetLocale, 'home');
}

export { locales, defaultLocale };
export type { Locale };
