import React, { useState } from 'react';
import ProductCard from '../components/ProductCard'; 


const mockProducts = [
  { id: 1, name: 'Игра 1', description: 'Описание игры 1', price: 29.99, imageUrl: 'https://via.placeholder.com/300x400?text=Game+1' },
  { id: 2, name: 'Игра 2', description: 'Описание игры 2', price: 39.99, imageUrl: 'https://via.placeholder.com/300x400?text=Game+2' },
  { id: 3, name: 'Игра 3', description: 'Описание игры 3', price: 49.99, imageUrl: 'https://via.placeholder.com/300x400?text=Game+3' },

];

export default function ProductsPage() {
  const [products] = useState(mockProducts);

  return (
    <div className="products-page">
      <h1 className="page-title">Каталог Игр</h1> 
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}