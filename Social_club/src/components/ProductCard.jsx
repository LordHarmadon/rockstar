// components/ProductCard.js
import React from 'react';

export default function ProductCard({ product }) {
  const { name, description, price, imageUrl } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
        {/* Опционально: добавить оверлей с кнопками при наведении */}
        <div className="product-overlay">
          <button className="add-to-cart-btn">В корзину</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}