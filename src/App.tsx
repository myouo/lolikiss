import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Garden } from './pages/Garden';
import { Projects } from './pages/Projects';
import { Notes } from './pages/Notes';
import { Diary } from './pages/Diary';
import { DiaryManage } from './pages/DiaryManage';
import { Links } from './pages/Links';
import { Ranks } from './pages/Ranks';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <BackgroundEffects />
      {!isHome && <Navbar />}
      <main className={`relative z-10 ${!isHome ? 'pb-16 pt-32 sm:pt-28' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/manage" element={<DiaryManage />} />
          <Route path="/links" element={<Links />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
