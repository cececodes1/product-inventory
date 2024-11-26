import React from 'react';
import useInventory from './useInventory';

const ProductList = () => {
  const { products, removeProduct } = useInventory();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;