type ClassValue = string | false | null | undefined;

export const cn = (...values: ClassValue[]) => values.filter(Boolean).join(' ');

export const fadeUp = {
  initial: { y: 18, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: 'spring', stiffness: 130, damping: 18 },
} as const;
