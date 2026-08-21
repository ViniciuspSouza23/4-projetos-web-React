// src/ProductList.js (atualizado)
const products = [
  { id: 1, name: 'Fone Bluetooth', price: 149.9, emoji: '🎧' },
  { id: 2, name: 'Smartwatch', price: 399.9, emoji: '⌚' },
  { id: 3, name: 'Teclado Mecânico', price: 259.9, emoji: '⌨️' },
  { id: 4, name: 'Mouse Gamer', price: 129.9, emoji: '🖱️' },
  { id: 5, name: 'Caixa de Som', price: 189.9, emoji: '🔊' },
  { id: 6, name: 'Carregador Portátil', price: 89.9, emoji: '🔋' },
];

function ProductList({ onAdd }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <span className="product-emoji">{product.emoji}</span>
          <h3>{product.name}</h3>
          <p className="price">R$ {product.price.toFixed(2)}</p>
          <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;