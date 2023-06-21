import React from 'react';
import s from './Contacts.module.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {message, footerWave, gitHubIcon, linkedInIcon, emailIcon} from "../../utils/icons";


export const Contacts = () => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <img className={s.contactsSeparator} src={footerWave} alt="Separator for contacts"/>
            <div className={`${StyleContainer.container} \`${s.contactsContainer}`}>
                <div className={s.contactsWrap}>
                    <div className={s.info}>
                        <h2 className={s.title}>Connect with me</h2>
                        <div className={s.infoWrap}>
                            <ul className={s.links}>
                                <li>
                                    <a href="">
                                        <img src={gitHubIcon} alt=""/>
                                        GitHub
                                    </a>

                                </li>
                                <li>
                                    <a href="">
                                        <img src={linkedInIcon} alt=""/>
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={emailIcon} alt=""/>
                                        denispolunosik
                                    </a>
                                </li>
                            </ul>
                            <img className={s.contactsImg} src={message} alt="message picture"/>
                        </div>
                    </div>
                    {/*<img className={s.contactsImg} src={message} alt="message picture"/>*/}
                    <div className={s.contactForm}>
                        <h2 className={s.formTitle}>Contact me</h2>
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
                            <div>
                                <button className={s.btnForm}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}