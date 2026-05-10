import { homepageMascots, mascots, type MascotCharacter } from '../data/mascots';

const getLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const hashString = (value: string) => {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
};

const chooseWeightedMascot = (characters: MascotCharacter[], seed: string) => {
  const totalWeight = characters.reduce((sum, character) => sum + Math.max(character.rotationWeight, 0), 0);

  if (totalWeight <= 0) {
    return [...characters].sort((a, b) => b.priority - a.priority)[0];
  }

  let target = hashString(seed) % totalWeight;

  for (const character of characters) {
    target -= Math.max(character.rotationWeight, 0);

    if (target < 0) {
      return character;
    }
  }

  return characters[0];
};

export const getTodayMascot = (date = new Date()) => {
  const eligibleMascots = homepageMascots.length > 0 ? homepageMascots : mascots;

  return chooseWeightedMascot(eligibleMascots, getLocalDateKey(date));
};

export const getTodayMascotKey = (date = new Date()) => getLocalDateKey(date);
