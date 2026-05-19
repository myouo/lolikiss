import { type CSSProperties } from 'react';
import {
  ArrowRight,
  BookOpen,
  FolderOpen,
  Heart,
  History,
  Link as LinkIcon,
  RotateCcw,
  Save,
  Settings,
  Sparkles,
  Star,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { LanguageToggle } from '../components/LanguageToggle';
import { getTodayMascot } from '../lib/mascotRotation';
import { PresenceStars, StickerTag } from '../components/SoftUI';
import { mascotText } from '../i18n/mascotText';
import { useI18n } from '../i18n/useI18n';
import { cn } from '../lib/ui';

const menuItems = [
  { to: '/garden', label: 'START', subLabelKey: 'home.menu.garden', icon: ArrowRight },
  { to: '/projects', label: 'RECOLLECT', subLabelKey: 'home.menu.projects', icon: FolderOpen },
  { to: '/notes', label: 'MEMORIES', subLabelKey: 'home.menu.notes', icon: BookOpen },
  { to: '/links', label: 'PORTAL', subLabelKey: 'home.menu.links', icon: LinkIcon },
  { to: '/ranks', label: 'EXTRA', subLabelKey: 'home.menu.ranks', icon: Trophy },
];

const systemActions = [
  { label: 'LOG', icon: History },
  { label: 'SAVE', icon: Save },
  { label: 'LOAD', icon: RotateCcw },
  { label: 'CONFIG', icon: Settings },
];

const LogoWord = ({ text, accent }: { text: string; accent?: boolean }) => (
  <div className="group flex items-baseline leading-none">
    {text.split('').map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        className={cn(
          'sticker-text display-text relative inline-block select-none',
          accent && 'sticker-text-accent',
          accent ? 'text-[3.4rem] sm:text-[4.7rem] md:text-[5.7rem] xl:text-[6.6rem]' : 'text-[4.7rem] sm:text-[6.8rem] md:text-[8rem] xl:text-[10rem]',
        )}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.08 }}
        whileHover={{ y: -16, rotate: index % 2 === 0 ? 8 : -8, scale: 1.08 }}
      >
        {char === 'i' ? (
          <span className="relative inline-block">
            <span className="opacity-0">i</span>
            <span className="absolute inset-0 flex flex-col items-center justify-center">
              <Heart className="mb-[-0.42em] h-[0.34em] w-[0.34em] text-pink-300" fill="currentColor" />
              <span className="leading-none">|</span>
            </span>
          </span>
        ) : (
          char
        )}
      </motion.span>
    ))}
  </div>
);

const VNMenuButton = ({ to, label, subLabel, icon: Icon }: { to: string; label: string; subLabel: string; icon: LucideIcon }) => (
  <Link
    to={to}
    className="vn-choice group flex min-h-[4.75rem] w-full items-center justify-between rounded-l-full rounded-r-2xl px-6 py-3 sm:w-[19rem]"
  >
    <span className="flex min-w-0 flex-col">
      <span className="system-text text-main transition-colors group-hover:text-accent">{label}</span>
      <span className="hand-text mt-1 truncate text-xl font-bold leading-none text-muted transition-colors group-hover:text-accent">
        {subLabel}
      </span>
    </span>
    <span className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/45 text-accent transition-all group-hover:scale-105 group-hover:bg-pink-400 group-hover:text-white">
      <Icon className="h-5 w-5" />
    </span>
  </Link>
);

