import React from 'react';
import './Project.scss'

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
        <div className={'project'}>
            <div className={'project__bg-container'} style={style}>
                <a className={'project__bg-container__link'} href={link} target={"_blank"}>View</a>
            </div>
            <div className={'project__info'}>
                <h2 className={'project__info__title'}>{title}</h2>
                <p className={'project__info__description'}>{description}</p>
            </div>
        </div>
    );
}