import React from 'react';
import './Main.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {programmer} from "../../utils/icons";

export const Main = () => {
    return (
        <div className={'main-container'}>
            <div className={StyleContainer.container}>
                <div className={'main-container__greeting'}>
                    <h1><span className={'main-container__greeting-highlighted'}>Hi,</span> I'm Denis Polunosik</h1>
                    <h2>A frontend developer</h2>
                    <p>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be
                        relied upon to help your company achieve its goals by providing sustainable and scalable
                        solutions.
                    </p>
                </div>
                <div className={'main-container__photo'}>
                    <img className={'main-container__photo__img'} src={programmer} alt="Programmer"/>
                </div>
            </div>
        </div>
    );
}