import React, { createContext, useContext, useState } from "react";

import { getProduct } from "../source/data/products";
import { readJSON, writeJSON } from "./storage";

// Every item is one of a kind, so the cart is just a list of product ids (no quantities).

const CART_KEY = "bit_cart";

// signed-in customers get a personal discount (promised on the sign-in page)
export const MEMBER_DISCOUNT = 0.05;

export const calcTotals = (subtotal, isMember) => {
  const discount = isMember ? Math.round(subtotal * MEMBER_DISCOUNT) : 0;
  return { subtotal, discount, total: subtotal - discount };
};

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // drop ids of products that no longer exist
  const [ids, setIds] = useState(() =>
    readJSON(localStorage, CART_KEY, []).filter((id) => getProduct(id))
  );

  const save = (next) => {
    setIds(next);
    writeJSON(localStorage, CART_KEY, next);
  };

  const add = (id) => {
    if (!ids.includes(id)) save([...ids, id]);
  };

  const remove = (id) => save(ids.filter((item) => item !== id));

  const clear = () => save([]);

  const items = ids.map(getProduct);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const savings = items.reduce((sum, item) => sum + (item.oldPrice ? item.oldPrice - item.price : 0), 0);

  return (
    <CartContext.Provider
      value={{ items, count: items.length, total, savings, add, remove, clear, has: (id) => ids.includes(id) }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
