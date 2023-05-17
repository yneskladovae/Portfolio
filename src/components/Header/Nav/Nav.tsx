import React from 'react';
import './Nav.css'

export const Nav = () => {
    return (
        <div className={'nav-container'}>
            <div className={'nav-container__logo'}>
                <span>{`< Denis Polunosik />`}</span>
            </div>
            <nav className={'nav-container__nav'}>
                <a className={'nav-container__nav__link'} href="#">Main</a>
                <a className={'nav-container__nav__link'} href="#">Skills</a>
                <a className={'nav-container__nav__link'} href="#">Projects</a>
                <a className={'nav-container__nav__link'} href="#">Contacts</a>
            </nav>
        </div>
    );
}
