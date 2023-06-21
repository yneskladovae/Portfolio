import React from 'react';
import './Main.module.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {programmer, emailIcon, gitHubIcon, linkedInIcon} from "../../utils/icons";
import s from "./Main.module.scss";
import BtnsMain from '../../common/styles/BtnsMain.module.css';
import {motion} from 'framer-motion';
import {Reveal} from "../../common/components/Reveal/Reveal";


export const Main = () => {
  return (
    <div id='main' className={s.mainBlcok}>
      <div className={StyleContainer.container}>
        {/*<div className={`${StyleContainer.container } ${s.mainContainer}`}>*/}
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
                  <a className={s.link} href="">
                    <img className={s.iconGithub} src={gitHubIcon} alt="GitHub"/>
                  </a>
                </li>
                <li className={s.socialItem}>
                  <a className={s.link} href="">
                    <img className={s.iconLinkedIn} src={linkedInIcon} alt="LinkedIn"/>
                  </a>
                </li>

                <li className={s.socialItem}>
                  <a className={s.link} href="">
                    <img className={s.iconEmail} src={emailIcon} alt="Email"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className={s.btnsWrap}>
              <a href="">
                <motion.button className={`${s.btnContacts} ${BtnsMain.btn}`}
                               whileHover={{scale: 1.1}}
                               whileTap={{scale: 0.95}}>
                  Get in touch
                </motion.button>
              </a>
              <a href="">
                <motion.button className={`${s.btnProjects} ${BtnsMain.btn}`}
                               whileHover={{scale: 1.1}}
                               whileTap={{scale: 0.95}}>
                  See my work
                </motion.button>
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