import React, {FormEvent, useRef} from 'react';
import s from './Contacts.module.scss'
import StyleContainer from '../../common/styles/Container.module.css'
import {message, footerWave, gitHubIcon, linkedInIcon, emailIcon} from "../../utils/icons";
import {Reveal} from "../../common/components/Reveal/Reveal";
import emailjs from 'emailjs-com';
import {EmailJSResponseStatus} from "emailjs-com";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
export const Contacts = () => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
    mode: "all"
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const serviceId: string = 'service_kwlgtlm';
    const templateId: string = 'template_cjg3jeo';
    const publicKey: string = '9Ia-dpC1SJYn_K_Af';

    emailjs.send(serviceId, templateId, data, publicKey).then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        toast.success("Thank you for your letter!");
      },
      (error: EmailJSResponseStatus) => {
        console.log(error.text);
      }
    );
    reset();
  };


  return (
    <div className={s.contactsBlock}>
      <img className={s.contactsSeparator} src={footerWave} alt="Separator for contacts"/>
      <div id='contacts' className={`${StyleContainer.container} ${s.contactsContainer}`}>
        <div className={s.contactsWrap}>
          <div className={s.info}>
            <Reveal>
              <h2 className={s.title}>Connect with me</h2>
              <div className={s.infoWrap}>
                <ul className={s.links}>
                  <li>
                    <a href="">
                      <img src={gitHubIcon} alt="Icon"/>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={linkedInIcon} alt="Icon"/>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={emailIcon} alt="Icon"/>
                      denispolunosik@gmail.com
                    </a>
                  </li>
                </ul>
                <img className={s.contactsImg} src={message} alt="message picture"/>
              </div>
            </Reveal>
          </div>
          <div className={s.contactForm}>
            <Reveal>
              <h2 className={s.formTitle}>Contact me</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'contacts__form__inputs'}>
                  <div className={'contacts__form__inputs-name'}>
                    <input placeholder="Name" type="text"
                           {...register("name", {
                             required: "The field is required",
                             minLength: {
                               value: 3,
                               message: "The minimum length is 3 symbol",
                             },
                           })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                  </div>
                  <div className={'contacts__form__inputs-email'}>
                    <input placeholder="Email" type="text"
                           {...register("email", {
                             required: "This field is required",
                             pattern: {
                               value: emailPattern,
                               message: "Invalid email address",
                             },
                           })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                </div>
                <div className={'contacts__form__textarea'}>
                  <textarea placeholder="Message" {...register("message", {required: true})}></textarea>
                  {errors.message && <span>This field is required</span>}
                </div>
                <div>
                  <button className={s.btnForm} type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}