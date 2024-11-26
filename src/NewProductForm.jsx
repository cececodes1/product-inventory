import React, { useState } from 'react';
import useInventory from './useInventory';

const NewProductForm = () => {
  const { addProduct } = useInventory();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      addProduct({ name, price: parseFloat(price) });
      setName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProductForm;