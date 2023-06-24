import React, {useState, useEffect} from 'react';
import s from './Nav.module.scss';
import {handleScroll} from "../../../utils/scrollUtils";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const burgerClassName = isOpen ? `${s.burger} ${s.active}` : s.burger;
  const navClassName = isOpen ? `${s.nav} ${s.open}` : s.nav;
  const navLinks = [
    {id: 'main', label: 'Main'},
    {id: 'skills', label: 'Skills'},
    {id: 'projects', label: 'Projects'},
    {id: 'contacts', label: 'Contacts'},
  ];

  useEffect(() => {
    const handleScrollCallback = () => handleScroll(setActiveLink);

    window.addEventListener('scroll', handleScrollCallback);
    return () => {
      window.removeEventListener('scroll', handleScrollCallback);
    };
  }, []);

  const handleNavLinkClick = (link: string) => {
    const offsetTop = document.getElementById(link)?.offsetTop ?? 0;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    setIsOpen(false);

    setTimeout(() => {
      setActiveLink(link);
    }, 650);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={navClassName} onBlur={handleBlur}>
        <ul>
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
      <div className={burgerClassName} onClick={handleButtonClick}>
        <span></span>
      </div>
    </>
  );
};
