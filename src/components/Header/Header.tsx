import React from 'react';
import s from './Header.module.scss'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.navBlock}>
                <div className={s.navLogo}>
                    <span>{`< Denis Polunosik />`}</span>
                </div>
                <Nav/>
            </div>
        </div>
    );
}
