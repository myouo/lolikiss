import { ArrowRight, Monitor, Book, Link as LinkIcon, Beaker, Heart, Sparkles, Star, History, Save, RotateCcw, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InteractiveText = ({ text, baseColor, hoverColor, isLove = false }: { text: string, baseColor: string, hoverColor: string, isLove?: boolean }) => (
  <div className="flex items-baseline cursor-default select-none">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        className={`relative inline-block sticker-text ${baseColor} ${isLove ? 'text-[4.5rem] md:text-[6.5rem]' : 'text-[8.5rem] md:text-[10.5rem]'}`}
        whileHover={{ 
          y: -25, 
          rotate: i % 2 === 0 ? 15 : -15, 
          scale: 1.2,
          transition: { type: "spring", stiffness: 400, damping: 10 } 
        }}
        initial={{ y: 0 }}
        animate={{ 
          y: [0, -5, 0],
          transition: { 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 0.1,
            ease: "easeInOut" 
          }
        }}
      >
        <span className={`relative z-10 ${hoverColor && 'group-hover:' + hoverColor}`}>
          {char === 'i' ? (
            <span className="relative inline-block">
              <span className="opacity-0">i</span>
              <span className="absolute inset-0 flex flex-col items-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <Heart className="w-8 h-8 md:w-10 md:h-10 fill-pink-300 text-pink-300 mb-[-10px]" />
                </motion.div>
                <span className="leading-[0.8] relative top-[-4px]">|</span>
              </span>
            </span>
          ) : char}
        </span>
      </motion.span>
    ))}
  </div>
);

const VNMenuButton = ({ to, label, subLabel, icon: Icon }: { to: string, label: string, subLabel: string, icon: any }) => (
  <Link 
    to={to} 
    className="vn-choice w-72 px-8 py-3 rounded-l-full rounded-r-lg group flex items-center justify-between border-r-4 border-pink-400 hover:border-pink-500 hover:w-80 transition-all duration-300"
  >
    <div className="flex flex-col items-start">
      <span className="cute-text text-xl text-gray-700 group-hover:text-pink-500 transition-colors uppercase tracking-widest">{label}</span>
      <span className="hand-text text-sm text-gray-400 group-hover:text-pink-300">{subLabel}</span>
    </div>
    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-pink-400 group-hover:bg-pink-400 group-hover:text-white transition-all">
      <Icon size={20} />
    </div>
  </Link>
);

export const Home = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-between px-12 md:px-24 overflow-hidden pt-10">
      <div className="fixed bottom-6 left-12 z-50 flex flex-col items-start opacity-40">
        <span className="cute-text text-[10px] tracking-widest text-gray-500 uppercase">Version 1.0.4 - Release</span>
        <span className="hand-text text-xs text-gray-400 font-bold">© 2024 lolikiss.love all dreams reserved.</span>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="relative">
          <Sparkles className="absolute -top-16 -left-12 text-yellow-300 animate-pulse w-16 h-16" />
          <div className="font-bubble font-bold leading-none flex flex-col items-start">
            <InteractiveText text="lolikiss" baseColor="text-gray-700" hoverColor="text-pink-400" />
            <div className="mt-[-2rem] md:mt-[-4rem] ml-4">
              <InteractiveText text="love" baseColor="text-pink-400" hoverColor="text-rose-500" isLove={true} />
            </div>
          </div>
          <div className="absolute -bottom-6 left-0 w-full h-3 bg-pink-100/50 rounded-full overflow-hidden border-2 border-white/40">
             <motion.div 
               className="h-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.6)]" 
               animate={{ width: ["20%", "45%", "35%", "60%", "20%"] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
        </div>
        
        <motion.div 
          className="mt-12 relative group cursor-help"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <div className="glass p-6 rounded-[2.5rem] border-pink-200 shadow-2xl relative overflow-hidden max-w-sm">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl animate-bounce">🐱</div>
              <span className="cute-text text-pink-500 text-sm font-bold tracking-widest">SYSTEM MESSAGE</span>
            </div>
            <p className="hand-text text-xl text-gray-600 font-bold leading-tight italic">
              "Ready for a new adventure in the softest corner of the internet?"
            </p>
          </div>
          <div className="absolute -top-2 -right-2 bg-pink-400 text-white text-[8px] px-2 py-1 rounded-full cute-text font-bold uppercase shadow-md">Notice!</div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 items-end">
        <VNMenuButton to="/garden" label="START" subLabel="Enter the garden" icon={ArrowRight} />
        <VNMenuButton to="/projects" label="RECOLLECT" subLabel="View my works" icon={Monitor} />
        <VNMenuButton to="/notes" label="MEMORIES" subLabel="Read my diary" icon={Book} />
        <VNMenuButton to="/links" label="PORTAL" subLabel="External links" icon={LinkIcon} />
        <VNMenuButton to="/lab" label="EXTRA" subLabel="Secret lab" icon={Beaker} />
        
        <div className="mt-8 flex gap-6 mr-4">
          <button className="text-gray-400 hover:text-pink-400 transition-colors flex flex-col items-center gap-1 group">
            <History size={24} className="group-hover:-rotate-12 transition-transform" />
            <span className="cute-text text-[8px] font-bold">LOG</span>
          </button>
          <button className="text-gray-400 hover:text-pink-400 transition-colors flex flex-col items-center gap-1 group">
            <Save size={24} className="group-hover:-rotate-12 transition-transform" />
            <span className="cute-text text-[8px] font-bold">SAVE</span>
          </button>
          <button className="text-gray-400 hover:text-pink-400 transition-colors flex flex-col items-center gap-1 group">
            <RotateCcw size={24} className="group-hover:-rotate-12 transition-transform" />
            <span className="cute-text text-[8px] font-bold">LOAD</span>
          </button>
          <button className="text-gray-400 hover:text-pink-400 transition-colors flex flex-col items-center gap-1 group">
            <Settings size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="cute-text text-[8px] font-bold">CONFIG</span>
          </button>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Star size={120} className="absolute -top-10 right-[20%] text-yellow-200/20 rotate-12 animate-pulse" />
        <Heart size={200} className="absolute -bottom-20 left-[10%] text-pink-200/20 -rotate-12" fill="currentColor" />
      </div>
    </div>
  );
};
