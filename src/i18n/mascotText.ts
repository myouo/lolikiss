import type { MascotCharacter } from '../data/mascots';
import type { TFunction } from './context';

type MascotTextField = 'role' | 'mood' | 'greeting' | 'siteRelation' | 'sourceWork' | 'alt';

export const mascotText = (t: TFunction, mascot: MascotCharacter, field: MascotTextField) => {
  const fallback = field === 'alt' ? mascot.assets.alt : mascot[field];

  return t(`mascot.${mascot.id}.${field}`, undefined, fallback);
};
