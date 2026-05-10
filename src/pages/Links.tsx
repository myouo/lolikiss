import { ExternalLink, Github, Heart, Mail, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const portalGroups = [
  {
    group: 'Code',
    portals: [
      { label: 'GitHub', description: 'where my code sleeps', href: '#', icon: Github },
    ],
  },
  {
    group: 'Social',
    portals: [
      { label: 'Mail', description: 'send a small letter', href: '#', icon: Mail },
      { label: 'Heart Room', description: 'a quiet place for updates', href: '#', icon: Heart },
    ],
  },
  {
    group: 'Archive',
    portals: [
      { label: 'Old Garden', description: 'past versions and soft traces', href: '#', icon: Star },
    ],
  },
];

export const Links = () => {
  return (
    <div className="relative mx-auto max-w-5xl px-6 py-12 md:px-10">
      <motion.section
        className="glass relative mb-8 overflow-hidden rounded-[3rem] border-pink-100/80 p-7 shadow-[0_22px_70px_rgba(244,114,182,0.18)] md:p-10"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute -bottom-24 left-12 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-white/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-pink-400 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Portal room
          </div>
          <h1 className="cute-text sticker-text text-5xl leading-none text-gray-700 sm:text-6xl md:text-7xl">
            portal
          </h1>
          <p className="hand-text mt-5 max-w-2xl text-2xl font-bold leading-tight text-gray-500 md:text-3xl">
            Select a portal to jump somewhere else. Each little door opens with a soft sparkle.
          </p>
        </div>
      </motion.section>

      <div className="space-y-7">
        {portalGroups.map((group, groupIndex) => (
          <section key={group.group}>
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-pink-400">
              <Star className="h-4 w-4" fill="currentColor" />
              {group.group}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {group.portals.map((portal, index) => {
                const Icon = portal.icon;

                return (
                  <motion.a
                    key={portal.label}
                    href={portal.href}
                    className="glass group relative overflow-hidden rounded-[2rem] p-6 transition-all hover:-translate-y-1 hover:bg-white/50"
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: (groupIndex + index) * 0.06, type: 'spring', stiffness: 120, damping: 18 }}
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pink-200/0 blur-2xl transition-colors group-hover:bg-pink-200/40" />
                    <div className="relative flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70 bg-white/50 text-pink-400 shadow-sm transition-transform group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="cute-text text-[10px] uppercase tracking-[0.28em] text-pink-400">PORTAL SLOT</div>
                          <h2 className="serif-text mt-1 text-3xl text-gray-700 transition-colors group-hover:text-pink-500">{portal.label}</h2>
                          <p className="hand-text mt-1 text-xl font-bold text-gray-400">{portal.description}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-300 transition-colors group-hover:text-pink-400" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
