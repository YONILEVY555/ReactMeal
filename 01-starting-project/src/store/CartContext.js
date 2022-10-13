import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  totalAmount: 0,  
  addItemHandler: () => {},
  subItemHandler: () => {}
});

export default CartContext;