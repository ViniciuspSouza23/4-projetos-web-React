// src/App.js (final)
import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './Product.List';
import Cart from './Cart';
import Footer from './Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemove = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <ProductList onAdd={handleAdd} />
        <Cart items={cartItems} onRemove={handleRemove} />
      </div>
      <Footer />
    </div>
  );
}

export default App;