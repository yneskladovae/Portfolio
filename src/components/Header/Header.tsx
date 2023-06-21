import React from 'react';
import s from './Header.module.scss'
import {Nav} from "./Nav/Nav";
import {motion, useScroll} from "framer-motion";

export const Header = () => {
  const {scrollYProgress} = useScroll();

  return (
        <div className={s.header}>
            <div className={s.navBlock}>
                <div className={s.navLogo}>
                    <span>{`< Denis Polunosik />`}</span>
                </div>
                <Nav/>
            </div>
          <motion.div className={s.progressBar} style={{scaleX: scrollYProgress}}/>
        </div>
    );
}
