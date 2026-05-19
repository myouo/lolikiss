import { BookOpen, Calendar, Heart, Shuffle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { GlassPanel, HeroPanel, PageShell, SectionHeader, StickerTag } from '../components/SoftUI';
import { useI18n } from '../i18n/useI18n';
import { fadeUp } from '../lib/ui';

const notes = [
  {
    memory: '012',
    date: '2026.05.19',
    titleKey: 'notes.012.title',
    tagKey: 'notes.012.tag',
    excerptKey: 'notes.012.excerpt',
  },
  {
    memory: '011',
    date: '2026.05.12',
    titleKey: 'notes.011.title',
    tagKey: 'notes.011.tag',
    excerptKey: 'notes.011.excerpt',
  },
  {
    memory: '010',
    date: '2026.05.05',
    titleKey: 'notes.010.title',
    tagKey: 'notes.010.tag',
    excerptKey: 'notes.010.excerpt',
  },
];

export const Notes = () => {
  const { t } = useI18n();

  return (
    <PageShell size="narrow">
      <HeroPanel
        icon={BookOpen}
        eyebrow={t('notes.eyebrow')}
        title="memories"
        copy={t('notes.copy')}
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 text-accent">{t('notes.readingRule')}</div>
            <p className="hand-text text-2xl font-bold leading-tight text-main">
              {t('notes.readingRule.copy')}
            </p>
          </GlassPanel>
        }
      />

      <SectionHeader
        eyebrow={t('notes.dreamLog')}
        title={t('notes.paperFragments')}
        action={
          <button type="button" className="vn-choice flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            <Shuffle className="h-4 w-4" />
            {t('notes.roll')}
          </button>
        }
      />

      <div className="space-y-6">
        {notes.map((note, index) => (
          <motion.article
            key={note.memory}
            {...fadeUp}
            whileHover={{ rotate: index % 2 === 0 ? 0.45 : -0.45 }}
            transition={{ ...fadeUp.transition, delay: index * 0.06 }}
          >
            <GlassPanel hover className="paper-texture p-6 sm:p-8">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-soft">
                  <Calendar className="h-4 w-4 text-accent" />
                  {note.date}
                </div>
                <StickerTag>{t(note.tagKey)}</StickerTag>
              </div>

              <div className="system-text text-accent">MEMORY #{note.memory}</div>
              <h2 className="display-text mt-2 text-3xl leading-tight text-main transition-colors group-hover:text-accent">
                {t(note.titleKey)}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{t(note.excerptKey)}</p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="soft-divider flex-1" />
                <Heart className="h-5 w-5 text-pink-300 opacity-60 transition-opacity group-hover:opacity-100" fill="currentColor" />
                <Sparkles className="h-5 w-5 text-amber-300 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </GlassPanel>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
};
