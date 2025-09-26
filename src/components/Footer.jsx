;import { NavLink } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t-2 border-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Ester Kuba. Všechna práva vyhrazena.
        </p>
        <div className="flex gap-4">
          {/* <a href="#hero" className="hover:text-gray-900 transition">Domů</a>
          <a href="#gallery" className="hover:text-gray-900 transition">Galerie</a>
          <a href="#about" className="hover:text-gray-900 transition">O mně</a>
          <a href="#contact" className="hover:text-gray-900 transition">Kontakt</a> */}
          <NavLink to="/" className="hover:text-gray-900 transition">Homepage</NavLink>
          <NavLink to="/o-mne" className="hover:text-gray-900 transition">O mně</NavLink>
          <NavLink to="/galerie" className="hover:text-gray-900 transition">Galerie</NavLink>
          <NavLink to="/kontakt" className="hover:text-gray-900 transition">Kontakt</NavLink>
        </div>
      </div>
    </footer>
  );
}
