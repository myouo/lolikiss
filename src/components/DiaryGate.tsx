import { FormEvent, useState } from 'react';
import { Heart, LockKeyhole, Sparkles } from 'lucide-react';

import { GlassPanel, StickerTag } from './SoftUI';

type DiaryGateProps = {
  hasPasscode: boolean;
  onSetup: (passcode: string) => Promise<boolean>;
  onUnlock: (passcode: string) => Promise<boolean>;
};

export const DiaryGate = ({ hasPasscode, onSetup, onUnlock }: DiaryGateProps) => {
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage('');

    if (!hasPasscode && passcode !== confirmPasscode) {
      setMessage('两次输入的口令不一致。');
      return;
    }

    if (passcode.trim().length < 4) {
      setMessage('口令至少需要 4 个字符。');
      return;
    }

    setBusy(true);
    const ok = hasPasscode ? await onUnlock(passcode) : await onSetup(passcode);
    setBusy(false);

    if (!ok) {
      setMessage(hasPasscode ? '口令不对，日记房间还没有打开。' : '口令设置失败，请再试一次。');
    }
  };

  return (
    <GlassPanel className="mx-auto max-w-xl p-6 sm:p-8" strong>
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.4rem] border border-white/60 bg-white/35 text-accent">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <div>
          <div className="system-text text-accent">{hasPasscode ? 'Diary locked' : 'Set diary passcode'}</div>
          <h2 className="display-text mt-2 text-3xl leading-tight text-main">
            {hasPasscode ? '输入口令进入日记房间' : '先给日记房间挂上一把小锁'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            这是静态站点里的本地口令保护，适合私人设备上的轻量日记；真正敏感内容以后应接后端或加密存储。
          </p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="system-text mb-2 block text-soft">Passcode</span>
          <input
            type="password"
            value={passcode}
            onChange={(event) => setPasscode(event.target.value)}
            className="w-full rounded-[1.2rem] border border-white/60 bg-white/35 px-4 py-3 text-main outline-none transition focus:border-pink-300"
            placeholder="输入日记口令"
          />
        </label>

        {!hasPasscode && (
          <label className="block">
            <span className="system-text mb-2 block text-soft">Confirm</span>
            <input
              type="password"
              value={confirmPasscode}
              onChange={(event) => setConfirmPasscode(event.target.value)}
              className="w-full rounded-[1.2rem] border border-white/60 bg-white/35 px-4 py-3 text-main outline-none transition focus:border-pink-300"
              placeholder="再输入一次"
            />
          </label>
        )}

        {message && <p className="text-sm font-bold text-accent-strong">{message}</p>}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <StickerTag>{hasPasscode ? 'private room' : 'first setup'}</StickerTag>
          <button
            type="submit"
            disabled={busy}
            className="vn-choice flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-accent disabled:opacity-60"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            {busy ? 'checking...' : hasPasscode ? 'unlock diary' : 'save passcode'}
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </form>
    </GlassPanel>
  );
};
