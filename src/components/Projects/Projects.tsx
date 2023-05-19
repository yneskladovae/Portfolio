import React from 'react';
import './Projects.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {MyProjectsData} from '../../data/projects'
import {sectionSeparatorWave,} from "../../utils/icons";

export const Projects = () => {
    return (
        <div className={'projects'}>
            {/*<h2 className={'projects__title'}>Featured Projects</h2>*/}
            <div className={'separatorWaveTop'}>
                <img src={sectionSeparatorWave} alt="Section separator"/>
            </div>
            <div className={'projects__items'}>
                <div className={`${StyleContainer.container} projects__container`}>
                    {/*<h2 className={'projects__items__title'}>Projects</h2>*/}
                    {/*<div className="position-relative d-flex text-center mb-5">*/}
                    {/*    <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-muted opacity-1">Portfolio</h2>*/}
                    {/*    <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-white">*/}
                    {/*        Projects*/}
                    {/*        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div className="position-relative d-flex text-center mb-5">
                        <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-muted opacity-1">Abilities</h2>
                        <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-white">
                            Skills
                            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
                        </p>
                    </div>
                    <div className={'projects__items__projects'}>
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
            <div className={'separatorWaveBottom'}>
                <img src={sectionSeparatorWave} alt="Section separator" style={{transform: 'rotate(0.5turn)'}}/>
            </div>
        </div>
    );
}