import React from 'react';

export default function Cart(props){
    const {cartItems, onAdd, onRemove} = props;
    const totalPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    return (
        <div className="block col-1">
            <h2>Cart items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={()=> onAdd(item)} className="add">+</button>{' '}
                <button onClick={()=> onRemove(item)} className="remove">-</button>
                </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr/>
                    <div>
                        <div>Total Price</div>
                            <div>${totalPrice.toFixed(2)}</div>
                        </div>
                    <hr />
                    <div className="row">
                        <button>
                            Book
                        </button>
                    </div>
                </>
            )}
        </div>
        </div>
    );
}

