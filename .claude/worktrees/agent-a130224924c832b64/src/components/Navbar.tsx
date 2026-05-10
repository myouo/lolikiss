import { Link } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between pointer-events-none">
      <Link to="/" className="flex items-center gap-3 group pointer-events-auto">
        <div className="relative">
          <Heart className="w-8 h-8 text-pink-400 fill-pink-400 group-hover:scale-125 transition-transform" />
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
        </div>
        <span className="cute-text text-2xl font-bold text-gray-700 tracking-tight">lolikiss</span>
      </Link>
      
      <div className="flex items-center gap-6 pointer-events-auto bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border-2 border-white/60 shadow-sm relative">
        {/* VN Chapter Tag */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-pink-400 rounded-full border border-white shadow-sm">
           <span className="cute-text text-[8px] text-white tracking-widest uppercase">Chapter 01: Prologue</span>
        </div>

        <Link to="/garden" className="cute-text text-sm text-gray-500 hover:text-pink-500 transition-colors flex items-center gap-2">
          🌷 Garden
        </Link>
        <Link to="/projects" className="cute-text text-sm text-gray-500 hover:text-pink-500 transition-colors">Projects</Link>
        <Link to="/notes" className="cute-text text-sm text-gray-500 hover:text-pink-500 transition-colors">Notes</Link>
        <Link to="/links" className="cute-text text-sm text-gray-500 hover:text-pink-500 transition-colors">Links</Link>
        
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center cursor-pointer hover:rotate-12 transition-transform border border-pink-200">
           <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
        </div>
      </div>
    </nav>
  );
};
