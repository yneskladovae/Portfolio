import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    link: string
    style: {
        backgroundImage: string
    }
}

export const Project: React.FC<ProjectPropsType> = ({title, description, link, style}) => {
    return (
        <div className={s.projectBlock}>
            <h2 className={s.title}>{title}</h2>
            <div className={s.bgContainer} style={style}>
                <a className={s.link} href={link} target={"_blank"}>View</a>
            </div>
            <div className={s.projectInfo}>
                {/*<h2 className={s.title}>{title}</h2>*/}
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
}