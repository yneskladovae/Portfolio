import React from 'react';
import s from './Contacts.module.css'
import StyleContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${StyleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.form}>
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
    );
}