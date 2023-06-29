import React from 'react';
import './Main.module.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {programmer, emailIcon, gitHubIcon, linkedInIcon} from "../../utils/icons";
import s from "./Main.module.scss";
import BtnsMain from '../../common/styles/BtnsMain.module.css';
// import {motion} from 'framer-motion';
import {Reveal} from "../../common/components/Reveal/Reveal";

export const Main = () => {
  return (
    <div id='main' className={s.mainBlcok}>
      <div className={StyleContainer.container}>
        <div className={s.mainGreetingContainer}>
          <Reveal>
            <h1><span className={`${s.greetingHighlighted}`}>Hi,</span> I'm Denis Polunosik</h1>
            <h2>A frontend developer</h2>
            <p>I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be
              relied upon to help your company achieve its goals by providing sustainable and scalable
              solutions.
            </p>
            <div className={s.socialLinks}>
              <ul className={s.socialItems}>
                <li className={s.socialItem}>
                  <a className={s.link} href="https://github.com/yneskladovae">
                    <img className={s.iconGithub} src={gitHubIcon} alt="GitHub"/>
                  </a>
                </li>
                <li className={s.socialItem}>
                  <a className={s.link} href="https://www.linkedin.com/in/denispolunosik">
                    <img className={s.iconLinkedIn} src={linkedInIcon} alt="LinkedIn"/>
                  </a>
                </li>

                <li className={s.socialItem}>
                  <a className={s.link} href="mailto:denispolunosik@gmail.com">
                    <img className={s.iconEmail} src={emailIcon} alt="Email"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.btnsWrap}>
              <a href="#contacts">
                <button className={`${s.btnContacts} ${BtnsMain.btn}`}>
                  Get in touch
                </button>
              </a>
              <a href="#projects">
                <button className={`${s.btnProjects} ${BtnsMain.btn}`}>
                  See my work
                </button>
              </a>
            </div>
          </Reveal>
        </div>
        <div className={s.greetingPhoto}>
          <Reveal>
            <img className={s.greetingPhotoImg} src={programmer} alt="Programmer"/>
          </Reveal>
        </div>
      </div>
    </div>
  );
}