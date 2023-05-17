import React from 'react';
import './Contacts.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {message, footerWave} from "../../utils/icons";


export const Contacts = () => {
    return (
        <div className={'contacts'}>
            <img className={'contacts__separator'} src={footerWave} alt="Separator for contacts"/>
            <div className={`${StyleContainer.container} contacts__container`}>
                {/*<h2 className={'contacts__title'}>Contacts</h2>*/}
                <div className={'contacts__items'}>
                    <div className={'contacts__info'}>
                        <h2 className={'contacts__info__title'}>Connect with me</h2>
                        <ul>
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                            <li>denispolunosik@gmail.com</li>
                        </ul>
                    </div>
                    <img className={'contacts__img'} src={message} alt="message picture"/>
                    <div className={'contacts__form'}>
                        <h2 className={'contacts__form__title'}>Contact me</h2>
                        <form>
                            <div className={'contacts__form__inputs'}>
                                <div className={'contacts__form__inputs-name'}>
                                    <input placeholder="Name" type="text"/>
                                </div>
                                <div className={'contacts__form__inputs-email'}>
                                    <input placeholder="Email" type="text"/>
                                </div>
                            </div>
                            <div className={'contacts__form__textarea'}>
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className={'contacts__form__btn'}>
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}