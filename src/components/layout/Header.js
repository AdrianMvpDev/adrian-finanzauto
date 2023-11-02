import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../common/NavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`py-4 shadow-md ${isHeaderFixed ? 'sticky top-0 bg-white' : ''}`}>
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-[#1a6e6a] font-semibold text-xl font-bold">
          Finanzauto
        </Link>
        <nav onClick={toggleMenu}>
          <div className={`menuToggle ${isMenuOpen ? 'open' : 'md:hidden'} transition-transform  ease-in-out`} onClick={toggleMenu}>
            <div
              className={`w-6 h-0.5 bg-gray-800 mb-1 transition-transform ease-in-out duration-300 ${
                isMenuOpen ? 'transform -rotate-45 translate-y-1' : ''
              }`}
            ></div>
            <div className={`w-6 h-0.5 bg-gray-800 mb-1  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div
              className={`w-6 h-0.5 bg-gray-800  transition-transform ease-in-out duration-300 ${
                isMenuOpen ? 'transform rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </div>

          <ul
            className={`md:flex md:items-center gap-2.5 transition-all transform ${
              isMenuOpen ? 'absolute top-[65px] left-0 right-0 bg-white h-[calc(100vh-74px)] text-center' : 'hidden -mt-full'
            }`}
          >
            <NavLink to="/" text="Inicio" />
            <NavLink to="/create" text="Crear" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
