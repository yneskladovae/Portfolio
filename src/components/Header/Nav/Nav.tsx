import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s['nav-container']}>
            <div>
                <h4>{`< Denis Polunosik />`}</h4>
            </div>
            <nav className={s.nav}>
                <a href="src/components/Header/Nav/Nav">Main</a>
                <a href="src/components/Header/Nav/Nav">Skills</a>
                <a href="src/components/Header/Nav/Nav">Projects</a>
                <a href="src/components/Header/Nav/Nav">Contacts</a>
            </nav>
        </div>

    );
}
