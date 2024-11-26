import { useState } from 'react';

// Dummy data for products
const initialProducts = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const useInventory = () => {
  const [products, setProducts] = useState(initialProducts);

  const fetchProducts = () => {

    return products;
  };

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: Date.now(), ...product }, // to generate a unique ID
    ]);
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return { products, fetchProducts, addProduct, removeProduct };
};

export default useInventory;