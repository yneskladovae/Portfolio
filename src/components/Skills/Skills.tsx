import React from 'react';
import s from './Skills.module.css'
import StyleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill skillTitle={"React"}/>
                    <Skill skillTitle={"Redux"}/>
                    <Skill skillTitle={"TypeScript"}/>
                    <Skill skillTitle={"JavaScript"}/>
                    <Skill skillTitle={"REST API"}/>
                    <Skill skillTitle={"Thunk"}/>
                    <Skill skillTitle={"CSS/SASS"}/>
                    <Skill skillTitle={"HTML5"} />
                </div>
            </div>
        </div>
    );
}