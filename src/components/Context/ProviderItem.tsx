import { createContext, useState, ReactNode, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "sonner";
import { clothesCollection } from "../data/data";

type ItemsContextType = {
  cartItems: cartItem[];
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

type cartItem = {
  Name: string;
  id: string;
  url: string;
  price: number;
  promotion?: boolean;
  quantity: number;
};

const initialCartItems: cartItem[] = [];

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>(initialCartItems);
  const [user, setUser] = useState<User>();
  const itemsOnStorage = JSON.parse(localStorage.getItem("items"));

  useEffect(() => {
    function storageToCart() {
      if (itemsOnStorage) {
        setCartItems(itemsOnStorage);
        return;
      }
      setCartItems([]);
    }

    storageToCart();
  }, []);

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
    localStorage.setItem("items", JSON.stringify(deletedItems));
    const deletedStorage = JSON.parse(localStorage.getItem("items"));
    setCartItems(deletedStorage);
  }

  function addItem(itemId: string) {
    if (cartItems === null) {
      console.error("cartItems permanece null");
    }

    const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem("items", JSON.stringify(updatedCartItems));
      const storageItems = JSON.parse(localStorage.getItem("items"));

      setCartItems(storageItems);
      toast.success("+1 adicionado ao carrinho");
      return;
    }

    for (const collection of clothesCollection) {
      const { items } = collection;
      const newItem = items.find((item) => item.id === itemId);
      if (newItem) {
        const updatedCartItems = [...cartItems, { ...newItem, quantity: 1 }];
        localStorage.setItem("items", JSON.stringify(updatedCartItems));
        const storageItems = JSON.parse(localStorage.getItem("items"));
        setCartItems(storageItems);
        toast.success("novo item adicionado ao carrinho");
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
    localStorage.setItem("items", JSON.stringify(nextCartItems));
    const storageItems = JSON.parse(localStorage.getItem("items"));

    setCartItems(storageItems);
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
    localStorage.setItem("items", JSON.stringify(nextCartItems));
    const storageItems = JSON.parse(localStorage.getItem("items"));
    setCartItems(storageItems);
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
