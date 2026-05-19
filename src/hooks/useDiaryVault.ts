import { useCallback, useState } from 'react';

import {
  createEmptyDiaryDraft,
  deleteDiaryEntry,
  loadDiaryEntries,
  persistDiaryEntries,
  toDiaryDraft,
  upsertDiaryEntry,
  type DiaryDraft,
  type DiaryEntry,
} from '../lib/diary';

export const useDiaryVault = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>(loadDiaryEntries);

  const persist = useCallback((nextEntries: DiaryEntry[]) => {
    const sortedEntries = [...nextEntries].sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt));
    setEntries(sortedEntries);
    persistDiaryEntries(sortedEntries);
  }, []);

  const saveEntry = useCallback(
    (draft: DiaryDraft) => {
      const nextEntries = upsertDiaryEntry(entries, draft);
      persist(nextEntries);
      return toDiaryDraft(nextEntries[0]);
    },
    [entries, persist],
  );

  const removeEntry = useCallback(
    (id: string) => {
      persist(deleteDiaryEntry(entries, id));
    },
    [entries, persist],
  );

  return {
    entries,
    saveEntry,
    removeEntry,
    createDraft: createEmptyDiaryDraft,
  };
};
