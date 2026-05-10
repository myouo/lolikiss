import { ExternalLink, Github, Monitor, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    slot: '01',
    title: 'Pixel Dreamer',
    description: 'A small pixel art editor built with React and Canvas, saved like a tiny tool from a rainy afternoon.',
    status: 'completed',
    tags: ['React', 'TypeScript', 'Canvas'],
    link: '#',
    github: '#',
  },
  {
    slot: '02',
    title: 'Lofi Garden',
    description: 'Interactive garden with lofi music and ambient sounds, made for soft focus and quiet wandering.',
    status: 'dreaming',
    tags: ['Three.js', 'Web Audio'],
    link: '#',
    github: '#',
  },
  {
    slot: '03',
    title: 'Note Whisper',
    description: 'A minimalist note-taking app with end-to-end encryption, tucked away like a locked diary page.',
    status: 'archived',
    tags: ['Next.js', 'WebCrypto'],
    link: '#',
    github: '#',
  },
];

export const Projects = () => {
  return (
    <div className="relative mx-auto max-w-5xl px-6 py-12 md:px-10">
      <Sparkles className="pointer-events-none absolute right-10 top-20 h-20 w-20 text-yellow-200/35" />

      <motion.section
        className="glass relative mb-8 overflow-hidden rounded-[3rem] border-pink-100/80 p-7 shadow-[0_22px_70px_rgba(244,114,182,0.18)] md:p-10"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-400 shadow-sm">
            <Monitor className="h-4 w-4" />
            Memory archive: {String(projects.length).padStart(2, '0')} records loaded
          </div>
          <h1 className="cute-text sticker-text text-5xl leading-none text-gray-700 sm:text-6xl md:text-7xl">
            recollect
          </h1>
          <p className="hand-text mt-5 max-w-2xl text-2xl font-bold leading-tight text-gray-500 md:text-3xl">
            little things I made and kept safe, arranged like soft save slots under glass.
          </p>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.slot}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-7 transition-all hover:-translate-y-1 hover:bg-white/50"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 120, damping: 18 }}
          >
            <Sparkles className="absolute right-6 top-6 h-6 w-6 text-yellow-300 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="cute-text text-[10px] uppercase tracking-[0.3em] text-pink-400">SAVE SLOT {project.slot}</div>
                <h2 className="serif-text mt-2 text-3xl text-gray-700 transition-colors group-hover:text-pink-500">{project.title}</h2>
              </div>
              <span className="rounded-full bg-pink-100/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-pink-400">
                {project.status}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">{project.description}</p>

            <div className="my-7 h-24 rounded-[1.8rem] border-2 border-dashed border-pink-100/80 bg-white/30 p-4">
              <div className="flex h-full items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-pink-100/40 to-purple-100/40 text-[10px] font-bold uppercase tracking-[0.26em] text-pink-300">
                project polaroid sleeping
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/50 bg-white/45 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pink-500">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href={project.link} className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.16em] text-pink-400 hover:text-pink-500">
                <ExternalLink size={16} /> Open memory
              </a>
              <a href={project.github} className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-600">
                <Github size={16} /> Source
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
