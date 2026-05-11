import { getPermalink, getAsset } from './utils/permalinks';
import { pagePath, t, type Locale } from './i18n/utils';

export function getHeaderData(locale: Locale) {
  return {
    links: [
      { text: t(locale, 'nav.about'), href: getPermalink(pagePath(locale, 'about')) },
      { text: t(locale, 'nav.school'), href: getPermalink(pagePath(locale, 'school')) },
      { text: t(locale, 'nav.sustainability'), href: getPermalink(pagePath(locale, 'sustainability')) },
      { text: t(locale, 'nav.gallery'), href: getPermalink(pagePath(locale, 'gallery')) },
      { text: t(locale, 'nav.events'), href: getPermalink(pagePath(locale, 'events')) },
      { text: t(locale, 'nav.donate'), href: getPermalink(pagePath(locale, 'donate')) },
    ],
    actions: [{ text: t(locale, 'nav.donateAction'), href: getPermalink(pagePath(locale, 'donate')) }],
  };
}

export function getFooterData(locale: Locale) {
  return {
    links: [
      {
        title: t(locale, 'footer.friends'),
        links: [{ text: 'Fondazione Petrucco', href: 'https://www.fondazionepetrucco.it/', target: '_blank' }],
      },
    ],
    secondaryLinks: [{ text: t(locale, 'footer.privacy'), href: '#' }],
    socialLinks: [
      { ariaLabel: 'Mail', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'YouTube', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'LinkedIn', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: t(locale, 'footer.copyright'),
  };
}

// Backwards-compatible default exports (Italian) for any consumer
// not yet locale-aware.
export const headerData = getHeaderData('it');
export const footerData = getFooterData('it');
