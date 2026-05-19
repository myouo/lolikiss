import { BookHeart, Edit3, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MarkdownView } from '../components/MarkdownView';
import { GlassPanel, HeroPanel, PageShell, SectionHeader, StickerTag } from '../components/SoftUI';
import { useDiaryVault } from '../hooks/useDiaryVault';
import { fadeUp } from '../lib/ui';

export const Diary = () => {
  const { entries } = useDiaryVault();
  const selectedEntry = entries[0];

  return (
    <PageShell size="wide">
      <HeroPanel
        icon={BookHeart}
        eyebrow="Diary room"
        title="diary"
        copy="可以直接进入的柔软日记房间。它可以写 Markdown，但阅读时仍然像纸页一样安静。"
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 flex items-center gap-2 text-accent">
              <Sparkles className="h-4 w-4" />
              Open save
            </div>
            <p className="hand-text text-2xl font-bold leading-tight text-main">
              日记不是后台数据表，而是一叠被小心收好的信纸。
            </p>
          </GlassPanel>
        }
      />

      <SectionHeader
        eyebrow="Open memories"
        title="日记阅读室"
        action={
          <Link to="/diary/manage" className="vn-choice flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            <Edit3 className="h-4 w-4" />
            manage
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <motion.aside {...fadeUp} className="space-y-3">
          {entries.map((entry) => (
            <GlassPanel key={entry.id} className="p-4" hover>
              <div className="system-text text-accent">{entry.date}</div>
              <h2 className="display-text mt-2 text-2xl leading-tight text-main">{entry.title}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tags.slice(0, 3).map((tag) => (
                  <StickerTag key={tag}>{tag}</StickerTag>
                ))}
              </div>
            </GlassPanel>
          ))}
        </motion.aside>

        <motion.article {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
          <GlassPanel className="paper-texture p-6 sm:p-8" strong>
            {selectedEntry ? (
              <>
                <div className="mb-6 flex flex-col gap-4 border-b border-white/50 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="system-text text-accent">MEMORY #{selectedEntry.date}</div>
                    <h2 className="display-text mt-2 text-4xl leading-tight text-main">{selectedEntry.title}</h2>
                    {selectedEntry.mood && <p className="hand-text mt-2 text-2xl font-bold text-muted">{selectedEntry.mood}</p>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.tags.map((tag) => (
                      <StickerTag key={tag}>{tag}</StickerTag>
                    ))}
                  </div>
                </div>
                <MarkdownView content={selectedEntry.content} emptyText="这页还没有写字。" />
              </>
            ) : (
              <div className="py-12 text-center">
                <Sparkles className="mx-auto mb-4 h-10 w-10 text-accent" />
                <p className="hand-text text-3xl font-bold text-muted">还没有日记，去管理界面写下第一篇吧。</p>
              </div>
            )}
          </GlassPanel>
        </motion.article>
      </div>
    </PageShell>
  );
};
