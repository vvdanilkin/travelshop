import React, {useContext, useEffect, useState} from 'react';
import './Cart/Cart.css'
import './Order.css'
import emailjs from 'emailjs-com'



const Order = () => {
    const [cartItems, setCartItems] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    useEffect(() => {
        if (localStorage.getItem('cartItems')) {
            const res = JSON.parse(localStorage.getItem('cartItems'))
            setCartItems(res)
        } else {
            localStorage.setItem('cartItems', JSON.stringify([]))
        }

        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }

    }, [])

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_pr9b2xd',
            'template_8fkiimr',
            e.target,
            "user_f5U6tvu84KraZqoE2vJ7b"
        ).then(res=>{
            console.log(res);
            return alert('Your message was successfully delivered')
        }).catch(err=> console.log(err));
    }



    return (

        <div>
            <form className='form__order' onSubmit={sendEmail}>
                <div className="order__title title-block">
                    <h2 className="title-block__title">Your order</h2>
                </div>
                    <h2 className="order-cart__title">Items</h2>
                    <hr className="order-cart__line"/>
                    <div className="order-cart">
                        {cartItems.length === 0 && <div className="order-item__empty">You have no orders</div>}
                        {cartItems.map((item) => (
                            <div key={item.id} className="order-item__row">
                                <div className="order-item__name">{item.name}</div>
                                <div className="order-item__qtyprice">
                                    {item.qty} x ${item.price.toFixed(2)}
                                </div>
                            </div>
                        ))}
                        {cartItems.length !== 0 && (
                            <>
                                <hr className="order-line"/>
                                <div className="order-totalprice">
                                    <div className="order-totalprice__title">Total Price</div>
                                    <div className="order-totalprice__sum">${totalPrice.toFixed(2)}</div>
                                </div>


                            </>
                        )}
                    </div>
                <div className="order__input input-block">
                    <label className="input-block__label" htmlFor="name">Name</label>
                    <input className="input-block__input" name="name" id="name" placeholder="Enter your full name"/>
                </div>
                <div className="order__input input-block">
                    <label className="input-block__label" htmlFor="email">Email</label>
                    <input className="input-block__input" type="email" id="email" placeholder="Enter your e-mail"/>
                </div>
                <div className="order_input input-block">
                    <label className="input-block__label" htmlFor="phone">Phone</label>
                    <input className="input-block__input" type="phone" id="phone" placeholder="+74957834895"/>
                </div>
                <div className="order__input input-block">
                    <label className="input-block__label" htmlFor="message">Message</label>
                    <textarea className="input-block__message" name="message" id="message" placeholder="Type your message"/>
                </div>
                <>
                <button className="button-block__button" type="submit">Submit</button>
                </>
            </form>


        </div>
    );
};

export default Order;