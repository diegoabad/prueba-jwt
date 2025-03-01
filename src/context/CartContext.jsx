import { createContext, useEffect, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);
  const addToCart = (product) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.id === product.id);
    if (itemIndex < 0) {
      newCart.push({ ...product, quantity: 1 });
    } else {
      newCart[itemIndex].quantity += 1;
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.id === product.id);
    if (itemIndex < 0) {
      return;
    } else {
      newCart[itemIndex].quantity -= 1;
      if (newCart[itemIndex].quantity === 0) {
        newCart.splice(itemIndex, 1);
      }
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, CartContext };
