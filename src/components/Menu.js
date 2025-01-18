import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items, addToCart }) => {
  return (
    <div className="menu">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;
