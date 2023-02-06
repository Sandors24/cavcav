import React, { useState } from 'react';

const shoes = [
  {
    id: 1,
    name: "Running Shoes",
    sizes: [7, 8, 9, 10],
    price: 70
  },
  {
    id: 2,
    name: "Hiking Boots",
    sizes: [8, 9, 10, 11],
    price: 120
  },
  {
    id: 3,
    name: "Dress Shoes",
    sizes: [7, 8, 9],
    price: 150
  }
];

function ShoeStore() {
  const [selectedSize, setSelectedSize] = useState();
  const [cart, setCart] = useState([]);

  const handleSelectSize = (shoeId, size) => {
    setSelectedSize({ shoeId, size });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }

    setCart([...cart, selectedSize]);
  };

  return (
    <div>
      <h1>Shoe Store</h1>
      <div>
        {shoes.map(shoe => (
          <div key={shoe.id}>
            <h2>{shoe.name}</h2>
            <p>Available sizes: {shoe.sizes.join(", ")}</p>
            <select onChange={e => handleSelectSize(shoe.id, e.target.value)}>
              <option value="">Select size</option>
              {shoe.sizes.map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => {
          const shoe = shoes.find(shoe => shoe.id === item.shoeId);
          return (
            <li key={index}>
              {shoe.name} ({item.size}) - ${shoe.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoeStore;
