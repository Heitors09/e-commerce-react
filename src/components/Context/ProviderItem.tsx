import { createContext, useState, ReactNode } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

type ItemsContextType = {
  cartItems: { [itemId: string]: number };
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  defineFinalItemsToBuy: (finalItems: Item[]) => void;
  finalItemsToBuy: Item[];
  deleteItem: (itemId: string) => void;
  user: User | undefined;
  authGoogle: () => Promise<void>;
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

type User = {
  id: string;
  name: string | null;
  avatar: string | null;
};

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<{ [itemId: string]: number }>({});
  const [finalItemsToBuy, setFinalItemsToBuy] = useState<Item[]>([]);
  const [user, setUser] = useState<User>();

  async function authGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  function deleteItem(itemId: string) {
    const deletedState = { ...cartItems };
    delete deletedState[itemId];

    setCartItems(deletedState);
  }

  function defineFinalItemsToBuy(finalItems: Item[]) {
    setFinalItemsToBuy(finalItems);
  }

  function addItem(itemId: string) {
    alert("Item adicionado ao carrinho");
    const currentQuantity = cartItems[itemId] || 0;
    setCartItems({ ...cartItems, [itemId]: currentQuantity + 1 });
  }

  function removeItem(itemId: string) {
    const currentQuantity = cartItems[itemId] || 0;
    if (currentQuantity === 1) {
      return;
    }

    setCartItems({ ...cartItems, [itemId]: currentQuantity - 1 });
  }

  const contextValue = {
    cartItems,
    addItem,
    removeItem,
    defineFinalItemsToBuy,
    finalItemsToBuy,
    deleteItem,
    user,
    authGoogle,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
