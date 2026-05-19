import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, type LucideIcon } from 'lucide-react';

import { cn, fadeUp } from '../lib/ui';

type PageShellProps = {
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'default' | 'wide';
};

export const PageShell = ({ children, className, size = 'default' }: PageShellProps) => (
  <div
    className={cn(
      'relative mx-auto w-full px-5 py-10 sm:px-7 md:px-10',
      size === 'narrow' && 'max-w-4xl',
      size === 'default' && 'max-w-5xl',
      size === 'wide' && 'max-w-6xl',
      className,
    )}
  >
    {children}
  </div>
);

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  strong?: boolean;
};

export const GlassPanel = ({ children, className, hover, strong }: GlassPanelProps) => (
  <div className={cn('glass-panel', strong && 'glass-panel-strong', hover && 'glass-hover soft-card group', className)}>
    {children}
  </div>
);

type SystemBadgeProps = {
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
};

export const SystemBadge = ({ children, icon: Icon = Sparkles, className }: SystemBadgeProps) => (
  <div className={cn('system-badge system-text px-3.5 py-2', className)}>
    <Icon className="h-4 w-4 shrink-0" />
    <span className="truncate">{children}</span>
  </div>
);

type StickerTagProps = {
  children: ReactNode;
  className?: string;
};

export const StickerTag = ({ children, className }: StickerTagProps) => (
  <span className={cn('sticker-tag px-3 py-1.5', className)}>{children}</span>
);

type HeroPanelProps = {
  eyebrow: ReactNode;
  title: string;
  copy: ReactNode;
  icon?: LucideIcon;
  side?: ReactNode;
  className?: string;
};

export const HeroPanel = ({ eyebrow, title, copy, icon, side, className }: HeroPanelProps) => (
  <motion.section
    className={cn('glass-panel hero-panel mb-8 p-6 sm:p-8 md:p-10', className)}
    {...fadeUp}
  >
    <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
      <div className="min-w-0">
        <SystemBadge icon={icon}>{eyebrow}</SystemBadge>
        <h1 className="display-text sticker-text mt-5 text-5xl leading-none sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="hand-text mt-5 max-w-2xl text-2xl font-bold leading-tight text-muted md:text-3xl">
          {copy}
        </p>
      </div>
      {side && <div className="min-w-0">{side}</div>}
    </div>
  </motion.section>
);

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  action?: ReactNode;
  className?: string;
};

export const SectionHeader = ({ eyebrow, title, action, className }: SectionHeaderProps) => (
  <div className={cn('mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between', className)}>
    <div className="min-w-0">
      <div className="system-text text-accent">{eyebrow}</div>
      <h2 className="display-text mt-1 text-3xl leading-tight text-main">{title}</h2>
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

type DialogueCardProps = {
  title: ReactNode;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
};

export const DialogueCard = ({ title, children, icon: Icon = Heart, className }: DialogueCardProps) => (
  <GlassPanel className={cn('p-5 sm:p-6', className)}>
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem] border border-white/60 bg-white/40 text-accent shadow-sm">
        <Icon className="h-5 w-5" fill="currentColor" />
      </div>
      <div className="min-w-0">
        <div className="system-text mb-2 text-accent">{title}</div>
        <div className="text-sm leading-relaxed text-muted sm:text-base">{children}</div>
      </div>
    </div>
  </GlassPanel>
);

export const PresenceStars = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1" aria-label={`Presence level ${level} of 5`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn('h-3.5 w-3.5', index < level ? 'text-amber-300' : 'text-pink-100/70')}
        fill="currentColor"
      />
    ))}
  </div>
);

export const EmptyState = ({ title, children }: { title: ReactNode; children: ReactNode }) => (
  <GlassPanel className="p-8 text-center">
    <Sparkles className="mx-auto mb-4 h-9 w-9 text-accent" />
    <h2 className="display-text text-3xl text-main">{title}</h2>
    <p className="hand-text mx-auto mt-3 max-w-md text-2xl font-bold leading-tight text-muted">{children}</p>
  </GlassPanel>
);
