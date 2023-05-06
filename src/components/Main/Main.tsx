import React from 'react';
import s from './Main.module.css'
import StyleContainer from '../../common/styles/Container.module.css'
import logo from './programmer2.svg';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={StyleContainer.container}>
                <div className={s.greetingText}>
                    <h1><span className={s.highlighted}>Hi,</span> I'm Denis Polunosik</h1>
                    <h2>A frontend developer</h2>
                    <p>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be
                        relied upon to help your company achieve its goals by providing sustainable and scalable
                        solutions.
                    </p>
                </div>
                <div className={s['photo-container']}>
                    <img className={s.photo} src={logo} alt="Programmer"/>
                </div>
            </div>
        </div>
    );
}