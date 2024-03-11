import { createContext, useState, ReactNode } from "react";
import { toast } from "sonner";

type ItemsContextType = {
  cartItems: { [itemId: string]: number };
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  defineFinalItemsToBuy: (finalItems: Item[]) => void;
  finalItemsToBuy: Item[];
};

export const ItemsContext = createContext<ItemsContextType | null>(null);

type ProviderItemProps = {
  children: ReactNode;
};

interface Item {
  Name: string;
  id: string;
  url: string;
  price: number;
  promotion?: boolean;
}

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<{ [itemId: string]: number }>({});
  const [finalItemsToBuy, setFinalItemsToBuy] = useState<Item[]>([]);
  

  function defineFinalItemsToBuy(finalItems: Item[]) {
    setFinalItemsToBuy(finalItems);
  }

  function addItem(itemId: string) {
    toast.success("Item adicionado ao Carrinho");
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
    defineFinalItemsToBuy,
    finalItemsToBuy,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
