import React from 'react';
import s from './Skill.module.scss'
import {motion} from "framer-motion";

type SkillPropsType = {
  skillTitle: string
  path: string
  alt: string
}

export const Skill: React.FC<SkillPropsType> = ({skillTitle, path, alt}) => {
  return (
    <div className={s.skillBlock}>
      <div className={s.skillWrap}>
        <h3 className={'skill__block__title'}>{skillTitle}</h3>
        <motion.img className={s.skillIcon} src={path} alt={alt} whileHover={{rotate: 90}}/>
      </div>
    </div>
  );
}
