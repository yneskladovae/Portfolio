import React from 'react';
import './Skill.css'

type SkillPropsType = {
    skillTitle: string
    path: string
    alt: string
}

export const Skill: React.FC<SkillPropsType> = ({skillTitle, path, alt}) => {
    return (
        <div className={'skill-container'}>
            <div className={'skill__block'}>
                <h3 className={'skill__block__title'}>{skillTitle}</h3>
                <img className={'skill__block__icon'} src={path} alt={alt}/>
            </div>
        </div>
    );
}