import { BookOpen, FolderOpen, Heart, Link as LinkIcon, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { mascots } from '../data/mascots';
import { getTodayMascot, getTodayMascotKey } from '../lib/mascotRotation';
import { DialogueCard, GlassPanel, HeroPanel, PageShell, SectionHeader, StickerTag } from '../components/SoftUI';
import { mascotText } from '../i18n/mascotText';
import { useI18n } from '../i18n/useI18n';
import { fadeUp } from '../lib/ui';

const latestMemories = [
  { id: '001', labelKey: 'garden.memory.001', room: 'MEMORIES' },
  { id: '002', labelKey: 'garden.memory.002', room: 'RECOLLECT' },
  { id: '003', labelKey: 'garden.memory.003', room: 'GARDEN' },
];

const roomCards = [
  { to: '/projects', titleKey: 'garden.room.projects.title', command: 'RECOLLECT', textKey: 'garden.room.projects.text', icon: FolderOpen },
  { to: '/notes', titleKey: 'garden.room.notes.title', command: 'MEMORIES', textKey: 'garden.room.notes.text', icon: BookOpen },
  { to: '/links', titleKey: 'garden.room.links.title', command: 'PORTAL', textKey: 'garden.room.links.text', icon: LinkIcon },
];

const currentlyLoving = ['garden.loving.0', 'garden.loving.1', 'garden.loving.2', 'garden.loving.3'];

export const Garden = () => {
  const { t } = useI18n();
  const todayMascot = getTodayMascot();
  const todayKey = getTodayMascotKey();

  return (
    <PageShell size="wide">
      <HeroPanel
        icon={Sparkles}
        eyebrow={t('garden.eyebrow', { date: todayKey })}
        title="garden"
        copy={t('garden.copy')}
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 flex items-center gap-2 text-accent">
              <Star className="h-4 w-4" fill="currentColor" />
              {t('garden.todayMood')}
            </div>
            <div className="hand-text text-3xl font-bold leading-tight text-main">{mascotText(t, todayMascot, 'mood')}</div>
            <div className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-soft">{t('garden.guide', { name: todayMascot.displayName })}</div>
          </GlassPanel>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.section {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }}>
          <DialogueCard title={t('garden.todayVisitor')} icon={Heart}>
            <span className="hand-text block text-2xl font-bold leading-tight text-main">"{mascotText(t, todayMascot, 'greeting')}"</span>
            <span className="mt-3 block">{mascotText(t, todayMascot, 'siteRelation')}</span>
            <span className="mt-4 flex flex-wrap gap-2">
              {todayMascot.visualTheme.motifs.map((motif) => (
                <StickerTag key={motif}>{motif}</StickerTag>
              ))}
            </span>
          </DialogueCard>
        </motion.section>

        <motion.section className="grid gap-4" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <GlassPanel className="p-5">
            <div className="system-text mb-4 flex items-center gap-2 text-accent">
              <BookOpen className="h-4 w-4" />
              {t('garden.latestSystemLog')}
            </div>
            <div className="space-y-3">
              {latestMemories.map((memory) => (
                <div key={memory.id} className="rounded-[1.25rem] border border-white/50 bg-white/25 px-4 py-3 text-sm leading-relaxed text-muted">
                  <span className="system-text mr-2 text-accent">MEMORY #{memory.id}</span>
                  {t(memory.labelKey)}
                  <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.18em] text-soft">{memory.room}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-5">
            <div className="system-text mb-4 flex items-center gap-2 text-accent">
              <Heart className="h-4 w-4" fill="currentColor" />
              {t('garden.currentlyLoving')}
            </div>
            <div className="flex flex-wrap gap-2">
              {currentlyLoving.map((item) => (
                <StickerTag key={item}>{t(item)}</StickerTag>
              ))}
            </div>
          </GlassPanel>
        </motion.section>
      </div>

      <section className="mt-9">
        <SectionHeader eyebrow={t('garden.chooseRoom')} title={t('garden.routesTitle')} />
        <div className="grid gap-5 md:grid-cols-3">
          {roomCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div key={card.to} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 * index }}>
                <Link to={card.to}>
                  <GlassPanel hover className="h-full p-5">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[1.2rem] border border-white/60 bg-white/35 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="system-text text-accent">{card.command}</div>
                    <h3 className="display-text mt-2 text-3xl leading-tight text-main">{t(card.titleKey)}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{t(card.textKey)}</p>
                  </GlassPanel>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mt-9">
        <SectionHeader
          eyebrow={t('garden.rosterEyebrow')}
          title={t('garden.rosterTitle')}
          action={<StickerTag>{t('garden.presenceCards', { count: mascots.length })}</StickerTag>}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mascots.map((mascot, index) => (
            <motion.article key={mascot.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.04 * index }}>
              <GlassPanel hover className="h-full p-5">
                {mascot.id === todayMascot.id && (
                  <div className="absolute right-4 top-4 rounded-full bg-pink-400 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                    {t('garden.today')}
                  </div>
                )}
                <div className="mb-4 flex h-20 w-20 items-end justify-center overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/35 p-2">
                  <img src={mascot.assets.standing} alt={mascotText(t, mascot, 'alt')} className="h-full w-full object-contain" draggable={false} />
                </div>
                <div className="system-text text-accent">{mascotText(t, mascot, 'role')}</div>
                <h3 className="display-text mt-2 text-2xl leading-tight text-main">{mascot.displayName}</h3>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-soft">{mascotText(t, mascot, 'sourceWork')}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{mascotText(t, mascot, 'siteRelation')}</p>
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
