import { localeLabels, supportedLocales } from '../i18n/messages';
import { useI18n } from '../i18n/useI18n';
import { cn } from '../lib/ui';

export const LanguageToggle = ({ compact = false }: { compact?: boolean }) => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn(
        'glass-panel glass-panel-strong flex w-fit items-center gap-1 rounded-full p-1',
        compact && 'bg-white/30',
      )}
      aria-label={t('language.toggle')}
    >
      {supportedLocales.map((item) => (
        <button
          key={item}
          type="button"
          className={cn(
            'rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all',
            locale === item ? 'bg-pink-400 text-white shadow-sm' : 'text-muted hover:bg-white/40 hover:text-accent',
          )}
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
        >
          {localeLabels[item]}
        </button>
      ))}
    </div>
  );
};
