import React from 'react';
import s from './Projects.module.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {MyProjectsData} from '../../data/projects'
import {sectionSeparatorWave,} from "../../utils/icons";
import {CustomHeader} from "../../common/components/CustomHeader/CustomHeader";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.separatorWaveTop}>
                <img src={sectionSeparatorWave} alt="Section separator"/>
            </div>
            <div className={s.projectsWrap}>
                <div className={`${StyleContainer.container} ${s.projectsContainer}`}>
                    <CustomHeader header={'Projects'} subHeader={'Featured Projects'}/>
                    <div className={s.projectsItems}>
                        {MyProjectsData.map(project => {
                            return <Project
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                style={{backgroundImage: `url(${project.backgroundImage})`}}
                            />
                        })}
                    </div>
                </div>
            </div>
            <div className={s.separatorWaveBottom}>
                <img src={sectionSeparatorWave} alt="Section separator" style={{transform: 'rotate(0.5turn)'}}/>
            </div>
        </div>
    );
}