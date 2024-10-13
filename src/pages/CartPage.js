import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, updateQuantity, removeItem }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, e.target.value)} 
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
