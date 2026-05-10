export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[100px]" />
      
      {/* Floating Sparkles Placeholder */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow shadow-[0_0_10px_white]" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white rounded-full animate-pulse-slow shadow-[0_0_12px_white]" />
    </div>
  );
};
