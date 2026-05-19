import { Crown, Heart, Lock, Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

import { GlassPanel, HeroPanel, PageShell, SectionHeader, StickerTag } from '../components/SoftUI';
import { useI18n } from '../i18n/useI18n';
import { fadeUp } from '../lib/ui';

const characters = [
  {
    rank: '01',
    name: 'Sakura Kinomoto',
    source: 'Cardcaptor Sakura',
    roleKey: 'ranks.sakura.role',
    affection: 99,
    palette: 'pink / ivory / gold',
    noteKey: 'ranks.sakura.note',
  },
  {
    rank: '02',
    name: 'Hitori Gotoh',
    source: 'Bocchi the Rock!',
    roleKey: 'ranks.bocchi.role',
    affection: 96,
    palette: 'rose / black / blue',
    noteKey: 'ranks.bocchi.note',
  },
  {
    rank: '03',
    name: 'Chino Kafuu',
    source: 'Is the Order a Rabbit?',
    roleKey: 'ranks.chino.role',
    affection: 94,
    palette: 'lavender / cream / mocha',
    noteKey: 'ranks.chino.note',
  },
  {
    rank: '04',
    name: 'Madoka Kaname',
    source: 'Puella Magi Madoka Magica',
    roleKey: 'ranks.madoka.role',
    affection: 92,
    palette: 'blush / white / ribbon',
    noteKey: 'ranks.madoka.note',
  },
];

const achievements = [
  { titleKey: 'ranks.achievement.titleScreen.title', descKey: 'ranks.achievement.titleScreen.desc', unlocked: true },
  { titleKey: 'ranks.achievement.garden.title', descKey: 'ranks.achievement.garden.desc', unlocked: true },
  { titleKey: 'ranks.achievement.roster.title', descKey: 'ranks.achievement.roster.desc', unlocked: false },
];

export const Ranks = () => {
  const { t } = useI18n();
  const topCharacter = characters[0];

  return (
    <PageShell>
      <HeroPanel
        icon={Trophy}
        eyebrow={t('ranks.eyebrow')}
        title="extra"
        copy={t('ranks.copy')}
        side={
          <GlassPanel className="p-5" strong>
            <div className="system-text mb-3 flex items-center gap-2 text-accent">
              <Crown className="h-4 w-4" fill="currentColor" />
              {t('ranks.currentNo1')}
            </div>
            <div className="display-text text-2xl leading-tight text-main">{topCharacter.name}</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-soft">{topCharacter.source}</div>
          </GlassPanel>
        }
      />

      <SectionHeader eyebrow={t('ranks.rankBoard')} title={t('ranks.recordsTitle')} action={<StickerTag>{t('ranks.personalArchive')}</StickerTag>} />
      <section className="space-y-4">
        {characters.map((character, index) => (
          <motion.article key={character.rank} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
            <GlassPanel hover className="p-5 sm:p-6">
              <div className="grid gap-5 md:grid-cols-[5rem_minmax(0,1fr)_12rem] md:items-center">
                <div className="display-text flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-white/60 bg-white/40 text-2xl text-accent shadow-sm">
                  {character.rank}
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <StickerTag>{t(character.roleKey)}</StickerTag>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-soft">{character.palette}</span>
                  </div>
                  <h2 className="display-text text-3xl leading-tight text-main transition-colors group-hover:text-accent">
                    {character.name}
                  </h2>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-soft">{character.source}</div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{t(character.noteKey)}</p>
                </div>

                <div className="rounded-[1.5rem] border border-white/55 bg-white/25 p-4">
                  <div className="hand-text text-center text-base font-bold text-muted">{t('ranks.affection')}</div>
                  <div className="display-text mt-1 text-center text-3xl text-accent">{character.affection}%</div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/35">
                    <div className="h-full rounded-full bg-pink-400" style={{ width: `${character.affection}%` }} />
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.article>
        ))}
      </section>

      <section className="mt-9">
        <SectionHeader eyebrow={t('ranks.achievements')} title={t('ranks.sideQuestBoard')} />
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article key={achievement.titleKey} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 + index * 0.06 }}>
              <GlassPanel className="h-full p-5" hover={achievement.unlocked}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-[1.2rem] border border-white/60 ${achievement.unlocked ? 'bg-pink-100/45 text-accent' : 'bg-white/20 text-soft'}`}>
                    {achievement.unlocked ? <Star className="h-5 w-5" fill="currentColor" /> : <Lock className="h-5 w-5" />}
                  </div>
                  <StickerTag>{achievement.unlocked ? t('ranks.unlocked') : t('ranks.locked')}</StickerTag>
                </div>
                <h3 className="display-text text-2xl leading-tight text-main">{t(achievement.titleKey)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(achievement.descKey)}</p>
                {achievement.unlocked && <Heart className="mt-5 h-5 w-5 text-pink-300" fill="currentColor" />}
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
