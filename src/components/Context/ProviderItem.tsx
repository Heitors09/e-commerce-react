import { createContext, useState, ReactNode, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "sonner";
import { clothesCollection } from "../data/data";
import { useNavigate } from "react-router-dom";

type ItemsContextType = {
  cartItems: cartItem[];
  addItem: (itemId: string) => void;
  decreaseItem: (itemId: string) => void;
  increaseItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  user: User | undefined;
  authGoogle: () => Promise<void>;
  totalPrice: number;
  goToItemPage: (itemId: string) => void;
  currentItem: item[];
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

type item = {
  Name: string;
  id: string;
  url: string;
  price: number;
  quantity?: number;
};

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
const initialCurrentItem: item[] = [];

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>(initialCartItems);
  const [user, setUser] = useState<User>();
  const itemsOnStorage = JSON.parse(localStorage.getItem("items"));
  const [currentItem, setCurrentItem] = useState<item[]>(initialCurrentItem);
  const navigate = useNavigate();

  function goToItemPage(itemId: string) {
    for (const collections of clothesCollection) {
      const { items } = collections;
      const foundItem = items.find((item) => item.id === itemId);
      if (foundItem) {
        localStorage.setItem("currentItem", JSON.stringify(foundItem));
        setCurrentItem([foundItem]);
      }
    }
    navigate(`/${itemId}`);
  }

  function cauculateTotalPrice() {
    const totalValue = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return totalValue;
  }

  const totalPrice = cauculateTotalPrice();

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
      toast.success("+1 added to the cart");
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
        toast.success("new item added to the cart");
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
    toast.success("+1 added to the cart");
  }

  function decreaseItem(itemId: string) {
    const nextCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        toast.success("-1 removed ");
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
    totalPrice,
    goToItemPage,
    currentItem,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
