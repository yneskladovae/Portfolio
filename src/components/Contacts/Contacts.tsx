import React from 'react';
import s from './Contacts.module.css'
import StyleContainer from '../../common/styles/Container.module.css'
import separator from './footer-wave-dark.svg'
import message from './message.svg'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <img className={s.separatorContacts} src={separator} alt="Separator for contacts"/>
            <div className={`${StyleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.contactsItems}>
                    <div className={s.contactsData}>
                        <h2>Connect with me</h2>
                        <ul>
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                            <li>denispolinosik@gmail.com</li>
                        </ul>
                    </div>
                    <img className={s.contactsImg} src={message} alt="message picture"/>
                    <div className={s.form}>
                        <h2>Contact me</h2>
                        <form>
                            <div className={s.contactItems}>
                                <div className={s.inputField}>
                                    <input placeholder="Name" type="text"/>
                                </div>
                                <div className={s.inputField}>
                                    <input placeholder="Email" type="text"/>
                                </div>
                            </div>
                            <div className={s.textarea}>
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className={s.sendMessage}>
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}