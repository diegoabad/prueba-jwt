import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const Cart = () => {
  const { removeFromCart, cart, addToCart } = useContext(CartContext);
  return (
    <div>
      <h1>CARRITO</h1>
      {cart &&
        cart.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '220px' }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
            <button
              onClick={() => {
                removeFromCart(product);
              }}>
              -
            </button>
            {product.quantity}
            <button
              onClick={() => {
                addToCart(product);
              }}>
              +
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
