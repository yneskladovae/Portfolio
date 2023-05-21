import React from 'react';
import s from './Offer.module.scss'

export const Offer = () => {
    return (
        <div className={s.offerBlcok}>
            <p className={s.description}>considering remote work options</p>
            <h2 className={s.header}>Let's get to work</h2>
            <button className={s.btnOffer}>Hire me</button>
        </div>
    );
};
