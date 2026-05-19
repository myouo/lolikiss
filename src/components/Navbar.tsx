import { BookHeart, BookOpen, FolderOpen, Heart, Link as LinkIcon, Sparkles, Trophy, Trees } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import { LanguageToggle } from './LanguageToggle';
import { useI18n } from '../i18n/useI18n';
import { cn } from '../lib/ui';

const navItems = [
  { to: '/garden', labelKey: 'nav.garden', command: 'START', icon: Trees },
  { to: '/projects', labelKey: 'nav.projects', command: 'RECOLLECT', icon: FolderOpen },
  { to: '/notes', labelKey: 'nav.notes', command: 'MEMORIES', icon: BookOpen },
  { to: '/diary', labelKey: 'nav.diary', command: 'DIARY', icon: BookHeart },
  { to: '/links', labelKey: 'nav.links', command: 'PORTAL', icon: LinkIcon },
  { to: '/ranks', labelKey: 'nav.ranks', command: 'EXTRA', icon: Trophy },
];

export const Navbar = () => {
  const { t } = useI18n();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="glass-panel glass-panel-strong group flex w-fit items-center gap-3 rounded-full px-4 py-2.5"
          aria-label={t('nav.backHome')}
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/40 text-accent">
            <Heart className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" />
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-amber-300" />
          </span>
          <span className="display-text text-xl leading-none text-main">lolikiss</span>
        </Link>

        <div className="glass-panel glass-panel-strong relative flex max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-2 shadow-sm sm:gap-2">
          <div className="pointer-events-none absolute -top-2 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/50 bg-pink-400 px-3 py-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-white shadow-sm md:block">
            {t('nav.chapter')}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'group flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all sm:px-4',
                    isActive
                      ? 'bg-pink-400 text-white shadow-[0_10px_24px_rgba(244,114,182,0.24)]'
                      : 'text-muted hover:bg-white/40 hover:text-accent',
                  )
                }
                title={item.command}
              >
                <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:-rotate-6" />
                <span>{t(item.labelKey)}</span>
              </NavLink>
            );
          })}
        </div>

        <div className="absolute right-4 top-4 sm:static">
          <LanguageToggle compact />
        </div>
      </div>
    </nav>
  );
};
