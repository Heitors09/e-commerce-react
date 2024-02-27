import { createContext, useState, ReactNode } from "react";

type ItemsContextType = {
  cartItems: { [itemId: string]: number };
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
};

export const ItemsContext = createContext<ItemsContextType | null>(null);

type ProviderItemProps = {
  children: ReactNode;
};

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<{ [itemId: string]: number }>({});

  function addItem(itemId: string) {
    const currentQuantity = cartItems[itemId] || 0;
    setCartItems({ ...cartItems, [itemId]: currentQuantity + 1 });
  }

  function removeItem(itemId: string) {
    const currentQuantity = cartItems[itemId] || 0;
    if (currentQuantity === 0) {
      return;
    } else {
      setCartItems({ ...cartItems, [itemId]: currentQuantity - 1 });
    }
  }

  const contextValue = {
    cartItems,
    addItem,
    removeItem,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
