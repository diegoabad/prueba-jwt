import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h1>HOME</h1>
      {products &&
        products.map((product) => (
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
                addToCart(product);
              }}>
              AGREGAR AL CARRITO
            </button>
          </div>
        ))}
    </div>
  );
};

export default Home;
