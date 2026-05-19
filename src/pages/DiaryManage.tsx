import { FormEvent, useEffect, useMemo, useState } from 'react';
import { BookHeart, Eye, Plus, Save, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

import { MarkdownView } from '../components/MarkdownView';
import { GlassPanel, HeroPanel, PageShell, SectionHeader, StickerTag } from '../components/SoftUI';
import { useDiaryVault } from '../hooks/useDiaryVault';
import { createEmptyDiaryDraft, type DiaryDraft } from '../lib/diary';
import { fadeUp } from '../lib/ui';

const tagsToString = (tags: string[]) => tags.join(', ');
const stringToTags = (value: string) =>
  value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

export const DiaryManage = () => {
  const { entries, saveEntry, removeEntry } = useDiaryVault();
  const [draft, setDraft] = useState<DiaryDraft>(createEmptyDiaryDraft);
  const [tagText, setTagText] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    if (entries[0] && !draft.id && !draft.title && !draft.content) {
      setDraft({
        id: entries[0].id,
        title: entries[0].title,
        date: entries[0].date,
        mood: entries[0].mood,
        tags: entries[0].tags,
        content: entries[0].content,
      });
      setTagText(tagsToString(entries[0].tags));
    }
  }, [draft.content, draft.id, draft.title, entries]);

  const previewDraft = useMemo(() => ({ ...draft, tags: stringToTags(tagText) }), [draft, tagText]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const savedDraft = saveEntry(previewDraft);
    setDraft(savedDraft);
    setTagText(tagsToString(savedDraft.tags));
    setSavedMessage('已保存到本地日记存档。');
    window.setTimeout(() => setSavedMessage(''), 1800);
  };

  const handleNew = () => {
    setDraft(createEmptyDiaryDraft());
    setTagText('');
    setSavedMessage('');
  };

  const handleSelect = (entryId: string) => {
    const entry = entries.find((item) => item.id === entryId);
    if (!entry) {
      return;
    }

    setDraft({
      id: entry.id,
      title: entry.title,
      date: entry.date,
      mood: entry.mood,
      tags: entry.tags,
      content: entry.content,
    });
    setTagText(tagsToString(entry.tags));
    setSavedMessage('');
  };

  const handleDelete = () => {
    if (!draft.id) {
      return;
    }

    removeEntry(draft.id);
    handleNew();
  };

  return (
    <PageShell size="wide">
      <HeroPanel
        icon={BookHeart}
        eyebrow="Diary manager"
        title="manage"
        copy="像整理存档槽一样管理日记：写作、标签、Markdown 预览和删除都在同一个柔软工作台里。"
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 text-accent">Markdown ready</div>
            <p className="hand-text text-2xl font-bold leading-tight text-main">
              支持标题、列表、引用、代码块、粗体、斜体和链接。
            </p>
          </GlassPanel>
        }
      />

      <SectionHeader
        eyebrow="Open editor"
        title="日记管理台"
        action={
          <button type="button" onClick={handleNew} className="vn-choice flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            <Plus className="h-4 w-4" />
            new
          </button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <motion.aside {...fadeUp} className="space-y-3">
          {entries.map((entry) => (
            <button key={entry.id} type="button" onClick={() => handleSelect(entry.id)} className="block w-full text-left">
              <GlassPanel hover className={`p-4 ${draft.id === entry.id ? 'border-pink-300/70' : ''}`}>
                <div className="system-text text-accent">{entry.date}</div>
                <h2 className="display-text mt-2 text-2xl leading-tight text-main">{entry.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{entry.mood || '没有心情标签'}</p>
              </GlassPanel>
            </button>
          ))}
        </motion.aside>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="grid gap-6 lg:grid-cols-2">
          <GlassPanel className="p-5 sm:p-6" strong>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="system-text mb-2 block text-soft">Title</span>
                <input
                  value={draft.title}
                  onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                  className="w-full rounded-[1.15rem] border border-white/60 bg-white/35 px-4 py-3 text-main outline-none focus:border-pink-300"
                  placeholder="今天的小标题"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="system-text mb-2 block text-soft">Date</span>
                  <input
                    type="date"
                    value={draft.date}
                    onChange={(event) => setDraft((current) => ({ ...current, date: event.target.value }))}
                    className="w-full rounded-[1.15rem] border border-white/60 bg-white/35 px-4 py-3 text-main outline-none focus:border-pink-300"
                  />
                </label>
                <label className="block">
                  <span className="system-text mb-2 block text-soft">Mood</span>
                  <input
                    value={draft.mood}
                    onChange={(event) => setDraft((current) => ({ ...current, mood: event.target.value }))}
                    className="w-full rounded-[1.15rem] border border-white/60 bg-white/35 px-4 py-3 text-main outline-none focus:border-pink-300"
                    placeholder="困困的 / 开心"
                  />
                </label>
              </div>

              <label className="block">
                <span className="system-text mb-2 block text-soft">Tags</span>
                <input
                  value={tagText}
                  onChange={(event) => setTagText(event.target.value)}
                  className="w-full rounded-[1.15rem] border border-white/60 bg-white/35 px-4 py-3 text-main outline-none focus:border-pink-300"
                  placeholder="garden, anime, memory"
                />
              </label>

              <label className="block">
                <span className="system-text mb-2 block text-soft">Markdown</span>
                <textarea
                  value={draft.content}
                  onChange={(event) => setDraft((current) => ({ ...current, content: event.target.value }))}
                  className="min-h-[21rem] w-full resize-y rounded-[1.25rem] border border-white/60 bg-white/35 px-4 py-3 font-mono text-sm leading-relaxed text-main outline-none focus:border-pink-300"
                  placeholder="# 今天的小记忆&#10;&#10;写一点柔软的事情..."
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {previewDraft.tags.map((tag) => (
                    <StickerTag key={tag}>{tag}</StickerTag>
                  ))}
                </div>
                <div className="flex gap-2">
                  {draft.id && (
                    <button type="button" onClick={handleDelete} className="vn-choice flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                      <Trash2 className="h-4 w-4" />
                      delete
                    </button>
                  )}
                  <button type="submit" className="vn-choice flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    <Save className="h-4 w-4" />
                    save
                  </button>
                </div>
              </div>

              {savedMessage && <p className="text-sm font-bold text-accent">{savedMessage}</p>}
            </form>
          </GlassPanel>

          <GlassPanel className="paper-texture p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/50 pb-4">
              <div>
                <div className="system-text text-accent">Live preview</div>
                <h2 className="display-text mt-1 text-3xl leading-tight text-main">{previewDraft.title || '未命名日记'}</h2>
              </div>
              <Eye className="h-5 w-5 text-accent" />
            </div>
            <MarkdownView content={previewDraft.content} emptyText="预览会在这里轻轻出现。" />
          </GlassPanel>
        </motion.div>
      </div>
    </PageShell>
  );
};
