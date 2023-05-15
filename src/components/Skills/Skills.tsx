import React from 'react';
import s from './Skills.module.css'
import StyleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {MySkillsData} from '../../data/skills'
import {githubDots} from "../../utils/icons";
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <div className={s.skillsBlockContainer}>
                    <div className={s.skillsBlockImg}>
                        <img src={githubDots} alt="Programmer"/>
                    </div>
                    <div className={s.skillsBlockSkills}>
                        <h2 className={s.title}>Skills</h2>
                        <div className={s.skills}>
                            {MySkillsData.map(skill => {
                                return <Skill skillTitle={skill.title} path={skill.path} alt={skill.alt}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}