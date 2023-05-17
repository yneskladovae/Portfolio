import React from 'react';
import './Header.css'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={'header'}>
            <Nav/>
        </div>
    );
}
