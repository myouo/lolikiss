import { Book, Calendar, Heart, Shuffle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const notes = [
  {
    memory: '012',
    date: '2024.03.20',
    title: 'The beauty of small things',
    tag: 'diary fragment',
    excerpt: 'Today I watched the petals fall in the park. It reminded me that even small transitions can be beautiful...',
  },
  {
    memory: '011',
    date: '2024.03.15',
    title: 'Learning Three.js was a journey',
    tag: 'soft tech log',
    excerpt: 'Math can be scary, but seeing that first 3D cube spin made it all worth it. A small note from inside the shader fog...',
  },
  {
    memory: '010',
    date: '2024.02.28',
    title: 'Minimalism in Code',
    tag: 'quiet thought',
    excerpt: "Sometimes the best code is the code you don't write. Deleting 100 lines today felt like dusting a tiny room...",
  },
];

export const Notes = () => {
  return (
    <div className="relative mx-auto max-w-4xl px-6 py-12 md:px-10">
      <Heart className="pointer-events-none absolute -left-8 top-32 h-24 w-24 -rotate-12 text-pink-200/30" fill="currentColor" />

      <motion.section
        className="glass relative mb-8 overflow-hidden rounded-[3rem] border-pink-100/80 p-7 shadow-[0_22px_70px_rgba(244,114,182,0.18)] md:p-10"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-200/25 blur-3xl" />
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-400 shadow-sm">
            <Book className="h-4 w-4" />
            diary fragments
          </div>
          <h1 className="cute-text sticker-text text-5xl leading-none text-gray-700 sm:text-6xl md:text-7xl">
            memories
          </h1>
          <p className="hand-text mt-5 max-w-2xl text-2xl font-bold leading-tight text-gray-500 md:text-3xl">
            soft logs written somewhere between sleep, internet, and a tiny glowing desk lamp.
          </p>
        </div>
      </motion.section>

      <div className="mb-5 flex justify-end">
        <button className="vn-choice flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-pink-400">
          <Shuffle className="h-4 w-4" />
          roll a memory
        </button>
      </div>

      <div className="space-y-6">
        {notes.map((note, i) => (
          <motion.article
            key={note.memory}
            className="glass group relative cursor-pointer overflow-hidden rounded-[2.4rem] p-7 transition-all hover:-translate-y-1 hover:bg-white/50 md:p-8"
            initial={{ y: 18, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            whileHover={{ rotate: i % 2 === 0 ? 0.6 : -0.6 }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="absolute right-6 top-5 rounded-full bg-white/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
              {note.tag}
            </div>
            <Sparkles className="absolute bottom-6 right-8 h-6 w-6 text-yellow-300 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-300">
              <Calendar size={12} /> {note.date}
            </div>
            <div className="cute-text mb-2 text-[10px] uppercase tracking-[0.3em] text-pink-400">MEMORY #{note.memory}</div>
            <h2 className="serif-text text-3xl text-gray-700 transition-colors group-hover:text-pink-500">
              {note.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              {note.excerpt}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
