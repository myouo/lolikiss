import { Book, Heart, Monitor, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { mascots } from '../data/mascots';
import { getTodayMascot, getTodayMascotKey } from '../lib/mascotRotation';

const latestMemories = [
  'A diary fragment about small beautiful things.',
  'A soft log from a late-night coding session.',
  'A dream note waiting beside the window light.',
];

const tinyWorks = [
  'Pixel Dreamer',
  'Lofi Garden',
  'Note Whisper',
];

const currentlyLoving = ['pink glass UI', 'daily mascot encounters', 'soft system labels'];

export const Garden = () => {
  const todayMascot = getTodayMascot();
  const todayKey = getTodayMascotKey();

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Sparkles className="absolute right-8 top-20 h-24 w-24 text-yellow-200/35" />
        <Heart className="absolute -left-12 bottom-28 h-36 w-36 -rotate-12 text-pink-200/30" fill="currentColor" />
      </div>

      <motion.section
        className="glass relative mb-8 overflow-hidden rounded-[3rem] border-pink-100/80 p-7 shadow-[0_22px_70px_rgba(244,114,182,0.18)] md:p-10"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute -bottom-24 left-12 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-400 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Start loaded: {todayKey}
            </div>
            <h1 className="cute-text sticker-text text-5xl leading-none text-gray-700 sm:text-6xl md:text-7xl">
              garden
            </h1>
            <p className="hand-text mt-5 max-w-2xl text-2xl font-bold leading-tight text-gray-500 md:text-3xl">
              Welcome to the main room: recent memories, tiny works, and the character roster sleeping under pink glass.
            </p>
          </div>

          <div className="rounded-[2rem] border-2 border-white/60 bg-white/45 p-5 shadow-[0_14px_32px_rgba(244,114,182,0.14)]">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-pink-400">
              <Star className="h-4 w-4" fill="currentColor" />
              Today's mood
            </div>
            <div className="hand-text text-2xl font-bold leading-tight text-gray-600">{todayMascot.mood}</div>
            <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">guide: {todayMascot.displayName}</div>
          </div>
        </div>
      </motion.section>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.section
          className="glass rounded-[2.5rem] p-6 md:p-7"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="cute-text text-[10px] uppercase tracking-[0.3em] text-pink-400">Today’s visitor</div>
              <h2 className="serif-text mt-1 text-3xl text-gray-700">{todayMascot.displayName}</h2>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-gray-400">{todayMascot.sourceWork}</div>
            </div>
            <img
              src={todayMascot.assets.standing}
              alt={todayMascot.assets.alt}
              className="h-28 w-24 object-contain drop-shadow-[0_12px_20px_rgba(244,114,182,0.2)]"
              draggable={false}
            />
          </div>
          <p className="hand-text text-2xl font-bold leading-tight text-gray-500">“{todayMascot.greeting}”</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">{todayMascot.siteRelation}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {todayMascot.visualTheme.motifs.map((motif) => (
              <span key={motif} className="rounded-full bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-pink-400">
                {motif}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="grid gap-4"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.14, type: 'spring', stiffness: 120, damping: 18 }}
        >
          <div className="glass rounded-[2rem] p-5">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-pink-400">
              <Book className="h-4 w-4" />
              Latest memories
            </div>
            <div className="space-y-3">
              {latestMemories.map((memory, index) => (
                <div key={memory} className="rounded-[1.3rem] border border-white/60 bg-white/35 px-4 py-3 text-sm text-gray-500">
                  MEMORY #{String(index + 1).padStart(3, '0')} · {memory}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-[2rem] p-5">
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-pink-400">
                <Monitor className="h-4 w-4" />
                Tiny works
              </div>
              <div className="space-y-2 text-sm font-bold text-gray-500">
                {tinyWorks.map((work) => <div key={work}>SAVE SLOT · {work}</div>)}
              </div>
            </div>
            <div className="glass rounded-[2rem] p-5">
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-pink-400">
                <Heart className="h-4 w-4" fill="currentColor" />
                Currently loving
              </div>
              <div className="flex flex-wrap gap-2">
                {currentlyLoving.map((item) => (
                  <span key={item} className="rounded-full bg-pink-100/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-pink-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <div className="cute-text text-[10px] uppercase tracking-[0.3em] text-pink-400">Character roster</div>
            <h2 className="serif-text text-3xl text-gray-700">soft presence cards</h2>
          </div>
          <div className="hidden text-xs font-bold uppercase tracking-[0.22em] text-gray-400 sm:block">source work is context, character is the entrance</div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mascots.map((mascot, index) => (
            <motion.article
              key={mascot.id}
              className="glass group relative overflow-hidden rounded-[2rem] p-5 transition-all hover:-translate-y-1 hover:bg-white/50"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.04 * index, type: 'spring', stiffness: 120, damping: 18 }}
            >
              {mascot.id === todayMascot.id && (
                <div className="absolute right-4 top-4 rounded-full bg-pink-400 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                  today
                </div>
              )}
              <div className="mb-4 h-20 w-20 rounded-[1.5rem] border-2 border-white/70 bg-white/45 p-2 shadow-[0_12px_24px_rgba(244,114,182,0.13)]">
                <img src={mascot.assets.standing} alt={mascot.assets.alt} className="h-full w-full object-contain" draggable={false} />
              </div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-pink-400">{mascot.role}</div>
              <h3 className="serif-text text-2xl text-gray-700 transition-colors group-hover:text-pink-500">{mascot.displayName}</h3>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{mascot.sourceWork}</div>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{mascot.siteRelation}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};
