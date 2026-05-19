import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import { I18nContext, type TranslationValues } from './context';
import { defaultLocale, messages, supportedLocales, type Locale } from './messages';

const storageKey = 'lolikiss.locale';

const isLocale = (value: string | null): value is Locale => {
  return supportedLocales.includes(value as Locale);
};

const readInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(storageKey);
  return isLocale(storedLocale) ? storedLocale : defaultLocale;
};

const interpolate = (message: string, values?: TranslationValues) => {
  if (!values) {
    return message;
  }

  return Object.entries(values).reduce((result, [key, value]) => {
    return result.split(`{${key}}`).join(String(value));
  }, message);
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string, values?: TranslationValues, fallback?: string) => {
        const message = messages[locale][key] ?? messages[defaultLocale][key] ?? fallback ?? key;
        return interpolate(message, values);
      },
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
