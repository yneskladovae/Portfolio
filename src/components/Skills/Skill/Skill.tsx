import React from 'react';
import s from './Skill.module.css'


type SkillPropsType = {
    skillTitle: string
    path: string
    alt: string
}

export const Skill: React.FC<SkillPropsType> = ({skillTitle, path, alt}) => {
    return (
        <div className={s.skill}>
            <div className={s.details}>
                <h3>{skillTitle}</h3>
                <img className={s.icon} src={path} alt={alt}/>
            </div>
        </div>
    );
}