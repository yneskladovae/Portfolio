import React from 'react';
import s from './Projects.module.css'
import StyleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${StyleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={"Social Network"}
                             style={{backgroundImage: `url("https://ericaghadiuno.com/wp-content/uploads/2021/01/testimonial-bg.jpg")`}}
                             link={""}
                             description={"Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post."}/>

                    <Project title={"ToDo List"}
                             style={{backgroundImage: `url("https://ericaghadiuno.com/wp-content/uploads/2021/01/testimonial-bg.jpg")`}}
                             link={""}
                             description={"ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management."}/>

                    <Project title={"Counter"}
                             style={{backgroundImage: `url("https://ericaghadiuno.com/wp-content/uploads/2021/01/testimonial-bg.jpg")`}}
                             link={""}
                             description={"Counter is a test project which (to tell the truth) doesn't have a lot of practical use. It allows to do some settings which influence on the way how the counter works."}/>
                </div>
            </div>
        </div>
    );
}