// src/ProductList.js
import { useState } from 'react';

const products = [
  { id: 1, name: 'Fone Bluetooth', price: 149.9, emoji: '🎧', category: 'Áudio' },
  { id: 2, name: 'Smartwatch', price: 399.9, emoji: '⌚', category: 'Wearables' },
  { id: 3, name: 'Teclado Mecânico', price: 259.9, emoji: '⌨️', category: 'Periféricos' },
  { id: 4, name: 'Mouse Gamer', price: 129.9, emoji: '🖱️', category: 'Periféricos' },
  { id: 5, name: 'Caixa de Som', price: 189.9, emoji: '🔊', category: 'Áudio' },
  { id: 6, name: 'Carregador Portátil', price: 89.9, emoji: '🔋', category: 'Energia' },
];

const categories = ['Todos', ...new Set(products.map((p) => p.category))];

function ProductList({ onAdd }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todos' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="product-section">
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filtered.length === 0 ? (
          <p className="no-results">Nenhum produto encontrado</p>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="product-card">
              <span className="product-emoji">{product.emoji}</span>
              <span className="badge">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">R$ {product.price.toFixed(2)}</p>
              <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;