// pages/CartPage.js
import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext'; // Пример использования Context

// const CartContext = React.createContext(); // Если не используете отдельный файл контекста

export default function CartPage() {
  // const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext); // Пример использования
  // Для демонстрации используем mock-данные
  const mockCartItems = [
    { id: 1, productId: 1, name: 'Игра 1', price: 29.99, quantity: 1 },
    { id: 2, productId: 3, name: 'Игра 3', price: 49.99, quantity: 2 },
  ];

  const total = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Ваша Корзина</h1>
      {mockCartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {mockCartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">Кол-во: {item.quantity}</span>
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                {/* <button onClick={() => removeFromCart(item.id)}>Удалить</button> */}
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Итого: ${total.toFixed(2)}</strong>
          </div>
          <button className="checkout-btn">Оформить заказ</button>
        </div>
      )}
    </div>
  );
}