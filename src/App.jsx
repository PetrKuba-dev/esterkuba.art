import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './Layout';

import Header from './components/Header';
import Footer from './components/Footer';

import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import AboutMePage from './pages/AboutMe';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/o-mne" element={<AboutMePage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