const PhotoStage = ({ image, alt, label, style }: { image: string; alt: string; label: string; style: CSSProperties }) => (
  <motion.section
    className="relative z-10 mx-auto flex h-[27rem] w-full max-w-[29rem] items-end justify-center md:h-[31rem] xl:h-[34rem]"
    style={style}
    initial={{ y: 22, opacity: 0, scale: 0.96 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ delay: 0.18, type: 'spring', stiffness: 120, damping: 17 }}
  >
    <div
      className="glass-panel absolute inset-x-5 bottom-6 h-[66%] rounded-[3rem]"
      style={{ background: 'linear-gradient(145deg, var(--glass), var(--mascot-soft))' }}
    />
    <div className="absolute left-7 top-6 z-30">
      <div className="system-badge system-text px-3.5 py-2">{label}</div>
    </div>
    <Sparkles className="absolute left-8 top-16 z-30 h-8 w-8 text-amber-300" />
    <Heart className="absolute right-9 top-20 z-30 h-7 w-7 -rotate-12 text-pink-300" fill="currentColor" />
    <Star className="absolute bottom-28 right-6 z-30 h-10 w-10 rotate-12 text-purple-200/80" fill="currentColor" />

    <motion.img
      src={image}
      alt={alt}
      className="relative z-20 h-[24rem] max-h-[68vh] w-auto object-contain object-bottom drop-shadow-[0_18px_28px_rgba(244,114,182,0.22)] md:h-[28.5rem] xl:h-[31rem]"
      animate={{ y: [0, -8, 0], rotate: [-1, 0.4, -1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      draggable={false}
    />
  </motion.section>
);

export const Home = () => {
  const { t } = useI18n();
  const todayMascot = getTodayMascot();
  const mascotMood = mascotText(t, todayMascot, 'mood');
  const mascotStyle = {
    '--mascot-accent': todayMascot.visualTheme.accentColor,
    '--mascot-soft': todayMascot.visualTheme.softColor,
  } as CSSProperties;

  return (
    <div className="relative grid min-h-screen grid-cols-1 items-center gap-8 overflow-hidden px-5 pb-8 pt-10 sm:px-8 md:px-10 xl:grid-cols-[minmax(20rem,1.05fr)_minmax(22rem,0.82fr)_minmax(19rem,0.72fr)] xl:gap-8 xl:px-14">
      <div className="absolute right-5 top-5 z-20">
        <LanguageToggle compact />
      </div>

      <motion.section
        className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-start xl:max-w-none"
        initial={{ x: -28, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <Sparkles className="absolute -left-3 -top-7 h-12 w-12 text-amber-300 sm:-left-8 sm:-top-10 sm:h-16 sm:w-16" />
        <div className="flex flex-col">
          <LogoWord text="lolikiss" />
          <div className="-mt-5 ml-3 sm:-mt-9 sm:ml-5">
            <LogoWord text="love" accent />
          </div>
        </div>

        <div className="mt-8 h-3 w-full max-w-md overflow-hidden rounded-full border border-white/55 bg-white/35">
          <motion.div
            className="h-full rounded-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.55)]"
            animate={{ width: ['22%', '58%', '38%', '72%', '22%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          className="glass-panel glass-panel-strong mt-7 w-full max-w-md rounded-[2rem] p-5 sm:p-6"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.24, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <div className="mb-4 flex items-start gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem] border border-white/60 bg-white/45 text-accent"
              style={{ color: todayMascot.visualTheme.accentColor }}
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="system-text text-accent">{t('home.systemMessage')}</div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="system-text text-soft">{todayMascot.displayName}</span>
                <PresenceStars level={todayMascot.presenceLevel} />
              </div>
            </div>
          </div>
          <p className="hand-text text-2xl font-bold leading-tight text-muted">"{mascotText(t, todayMascot, 'greeting')}"</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <StickerTag>{t('home.mood')}: {mascotMood}</StickerTag>
            <StickerTag>{t('home.path')}: {t(`route.${todayMascot.suggestedPath}`)}</StickerTag>
          </div>
        </motion.div>
      </motion.section>

      <PhotoStage image={todayMascot.assets.standing} alt={mascotText(t, todayMascot, 'alt')} label={t('home.todayVisitor')} style={mascotStyle} />

      <motion.section
        className="relative z-10 mx-auto flex w-full max-w-md flex-col items-stretch gap-3 xl:items-end"
        initial={{ x: 28, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 18 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.to}
            className="w-full sm:w-auto"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.24 + index * 0.05, type: 'spring', stiffness: 140, damping: 18 }}
          >
            <VNMenuButton to={item.to} label={item.label} subLabel={t(item.subLabelKey)} icon={item.icon} />
          </motion.div>
        ))}

        <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-end">
          {systemActions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.label}
                type="button"
                className="group flex h-14 w-14 flex-col items-center justify-center rounded-2xl border border-white/50 bg-white/25 text-soft transition-all hover:-translate-y-1 hover:bg-white/45 hover:text-accent"
                aria-label={action.label}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:-rotate-6" />
                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em]">{action.label}</span>
              </button>
            );
          })}
        </div>
      </motion.section>

      <footer className="pointer-events-none z-10 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-soft xl:fixed xl:bottom-6 xl:left-10 xl:text-left">
        <div>{t('home.footer.version')}</div>
        <div className="hand-text mt-1 text-sm normal-case tracking-normal">{t('home.footer.copyright')}</div>
      </footer>
    </div>
  );
};
