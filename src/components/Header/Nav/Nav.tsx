import React, {useState, useEffect} from 'react';
import s from './Nav.module.scss';
import hamburgerIcon from '../../../assets/svg/hamburger.svg';
import {handleScroll} from "../../../utils/scrollUtils";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const navLinks = [
    {id: 'main', label: 'Main'},
    {id: 'skills', label: 'Skills'},
    {id: 'projects', label: 'Projects'},
    {id: 'contacts', label: 'Contacts'},
  ];
  const handleNavLinkClick = (link: string) => {
    const offsetTop = document.getElementById(link)?.offsetTop ?? 0;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setActiveLink(link);
    }, 650);
  };

  useEffect(() => {
    const handleScrollCallback = () => handleScroll(setActiveLink);

    window.addEventListener('scroll', handleScrollCallback);
    return () => {
      window.removeEventListener('scroll', handleScrollCallback);
    };
  }, []);


  return (
    <nav className={s.navContainer}>
      <img
        className={s.hamburger}
        src={hamburgerIcon}
        alt="Menu"
      />
      <ul className={s.navItems}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a className={activeLink === link.id ? s.active : ''} href={`#${link.id}`}
               onClick={() => handleNavLinkClick(link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
