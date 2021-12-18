import React from 'react';
import './Contacts.css'



const Contacts = () => {
    return (

        <div>
            <form className='contacts-form'>
                <div className="form__title title-block">
                    <h2 className="title-block__title">Contact us</h2>
                </div>
                <hr/>
                <div className="form__subtitle subtitle-block">
                  <span className="subtitle-block__text">12678 Moscow, Russia</span>
                    <span className="subtitle-block__text">17, Pokrovka street</span>
                    <span className="subtitle-block__text">+7-495-783-489, info@mtshop.ru</span>
                </div>
                <hr/>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="name">Name</label>
                    <input className="input-block__input" type="name" id="name" placeholder="Enter your full name"/>
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="email">Email</label>
                    <input className="input-block__input" type="email" id="email" placeholder="Enter your e-mail"/>
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="phone">Phone</label>
                    <input className="input-block__input" type="phone" id="phone" placeholder="+7495783489"/>
                </div>
                <div className="form__input input-block">
                    <label className="input-block__label" htmlFor="message">Message</label>
                    <textarea className="input-block__message" type="message" id="message" placeholder="Type your message"/>
                </div>
               <button className="button-block__button" type="submit">Submit</button>
            </form>
        </div>

    );
};

export default Contacts;