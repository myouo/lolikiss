export type DiaryEntry = {
  id: string;
  title: string;
  date: string;
  mood: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type DiaryDraft = {
  id?: string;
  title: string;
  date: string;
  mood: string;
  tags: string[];
  content: string;
};

const entriesKey = 'lolikiss.diary.entries.v1';

const seedEntries: DiaryEntry[] = [
  {
    id: 'seed-soft-room',
    title: '第一篇柔软日记',
    date: '2026-05-20',
    mood: '安静 / 有一点期待',
    tags: ['memory', 'garden', 'markdown'],
    createdAt: '2026-05-20T00:00:00.000Z',
    updatedAt: '2026-05-20T00:00:00.000Z',
    content: [
      '# 今天的小房间',
      '',
      '这里不是公开博客，而是一个可以直接阅读和整理的 **Diary Room**。',
      '',
      '- 可以写普通日记',
      '- 可以写 ACG 碎片',
      '- 可以写 Markdown',
      '',
      '> 可爱不是装饰堆满，而是每句话都有被好好放下的位置。',
      '',
      '```txt',
      'SAVE SLOT: diary-001',
      'STATUS: softly open',
      '```',
    ].join('\n'),
  },
];

const createId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `diary-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const today = () => new Date().toISOString().slice(0, 10);

export const createEmptyDiaryDraft = (): DiaryDraft => ({
  title: '',
  date: today(),
  mood: '',
  tags: [],
  content: '',
});

const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const loadDiaryEntries = () => {
  const entries = readJson<DiaryEntry[]>(entriesKey, seedEntries);
  return [...entries].sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt));
};

export const persistDiaryEntries = (entries: DiaryEntry[]) => {
  window.localStorage.setItem(entriesKey, JSON.stringify(entries));
};

export const upsertDiaryEntry = (entries: DiaryEntry[], draft: DiaryDraft) => {
  const now = new Date().toISOString();
  const existing = draft.id ? entries.find((entry) => entry.id === draft.id) : undefined;
  const entry: DiaryEntry = {
    id: draft.id ?? createId(),
    title: draft.title.trim() || '未命名日记',
    date: draft.date || today(),
    mood: draft.mood.trim(),
    tags: draft.tags.map((tag) => tag.trim()).filter(Boolean),
    content: draft.content.trim(),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };

  return [entry, ...entries.filter((item) => item.id !== entry.id)];
};

export const deleteDiaryEntry = (entries: DiaryEntry[], id: string) => entries.filter((entry) => entry.id !== id);

export const toDiaryDraft = (entry: DiaryEntry): DiaryDraft => ({
  id: entry.id,
  title: entry.title,
  date: entry.date,
  mood: entry.mood,
  tags: entry.tags,
  content: entry.content,
});
