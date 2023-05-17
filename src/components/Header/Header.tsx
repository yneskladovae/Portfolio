import React from 'react';
import './Header.scss'

export const Header = () => {
    return (
        <div className={'header'}>
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
        </div>
    );
}
