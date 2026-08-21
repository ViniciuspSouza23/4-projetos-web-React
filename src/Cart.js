// src/Cart.js
function Cart({ items, onIncrease, onDecrease, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrinho {totalItems > 0 && `(${totalItems})`}</h2>
      {items.length === 0 ? (
        <p className="empty">Nenhum item adicionado ainda</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div className="item-info">
                  <span>{item.emoji} {item.name}</span>
                  <span className="unit-price">R$ {item.price.toFixed(2)} un.</span>
                </div>
                <div className="qty-controls">
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onIncrease(item.id)}>+</button>
                  <button className="remove" onClick={() => onRemove(item.id)}>✕</button>
                </div>
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