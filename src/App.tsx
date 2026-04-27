import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Notes } from './pages/Notes';
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
    <div className="relative min-h-screen sans-text">
      <ScrollToTop />
      <BackgroundEffects />
      {!isHome && <Navbar />}
      <main className={`relative z-10 ${!isHome ? 'pt-20 pb-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garden" element={<div className="p-10 text-center glass m-10 rounded-3xl">Garden Page - Coming Soon</div>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/links" element={<div className="p-10 text-center glass m-10 rounded-3xl">Links Page - Coming Soon</div>} />
          <Route path="/lab" element={<div className="p-10 text-center glass m-10 rounded-3xl">Lab Page - Coming Soon</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
