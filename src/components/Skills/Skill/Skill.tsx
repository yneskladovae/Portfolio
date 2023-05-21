import React from 'react';
import s from './Skill.module.scss'

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
                <img className={s.skillIcon} src={path} alt={alt}/>
            </div>
        </div>
    );
}