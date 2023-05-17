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
                {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
                {/*    <path fill="#070422" fillOpacity="1"*/}
                {/*          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">*/}
                {/*    </path>*/}
                {/*</svg>*/}
            </div>
            <div className={'projects__items'}>
                <div className={`${StyleContainer.container} projects__container`}>
                    <h2 className={'projects__items__title'}>Projects</h2>
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
                {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{transform: 'rotate(0.5turn)'}}>*/}
                {/*    <path fill="#070422" fill-opacity="1"*/}
                {/*          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>*/}
                {/*</svg>*/}
                <img src={sectionSeparatorWave} alt="Section separator" style={{transform: 'rotate(0.5turn)'}}/>
            </div>
        </div>
    );
}