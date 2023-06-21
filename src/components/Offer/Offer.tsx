import React from 'react';
import s from './Offer.module.scss'
import {Reveal} from "../../common/components/Reveal/Reveal";

export const Offer = () => {
  return (
    <div className={s.offerBlcok}>
      <Reveal>
        <p className={s.description}>considering remote work options</p>
        <h2 className={s.header}>Let's get to work</h2>
        <button className={s.btnOffer}>Hire me</button>
      </Reveal>
    </div>
  );
};
