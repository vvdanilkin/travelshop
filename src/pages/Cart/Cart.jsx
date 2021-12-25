import React, {useContext} from 'react';
import './Cart.css'
import {AppContext} from "../../contexts/AppContext";
import {nanoid} from "../Private/Private";
import {Link} from "react-router-dom";


export default function Cart() {
    const {cartItems, setCartItems, onAdd, onRemove} = useContext(AppContext)
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    /*function handleSubmit(e) {
        e.preventDefault()
        console.log("handleSubmit")
        let prevOrders = JSON.parse(localStorage.getItem('orders'))
        if (!prevOrders) {
            prevOrders = []
        }
        localStorage.setItem('orders', JSON.stringify([...prevOrders, {
            id: Number(nanoid()),
            cartItems: cartItems
        }]))
        setCartItems([])

        return alert('Заявка создана')
    }*/

    return (
        <form className="section-cart" /*onSubmit={handleSubmit}*/>
            <h2 className="section-cart__title">Your shopping cart</h2>
            <div className="cart-container">
                <h2 className="cart-title">Cart items</h2>
                <hr className="cart-line"/>
                <div className="cart">
                    {cartItems.length === 0 && <div className="cart-item__empty">Cart is empty</div>}
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item__row">
                            <div className="cart-item__name">{item.name}</div>
                            <div className="cart-button__container">
                                <button onClick={() => onAdd(item)} className="cart-button__add">+</button>
                                &nbsp;
                                <button onClick={() => onRemove(item)} className="cart-button__remove">-</button>
                            </div>
                            <div className="cart-item__qtyprice">
                                {item.qty} x ${item.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
                    {cartItems.length !== 0 && (
                        <>
                            <hr className="cart-line"/>
                            <div className="cart-totalprice">
                                <div className="cart-totalprice__title">Total Price</div>
                                <div className="cart-totalprice__sum">${totalPrice.toFixed(2)}</div>
                            </div>
                            <hr/>
                            <Link to='/Order'>
                                <button className='cart-button__book' type="submit">Book</button>
                            </Link>

                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

