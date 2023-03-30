import React from 'react';
import s from './Main.module.css'
import StyleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={StyleContainer.container}>
                <div className={s.greetingText}>
                    <span>Hi there</span>
                    <h1>I am Denis Polunosik</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}