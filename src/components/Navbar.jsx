import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed 
      top-0 z-50 bg-flashWhite transition-all duration-300 ease-in-out
      ${scrolled ? 'shadow-navbar' : 'shadow-none'} h-[10vh] sm:h-[12vh]`}>
      
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 xs:w-11 xs:h-11 sm:w-12 sm:h-12 object-contain 
            transition-transform duration-300 group-hover:rotate-12"
          />
          {/* <img
            src={logotext}
            alt="logo text"
            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 -ml-3 
            transition-opacity duration-300 group-hover:opacity-80"
          /> */}
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative group ${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              }`}
              onClick={() => setActive(nav.title)}>
              <a
                href={`#${nav.id}`}
                className="text-lg lg:text-xl font-medium font-poppins 
                uppercase tracking-wider hover:text-taupe transition-colors 
                duration-300">
                {nav.title}
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-french 
                transition-all duration-300 group-hover:w-full"></div>
            </li>
          ))}
          <li>
            <a href="https://prashantjoshi2k.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-lg lg:text-xl font-medium font-poppins uppercase tracking-wider text-eerieBlack hover:text-taupe transition-colors duration-300">
              Blogs
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer transition-transform 
            duration-300 hover:scale-110"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? 'translate-x-0' : 'translate-x-full'
            } fixed top-0 right-0 w-3/4 h-screen bg-flashWhite/95 backdrop-blur-sm 
            z-50 shadow-2xl transition-transform duration-300 ease-in-out 
            border-l border-gray-200`}>
            
            <div className="h-full flex flex-col items-start justify-start pt-24 pl-8">
              <ul className="list-none flex flex-col gap-6 w-full">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } w-full border-b border-gray-200 last:border-0`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}>
                    <a
                      href={`#${nav.id}`}
                      className="text-2xl font-medium font-poppins uppercase 
                      tracking-wide py-3 block hover:pl-4 transition-all 
                      duration-300">
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="https://prashantjoshi2k.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-medium font-poppins uppercase tracking-wide py-3 block hover:pl-4 transition-all duration-300">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;