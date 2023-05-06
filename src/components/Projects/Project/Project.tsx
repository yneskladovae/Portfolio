import React from 'react';
import s from './Project.module.css'

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
        <div className={s.project}>
            <div className={s.imageContainer} style={style}>
                <a href={link} target={"_blank"}>View</a>
            </div>
            <div className={s.projectInfo}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}