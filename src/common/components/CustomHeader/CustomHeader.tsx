import React, {FC} from 'react';
import s from './CustomHeader.module.scss'

type CustomHeaderPropsType = {
    header: string
    subHeader: string
}

export const CustomHeader: FC<CustomHeaderPropsType> = ({header, subHeader}) => {
    return (
        <div className={s.customHeader}>
            <h2>{header}</h2>
            <p>
                {subHeader}
                <span></span>
            </p>
        </div>
    );
};