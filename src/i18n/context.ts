import { createContext } from 'react';

import { defaultLocale, type Locale } from './messages';

export type TranslationValues = Record<string, string | number>;

export type TFunction = (key: string, values?: TranslationValues, fallback?: string) => string;

export type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TFunction;
};

export const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  setLocale: () => undefined,
  t: (_key, _values, fallback) => fallback ?? _key,
});
