import React from 'react';
import s from './Skills.module.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {MySkillsData} from '../../data/skills'
import {githubDots} from "../../utils/icons";
import {CustomHeader} from "../../common/components/CustomHeader/CustomHeader";

export const Skills = () => {
    return (
        <div className={s.skillsBlcok}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <CustomHeader header={'Skills'} subHeader={'My skills'}/>
                <div className={s.skillsWrap}>
                    <div className={s.skillsPhoto}>
                        <img src={githubDots} alt="Programmer"/>
                    </div>
                    <div className={s.skillsItems}>
                        {/*<h2 className={s.skillsTitle}>Skills</h2>*/}
                        <div className={s.skills}>
                            {MySkillsData.map(skill => {
                                return <Skill
                                    key={skill.title}
                                    skillTitle={skill.title}
                                    path={skill.path}
                                    alt={skill.alt}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
