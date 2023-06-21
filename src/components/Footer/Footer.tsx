import React from 'react';
import s from './Footer.module.css'
import StyleContainer from "../../common/styles/Container.module.css";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div id='footer' className={s.footer}>
            <div className={StyleContainer.container}>
                <div className={s.footerContainer}>
                    <div className={s.contacts}>
                        <span>denispolunosik@gmail.com</span><br/>
                        <span>+375 29 106-19-41</span>
                    </div>
                    <div className={s.socialNetworks}>
                        <div className={s.socialNetwork}>
                            <a href="https://github.com/PetlitskayaVictoria" target="_blank">
                                <div className={s.icon}></div>
                            </a>
                        </div>
                        <div className={s.socialNetwork}>
                            <a href="https://www.linkedin.com/in/victoria-petlitskaya/" target="_blank">
                                <div className={s.icon}></div>
                            </a>
                        </div>
                        <div className={s.socialNetwork}>
                            <a href="https://www.linkedin.com/in/victoria-petlitskaya/" target="_blank">
                                <div className={s.icon}></div>
                            </a>
                        </div>
                    </div>
                    <div className={s.info}>
                        <span>Denis Polunosik</span><br/>
                        <span>&#169; 2023 All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
