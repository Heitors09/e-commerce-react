import { createContext, useState, ReactNode } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "sonner";
import { clothesCollection } from "../data/data";

type ItemsContextType = {
  cartItems: cartItems[];
  addItem: (itemId: string) => void;
  decreaseItem: (itemId: string) => void;
  increaseItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  user: User | undefined;
  authGoogle: () => Promise<void>;
};

export const ItemsContext = createContext<ItemsContextType | null>(null);

type ProviderItemProps = {
  children: ReactNode;
};

//interface Item {
//Name: string;
//id: string;
//url: string;
//price: number;
//promotion?: boolean;
//}

type User = {
  id: string;
  name: string | null;
  avatar: string | null;
};

type cartItems = {
  Name: string;
  id: string;
  url: string;
  price: number;
  promotion?: boolean;
  quantity: number;
};

const initialCartItems: cartItems[] = [];

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<cartItems[]>(initialCartItems);
  const [user, setUser] = useState<User>();
  console.log(cartItems);

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
    } else {
      console.error(new Error());
    }
  }

  function deleteItem(itemId: string) {
    const deletedItems = cartItems.filter((item) => item.id !== itemId);

    setCartItems(deletedItems);
  }

  function addItem(itemId: string) {
    const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (existingItemIndex !== -1) {
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return updatedCartItems;
      });
      toast.success("item adicionado ao carrinho");
      return;
    }

    for (const collection of clothesCollection) {
      const { items } = collection;
      const newItem = items.find((item) => item.id === itemId);
      if (newItem) {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...newItem, quantity: 1 },
        ]);
        toast.success("novo item adicionado ao carrinho");
        return;
      }
    }
  }

  function increaseItem(itemId: string) {
    const nextCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });

    setCartItems(nextCartItems);
  }

  function decreaseItem(itemId: string) {
    const nextCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });

    setCartItems(nextCartItems);
  }

  const contextValue = {
    cartItems,
    addItem,
    decreaseItem,
    deleteItem,
    increaseItem,
    user,
    authGoogle,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
