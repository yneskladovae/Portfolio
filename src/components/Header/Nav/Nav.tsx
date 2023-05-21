import React, {useState} from 'react';
import s from './Nav.module.scss'
import hamburgerIcon from '../../../assets/svg/hamburger.svg';

export const Nav = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <nav className={s.navContainer}>
            <img className={s.hamburger} src={hamburgerIcon} alt="Menu"/>
            <ul className={s.navItems}>
                {/*<img className={`${s.hamburger} ${isOpen ? s.open : ''}`} src={hamburgerIcon} alt="Menu" onClick={toggleMenu}/>*/}
                {/*<ul className={`${s.navItems} ${isOpen ? s.open : ''}`}>*/}
                <li className={s.navItem}><a className={s.navLink} href="#">Main</a></li>
                <li className={s.navItem}><a className={s.navLink} href="#">Skills</a></li>
                <li className={s.navItem}><a className={s.navLink} href="#">Projects</a></li>
                <li className={s.navItem}><a className={s.navLink} href="#">Contacts</a></li>
            </ul>
        </nav>
    );
}
