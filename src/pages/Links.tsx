import { ExternalLink, Github, Heart, Link as LinkIcon, Mail, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { GlassPanel, HeroPanel, PageShell, SectionHeader } from '../components/SoftUI';
import { useI18n } from '../i18n/useI18n';
import { fadeUp } from '../lib/ui';

const portalGroups = [
  {
    group: 'Code',
    summaryKey: 'links.group.code.summary',
    portals: [
      { label: 'GitHub', descriptionKey: 'links.github.desc', href: '#', icon: Github },
    ],
  },
  {
    group: 'Social',
    summaryKey: 'links.group.social.summary',
    portals: [
      { label: 'Mail', descriptionKey: 'links.mail.desc', href: '#', icon: Mail },
      { label: 'Heart Room', descriptionKey: 'links.heart.desc', href: '#', icon: Heart },
    ],
  },
  {
    group: 'Archive',
    summaryKey: 'links.group.archive.summary',
    portals: [
      { label: 'Old Garden', descriptionKey: 'links.oldGarden.desc', href: '#', icon: Star },
    ],
  },
];

export const Links = () => {
  const { t } = useI18n();

  return (
    <PageShell>
      <HeroPanel
        icon={LinkIcon}
        eyebrow={t('links.eyebrow')}
        title="portal"
        copy={t('links.copy')}
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 text-accent">{t('links.status')}</div>
            <p className="hand-text text-2xl font-bold leading-tight text-main">
              {t('links.status.copy')}
            </p>
          </GlassPanel>
        }
      />

      <div className="space-y-8">
        {portalGroups.map((group, groupIndex) => (
          <section key={group.group}>
            <SectionHeader eyebrow={group.group} title={t(group.summaryKey)} />
            <div className="grid gap-5 md:grid-cols-2">
              {group.portals.map((portal, index) => {
                const Icon = portal.icon;

                return (
                  <motion.a
                    key={portal.label}
                    href={portal.href}
                    className="block"
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ...fadeUp.transition, delay: (groupIndex + index) * 0.06 }}
                  >
                    <GlassPanel hover className="h-full p-5 sm:p-6">
                      <div className="relative flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/35 text-accent shadow-sm transition-transform group-hover:scale-105">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="min-w-0">
                            <div className="system-text text-accent">PORTAL SLOT</div>
                            <h2 className="display-text mt-1 truncate text-3xl leading-tight text-main transition-colors group-hover:text-accent">
                              {portal.label}
                            </h2>
                            <p className="hand-text mt-1 text-xl font-bold leading-tight text-muted">{t(portal.descriptionKey)}</p>
                          </div>
                        </div>
                        <ExternalLink className="h-5 w-5 shrink-0 text-soft transition-colors group-hover:text-accent" />
                      </div>
                      <div className="mt-5 flex items-center gap-2">
                        <div className="h-2 flex-1 overflow-hidden rounded-full border border-white/45 bg-white/25">
                          <div className="h-full w-1/2 rounded-full bg-pink-300/70 transition-all group-hover:w-full" />
                        </div>
                        <Sparkles className="h-4 w-4 text-amber-300 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </GlassPanel>
                  </motion.a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
};
