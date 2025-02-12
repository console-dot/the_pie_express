"use client";
import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [animate, setAnimate] = useState();
  const [basketModal, setBasketModal] = useState(false);
  const handleAddToCart = (items) => {
    setBasketModal(true);
    setAnimate(items?.id);
    setTimeout(() => {
      setClickedId(null);
    }, 1000);

    setCartItems([...cartItems, items]);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        animate,
        basketModal,
        setBasketModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
