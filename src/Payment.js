// src/Payment.js
import { useState } from 'react';

const paymentMethods = [
  { id: 'credit', label: 'Cartão de Crédito', emoji: '💳' },
  { id: 'pix', label: 'Pix', emoji: '⚡' },
  { id: 'boleto', label: 'Boleto', emoji: '🧾' },
];

function Payment({ total, disabled }) {
  const [selected, setSelected] = useState('credit');
  const [confirmed, setConfirmed] = useState(false);

  const handleCheckout = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  };

  return (
    <div className="payment">
      <h3>Forma de pagamento</h3>
      <div className="payment-options">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`payment-option ${selected === method.id ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
            />
            <span>{method.emoji} {method.label}</span>
          </label>
        ))}
      </div>

      <button
        className="checkout-btn"
        disabled={disabled}
        onClick={handleCheckout}
      >
        Finalizar Compra — R$ {total.toFixed(2)}
      </button>

      {confirmed && (
        <p className="confirmation">
          ✅ Pedido confirmado via {paymentMethods.find((m) => m.id === selected).label}!
        </p>
      )}
    </div>
  );
}

export default Payment;