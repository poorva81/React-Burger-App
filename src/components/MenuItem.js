import React from 'react';

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed()}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
