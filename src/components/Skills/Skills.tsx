import React from 'react';
import s from './Skills.module.css'
import StyleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import reactIcon from './svg/react-js-icon.svg'
import bashIcon from './svg/bash.svg'
import axiosIcon from './svg/axios.svg'
import cssIcon from './svg/css3.svg'
import htmlIcon from './svg/html5.svg'
import gitIcon from './svg/git.svg'
import githubIcon from './svg/github.svg'
import jsIcon from './svg/javascript.svg'
import materialUIIcon from './svg/material-ui.svg'
import reduxIcon from './svg/redux.svg'
import sassIcon from './svg/sass.svg'
import tsIcon from './svg/typescript.svg'
import githubDots from './svg/github-dots.svg'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${StyleContainer.container} ${s.skillsContainer}`}>
                <div className={s.skillsBlockContainer}>
                    <div className={s.skillsBlockImg}>
                        <img src={githubDots} alt="Programmer"/>
                    </div>
                    <div  className={s.skillsBlockSkills}>
                        <h2 className={s.title}>Skills</h2>
                        <div className={s.skills}>
                            <Skill skillTitle={'Bash'} path={bashIcon} alt={'Bash'}/>
                            <Skill skillTitle={'Axios'} path={axiosIcon} alt={'Axios'}/>
                            <Skill skillTitle={'CSS3'} path={cssIcon} alt={'CSS3'}/>
                            <Skill skillTitle={'HTML5'} path={htmlIcon} alt={'HTML5'}/>
                            <Skill skillTitle={'Git'} path={gitIcon} alt={'Git'}/>
                            <Skill skillTitle={'GitHub'} path={githubIcon} alt={'GitHub'}/>
                            <Skill skillTitle={'JavaScript'} path={jsIcon} alt={'JavaScript'}/>
                            <Skill skillTitle={'Material UI'} path={materialUIIcon} alt={'Material UI'}/>
                            <Skill skillTitle={'Redux'} path={reduxIcon} alt={'Redux'}/>
                            <Skill skillTitle={'SASS'} path={sassIcon} alt={'SASS'}/>
                            <Skill skillTitle={'TypeScript'} path={tsIcon} alt={'TypeScript'}/>
                            <Skill skillTitle={'React'} path={reactIcon} alt={'React'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}