export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'it';

// Company info shared across locales (raw values like IBAN, email, etc.)
export const companyInfo = {
  mail: 'info@sudin.org',
  fiscalCode: '94100040305',
  cc: '11193398',
  bank: 'BANCA POPOLARE ETICA, filiale di Padova',
  bic: 'ABI 05018, CAB 12101, CIN J',
  iban: 'IT 15 J 05018 12101 000011193398',
};

export const companyAddress = {
  it: 'Via Torino, 77 — 33100 Udine',
  en: 'Via Torino, 77 — 33100 Udine, Italy',
} as const;

export const companyName = {
  it: 'Associazione Sudin Onlus',
  en: 'Sudin Onlus',
} as const;

export const ui = {
  it: {
    // Site
    'site.motto': 'Building together for South Sudan',

    // Navigation
    'nav.about': 'Associazione',
    'nav.school': 'La scuola',
    'nav.sustainability': 'Sostenibilità',
    'nav.gallery': 'Gallery',
    'nav.events': 'Eventi',
    'nav.donate': 'Donazioni',
    'nav.donateAction': 'Dona',

    // Page titles
    'page.about': 'Associazione',
    'page.school': 'La scuola',
    'page.sustainability': 'Sostenibilità',
    'page.gallery': 'Gallery',
    'page.events': 'Eventi',
    'page.donate': 'Donazioni',

    // CTAs
    'cta.donate.title': 'Supporta Sudin',
    'cta.donate.subtitle': 'Dai il tuo contributo',
    'cta.donate.button': 'Pagina Donazioni',

    // Footer
    'footer.address': 'Indirizzo',
    'footer.mail': 'Mail',
    'footer.fiscalCode': 'CF',
    'footer.friends': 'Siti amici',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2025 Sudin.org',

    // Header
    'header.language': 'Lingua',
    'header.toggleTheme': 'Cambia tra modalità scura e chiara',

    // Gallery
    'gallery.collecting': 'Stiamo raccogliendo le foto più significative dei nostri progetti.',
  },
  en: {
    // Site
    'site.motto': 'Building together for South Sudan',

    // Navigation
    'nav.about': 'Association',
    'nav.school': 'The school',
    'nav.sustainability': 'Sustainability',
    'nav.gallery': 'Gallery',
    'nav.events': 'Events',
    'nav.donate': 'Donate',
    'nav.donateAction': 'Donate',

    // Page titles
    'page.about': 'Association',
    'page.school': 'The school',
    'page.sustainability': 'Sustainability',
    'page.gallery': 'Gallery',
    'page.events': 'Events',
    'page.donate': 'Donate',

    // CTAs
    'cta.donate.title': 'Support Sudin',
    'cta.donate.subtitle': 'Make a contribution',
    'cta.donate.button': 'Donations page',

    // Footer
    'footer.address': 'Address',
    'footer.mail': 'E-mail',
    'footer.fiscalCode': 'Tax ID',
    'footer.friends': 'Partner sites',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2025 Sudin.org',

    // Header
    'header.language': 'Language',
    'header.toggleTheme': 'Toggle between dark and light mode',

    // Gallery
    'gallery.collecting': 'We are gathering the most meaningful photos from our projects.',
  },
} as const;

export type UIKey = keyof (typeof ui)[Locale];
