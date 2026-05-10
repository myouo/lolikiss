import smu6aStanding from '../assets/images/home/smu6a.png';

export type SiteRouteKey = 'garden' | 'projects' | 'notes' | 'links' | 'ranks';
export type MascotPageKey = 'home' | SiteRouteKey;

export type MascotCharacter = {
  id: string;
  displayName: string;
  sourceWork: string;
  isCanon: boolean;
  homepageEligible: boolean;
  priority: number;
  presenceLevel: 1 | 2 | 3 | 4 | 5;
  rotationWeight: number;
  tags: string[];
  role: string;
  mood: string;
  suggestedPath: SiteRouteKey;
  greeting: string;
  siteRelation: string;
  visualTheme: {
    accentColor: string;
    softColor: string;
    motifs: string[];
  };
  pageAffinity: Partial<Record<MascotPageKey, number>>;
  assets: {
    standing: string;
    alt: string;
  };
  attribution: {
    source?: string;
    usageNote?: string;
    replacementPlanned?: boolean;
    isUserProvided?: boolean;
  };
};

export const mascots: MascotCharacter[] = [
  {
    id: 'smu6a-soft-visitor',
    displayName: 'Soft Visitor',
    sourceWork: 'lolikiss.love placeholder canon',
    isCanon: false,
    homepageEligible: true,
    priority: 5,
    presenceLevel: 3,
    rotationWeight: 6,
    tags: ['homepage', 'soft guide', 'pink glass', 'prologue'],
    role: 'title screen guide',
    mood: 'sleepy but happy',
    suggestedPath: 'garden',
    greeting: 'Ready for a new adventure in the softest corner of the internet?',
    siteRelation: 'She keeps the title screen warm until the canon-first mascot roster is filled with sourced character entries.',
    visualTheme: {
      accentColor: '#f472b6',
      softColor: '#fce7f3',
      motifs: ['heart', 'sparkle', 'cat bell'],
    },
    pageAffinity: {
      home: 10,
      garden: 8,
      notes: 5,
      projects: 4,
    },
    assets: {
      standing: smu6aStanding,
      alt: 'Soft blonde mascot-style character standing on the lolikiss.love title screen',
    },
    attribution: {
      usageNote: 'Temporary user-provided / local placeholder asset for the homepage mascot system.',
      replacementPlanned: true,
      isUserProvided: true,
    },
  },
  {
    id: 'sakura-dream-keeper',
    displayName: 'Sakura Kinomoto',
    sourceWork: 'Cardcaptor Sakura',
    isCanon: true,
    homepageEligible: false,
    priority: 5,
    presenceLevel: 4,
    rotationWeight: 4,
    tags: ['magic', 'storybook', 'gentle courage', 'stars'],
    role: 'dream keeper',
    mood: 'bright and careful',
    suggestedPath: 'garden',
    greeting: 'A small key turns softly, and today’s garden opens with a little courage.',
    siteRelation: 'She represents the site’s storybook magic, gentle bravery, stars, keys, and soft protective energy.',
    visualTheme: {
      accentColor: '#fb7185',
      softColor: '#ffe4e6',
      motifs: ['star wand', 'wings', 'sealed card'],
    },
    pageAffinity: {
      home: 8,
      garden: 10,
      links: 5,
      ranks: 8,
    },
    assets: {
      standing: smu6aStanding,
      alt: 'Temporary placeholder standing image for Sakura Kinomoto from Cardcaptor Sakura',
    },
    attribution: {
      usageNote: 'Canon character data stub; replace placeholder art with sourced or user-provided material before public use.',
      replacementPlanned: true,
      isUserProvided: false,
    },
  },
  {
    id: 'chino-quiet-cafe',
    displayName: 'Chino Kafuu',
    sourceWork: 'Is the Order a Rabbit?',
    isCanon: true,
    homepageEligible: false,
    priority: 4,
    presenceLevel: 3,
    rotationWeight: 3,
    tags: ['quiet', 'cafe', 'lavender', 'diary'],
    role: 'quiet café angel',
    mood: 'calm and observant',
    suggestedPath: 'notes',
    greeting: 'The notes room is quiet today. Please read slowly, like holding a warm cup.',
    siteRelation: 'She fits the diary and memory side of the site: quiet reading, porcelain softness, and gentle pauses.',
    visualTheme: {
      accentColor: '#c4b5fd',
      softColor: '#f3e8ff',
      motifs: ['teacup', 'rabbit', 'window light'],
    },
    pageAffinity: {
      home: 5,
      garden: 6,
      notes: 10,
      ranks: 7,
    },
    assets: {
      standing: smu6aStanding,
      alt: 'Temporary placeholder standing image for Chino Kafuu from Is the Order a Rabbit?',
    },
    attribution: {
      usageNote: 'Canon character data stub; replace placeholder art with sourced or user-provided material before public use.',
      replacementPlanned: true,
      isUserProvided: false,
    },
  },
  {
    id: 'bocchi-shy-signal',
    displayName: 'Hitori Gotoh',
    sourceWork: 'Bocchi the Rock!',
    isCanon: true,
    homepageEligible: false,
    priority: 4,
    presenceLevel: 3,
    rotationWeight: 3,
    tags: ['music', 'shy', 'pink', 'tiny storm'],
    role: 'shy guitar signal',
    mood: 'nervous but glowing',
    suggestedPath: 'projects',
    greeting: 'A tiny sound check is running. Maybe one small project is ready to be opened.',
    siteRelation: 'She brings awkward creativity, stage fright, and the courage to show small works without making them corporate.',
    visualTheme: {
      accentColor: '#f9a8d4',
      softColor: '#fce7f3',
      motifs: ['guitar pick', 'cable', 'stage light'],
    },
    pageAffinity: {
      home: 6,
      projects: 10,
      notes: 6,
      ranks: 8,
    },
    assets: {
      standing: smu6aStanding,
      alt: 'Temporary placeholder standing image for Hitori Gotoh from Bocchi the Rock!',
    },
    attribution: {
      usageNote: 'Canon character data stub; replace placeholder art with sourced or user-provided material before public use.',
      replacementPlanned: true,
      isUserProvided: false,
    },
  },
];

export const homepageMascots = mascots.filter((mascot) => mascot.homepageEligible);
