import React, { useState, useEffect } from 'react';
import { NOME_LOJA, MENU_ITEMS } from '../constants';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <header id="header" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-white tracking-wider">
          {NOME_LOJA}
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
            >
              {item.nome}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuAberto ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={toggleMenu}
                className="text-gray-200 hover:text-white transition-colors duration-300 text-xl py-2"
              >
                {item.nome}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;