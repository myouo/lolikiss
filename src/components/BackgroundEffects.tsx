import { Heart, Sparkles, Star } from 'lucide-react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent_28%,rgba(255,255,255,0.28)_72%,transparent)] dark:bg-none" />

      <Sparkles className="animate-float-soft absolute left-[11%] top-[17%] h-7 w-7 text-amber-200/70" />
      <Heart className="animate-float-soft absolute right-[13%] top-[28%] h-8 w-8 -rotate-12 text-pink-300/45" fill="currentColor" />
      <Star className="animate-pulse-soft absolute bottom-[18%] left-[18%] h-6 w-6 text-purple-200/60" fill="currentColor" />
      <Sparkles className="animate-pulse-soft absolute bottom-[28%] right-[24%] h-5 w-5 text-white/75" />

      <div className="absolute left-8 top-1/2 h-40 w-px bg-gradient-to-b from-transparent via-pink-200/40 to-transparent" />
      <div className="absolute bottom-12 right-10 h-px w-48 bg-gradient-to-r from-transparent via-purple-200/40 to-transparent" />
    </div>
  );
};
