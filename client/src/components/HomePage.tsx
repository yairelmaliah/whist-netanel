import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './Card';
import Cart from './Cart';

const HomePage = () => {
  const [products] = useProducts();

  const [shoppingCart, setShoppingCart] = useState<any>([]);

  const handleBuyClick = (item: any) => {
    setShoppingCart([...shoppingCart, item]);
  };
  return (
    <div>
      <Cart cartItems={shoppingCart} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <ProductCard handleClick={handleBuyClick} {...p} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
