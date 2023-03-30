import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    skillTitle: string
}

export const Skill: React.FC<SkillPropsType> = ({skillTitle}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <div className={s.details}>
                <h3>{skillTitle}</h3>
            </div>
        </div>
    );
}