import { ExternalLink, FolderOpen, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { GlassPanel, HeroPanel, PageShell, SectionHeader, StickerTag } from '../components/SoftUI';
import { useI18n } from '../i18n/useI18n';
import { fadeUp } from '../lib/ui';

const projects = [
  {
    slot: '01',
    title: 'Pixel Dreamer',
    descriptionKey: 'projects.pixel.description',
    statusKey: 'status.completed',
    tags: ['React', 'TypeScript', 'Canvas'],
    link: '#',
    github: '#',
    noteKey: 'projects.pixel.note',
  },
  {
    slot: '02',
    title: 'Lofi Garden',
    descriptionKey: 'projects.lofi.description',
    statusKey: 'status.dreaming',
    tags: ['Three.js', 'Web Audio', 'Motion'],
    link: '#',
    github: '#',
    noteKey: 'projects.lofi.note',
  },
  {
    slot: '03',
    title: 'Note Whisper',
    descriptionKey: 'projects.note.description',
    statusKey: 'status.archived',
    tags: ['Next.js', 'WebCrypto', 'Writing'],
    link: '#',
    github: '#',
    noteKey: 'projects.note.note',
  },
  {
    slot: '04',
    title: 'Mascot Registry',
    descriptionKey: 'projects.mascot.description',
    statusKey: 'status.active',
    tags: ['Data Model', 'ACG', 'UX System'],
    link: '#',
    github: '#',
    noteKey: 'projects.mascot.note',
  },
];

export const Projects = () => {
  const { t } = useI18n();

  return (
    <PageShell>
      <HeroPanel
        icon={FolderOpen}
        eyebrow={t('projects.eyebrow', { count: String(projects.length).padStart(2, '0') })}
        title="recollect"
        copy={t('projects.copy')}
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 text-accent">{t('projects.archiveRule')}</div>
            <p className="hand-text text-2xl font-bold leading-tight text-main">
              {t('projects.archiveRule.copy')}
            </p>
          </GlassPanel>
        }
      />

      <SectionHeader
        eyebrow={t('projects.saveSlots')}
        title={t('projects.collectionShelf')}
        action={<StickerTag>{t('projects.hover')}</StickerTag>}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.slot} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.06 }}>
            <GlassPanel hover className="h-full p-6 sm:p-7">
              <Sparkles className="absolute right-6 top-6 h-6 w-6 text-amber-300 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="system-text text-accent">SAVE SLOT {project.slot}</div>
                  <h2 className="display-text mt-2 text-3xl leading-tight text-main">{project.title}</h2>
                </div>
                <StickerTag>{t(project.statusKey)}</StickerTag>
              </div>

              <p className="text-sm leading-relaxed text-muted">{t(project.descriptionKey)}</p>

              <div className="my-6 rounded-[1.8rem] border border-dashed border-pink-200/60 bg-white/20 p-4">
                <div className="paper-texture flex aspect-[16/8] items-center justify-center rounded-[1.25rem] border border-white/45 bg-white/25 text-center">
                  <div>
                    <div className="system-text text-accent">{t('projects.polaroid')}</div>
                    <p className="hand-text mt-2 text-xl font-bold leading-tight text-muted">{t(project.noteKey)}</p>
                  </div>
                </div>
              </div>

              <div className="mb-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <StickerTag key={tag}>{tag}</StickerTag>
                ))}
              </div>

              <div className="soft-divider mb-5" />

              <div className="flex flex-wrap items-center gap-4">
                <a href={project.link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:text-accent-strong">
                  <ExternalLink className="h-4 w-4" />
                  {t('projects.openMemory')}
                </a>
                <a href={project.github} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-soft transition-colors hover:text-main">
                  <Github className="h-4 w-4" />
                  {t('projects.source')}
                </a>
              </div>
            </GlassPanel>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
};
