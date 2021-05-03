import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
        
    }
    return (
        <div>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price:</p>
            <p>Shipping Cost:</p>
            <p>Tax + VAT:</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;