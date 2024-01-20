// App.js

import React, { useState } from 'react';
import './App.css';

const productsData = [
  { id: 1, name: 'Product 1', price: 20, imageUrl: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 30, imageUrl: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', price: 25, imageUrl: '/images/product3.jpg' },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
      <h1>Welcome to our E-commerce Store!</h1>
      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
      <footer className="footer">
        <div className="contact-info">
          <p>Contact: (123) 456-7890</p>
          <p>Email: rahulmadhu212@.com</p>
        </div>
        <div className="copyright">
          <p>&copy; 2022 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
