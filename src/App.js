// src/App.js (atualizado)
import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

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
    </div>
  );
}

export default App;