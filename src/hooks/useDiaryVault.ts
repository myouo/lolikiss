import { useCallback, useEffect, useState } from 'react';

import {
  createEmptyDiaryDraft,
  deleteDiaryEntry,
  hasDiaryPasscode,
  isDiaryUnlocked,
  loadDiaryEntries,
  persistDiaryEntries,
  setDiaryPasscode,
  setDiaryUnlocked,
  toDiaryDraft,
  upsertDiaryEntry,
  verifyDiaryPasscode,
  type DiaryDraft,
  type DiaryEntry,
} from '../lib/diary';

export const useDiaryVault = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [hasPasscode, setHasPasscode] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setEntries(loadDiaryEntries());
    setHasPasscode(hasDiaryPasscode());
    setUnlocked(isDiaryUnlocked());
  }, []);

  const persist = useCallback((nextEntries: DiaryEntry[]) => {
    const sortedEntries = [...nextEntries].sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt));
    setEntries(sortedEntries);
    persistDiaryEntries(sortedEntries);
  }, []);

  const setupPasscode = useCallback(async (passcode: string) => {
    if (passcode.trim().length < 4) {
      return false;
    }

    await setDiaryPasscode(passcode);
    setDiaryUnlocked(true);
    setHasPasscode(true);
    setUnlocked(true);
    return true;
  }, []);

  const unlock = useCallback(async (passcode: string) => {
    const verified = await verifyDiaryPasscode(passcode);
    setDiaryUnlocked(verified);
    setUnlocked(verified);
    return verified;
  }, []);

  const lock = useCallback(() => {
    setDiaryUnlocked(false);
    setUnlocked(false);
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
    hasPasscode,
    unlocked,
    setupPasscode,
    unlock,
    lock,
    saveEntry,
    removeEntry,
    createDraft: createEmptyDiaryDraft,
  };
};
