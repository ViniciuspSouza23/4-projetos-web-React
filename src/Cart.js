// src/Cart.js
function Cart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrinho</h2>
      {items.length === 0 ? (
        <p className="empty">Nenhum item adicionado ainda</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{item.emoji} {item.name}</span>
                <span>R$ {item.price.toFixed(2)}</span>
                <button className="remove" onClick={() => onRemove(index)}>✕</button>
              </li>
            ))}
          </ul>
          <p className="total">Total: R$ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default Cart;