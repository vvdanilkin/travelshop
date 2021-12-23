import React from 'react';
import './Contacts.css'
import emailjs from 'emailjs-com'


const Contacts = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_pr9b2xd',
            'template_8fkiimr',
            e.target,
            "user_f5U6tvu84KraZqoE2vJ7b"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

    return (

        <div>
            <form className='contacts-form' onSubmit={sendEmail}>
                <div className="form__title title-block">
                    <h2 className="title-block__title">Contacts</h2>
                </div>
                <hr/>
                <div className="form__subtitle subtitle-block">
                  <span className="subtitle-block__text">12678 Moscow, Russia</span>
                    <span className="subtitle-block__text">17, Pokrovka street</span>
                    <span className="subtitle-block__text">+7-495-783-4895, info@mtshop.ru</span>
                </div>
                <hr/>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="name">Name</label>
                    <input className="input-block__input" name="name" id="name" placeholder="Enter your full name"/>
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="email">Email</label>
                    <input className="input-block__input" type="email" id="email" placeholder="Enter your e-mail"/>
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="phone">Phone</label>
                    <input className="input-block__input" type="phone" id="phone" placeholder="+74957834895"/>
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="message">Message</label>
                    <textarea className="input-block__message" name="message" id="message" placeholder="Type your message"/>
                </div>
               <button className="button-block__button" type="submit">Submit</button>
            </form>
        </div>

    );
};

export default Contacts;