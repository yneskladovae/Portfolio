import React from 'react';
import './Skills.css'
import StyleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {MySkillsData} from '../../data/skills'
import {githubDots} from "../../utils/icons";

export const Skills = () => {
    return (
        <div className={'skills'}>
            <div className={`${StyleContainer.container} skills__style-container`}>
                <div className={'skills__container'}>
                    <div className={'skills__container__photo'}>
                        <img src={githubDots} alt="Programmer"/>
                    </div>
                    <div className={'skills__container__skills-items'}>
                        <h2 className={'skills__container__skills-items__title'}>Skills</h2>
                        <div className={'skills__container__skills-items__skills'}>
                            {MySkillsData.map(skill => {
                                return <Skill key={skill.title} skillTitle={skill.title} path={skill.path} alt={skill.alt}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
