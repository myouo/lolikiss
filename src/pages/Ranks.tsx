import { Crown, Heart, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const characters = [
  {
    rank: '01',
    name: 'Sakura Kinomoto',
    source: 'Cardcaptor Sakura',
    role: 'dream keeper',
    affection: '99%',
    palette: 'pink / ivory / gold',
    note: 'Gentle courage, soft magic, and the feeling of opening a storybook before sunset.',
  },
  {
    rank: '02',
    name: 'Hitori Gotoh',
    source: 'Bocchi the Rock!',
    role: 'shy guitar hero',
    affection: '96%',
    palette: 'rose / black / blue',
    note: 'A tiny storm of anxiety and talent, wrapped in awkward sweetness.',
  },
  {
    rank: '03',
    name: 'Chino Kafuu',
    source: 'Is the Order a Rabbit?',
    role: 'quiet café angel',
    affection: '94%',
    palette: 'lavender / cream / mocha',
    note: 'Cool, delicate, and calm like a porcelain cup warming between both hands.',
  },
  {
    rank: '04',
    name: 'Madoka Kaname',
    source: 'Puella Magi Madoka Magica',
    role: 'pink wish',
    affection: '92%',
    palette: 'blush / white / ribbon',
    note: 'A fragile silhouette carrying impossible kindness with ceremonial grace.',
  },
  {
    rank: '05',
    name: 'Violet Evergarden',
    source: 'Violet Evergarden',
    role: 'letter doll',
    affection: '90%',
    palette: 'violet / navy / silver',
    note: 'Elegant grief, precise hands, and emotions slowly blooming into language.',
  },
];

export const Ranks = () => {
  const topCharacter = characters[0];

  return (
    <div className="relative mx-auto max-w-5xl px-6 py-12 md:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Heart className="absolute right-8 top-24 h-32 w-32 -rotate-12 text-pink-200/25" fill="currentColor" />
        <Star className="absolute -left-8 bottom-16 h-28 w-28 rotate-12 text-yellow-200/30" fill="currentColor" />
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
              Extra Mode
            </div>
            <h1 className="cute-text sticker-text text-5xl leading-none text-gray-700 sm:text-6xl md:text-7xl">
              extra
            </h1>
            <p className="hand-text mt-5 max-w-2xl text-2xl font-bold leading-tight text-gray-500 md:text-3xl">
              A side quest board for beloved characters, tiny records, and feelings sorted like soft achievements.
            </p>
          </div>

          <div className="rounded-[2rem] border-2 border-white/60 bg-white/45 p-5 shadow-[0_14px_32px_rgba(244,114,182,0.14)]">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-pink-400">
              <Crown className="h-4 w-4" fill="currentColor" />
              Current No.1
            </div>
            <div className="serif-text text-2xl leading-tight text-gray-700">{topCharacter.name}</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{topCharacter.source}</div>
          </div>
        </div>
      </motion.section>

      <section className="space-y-4">
        {characters.map((character, index) => (
          <motion.article
            key={character.rank}
            className="glass group relative overflow-hidden rounded-[2rem] p-5 transition-all hover:-translate-y-0.5 hover:bg-white/50 md:p-6"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.06, type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="absolute inset-y-5 left-8 hidden w-px bg-gradient-to-b from-transparent via-pink-200/70 to-transparent md:block" />
            <div className="relative grid gap-5 md:grid-cols-[5rem_1fr_11rem] md:items-center">
              <div className="cute-text flex h-16 w-16 items-center justify-center rounded-[1.4rem] border-2 border-white/70 bg-white/60 text-2xl text-pink-400 shadow-[0_10px_22px_rgba(244,114,182,0.13)]">
                {character.rank}
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-pink-100/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-pink-400">
                    {character.role}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                    {character.palette}
                  </span>
                </div>
                <h2 className="serif-text text-3xl text-gray-700 transition-colors group-hover:text-pink-500">
                  {character.name}
                </h2>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-gray-400">{character.source}</div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">{character.note}</p>
              </div>

              <div className="rounded-[1.5rem] border-2 border-white/60 bg-white/40 p-4 text-center">
                <div className="hand-text text-sm font-bold text-gray-400">affection</div>
                <div className="cute-text mt-1 text-3xl text-pink-400">{character.affection}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};
