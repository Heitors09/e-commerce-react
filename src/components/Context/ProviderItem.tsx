import { createContext, useState, ReactNode, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "sonner";
import { clothesCollection } from "../data/data";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type ItemsContextType = {
  cartItems: cartItem[];
  addItem: (itemId: string, size: string) => void;
  decreaseItem: (itemId: string, size: string) => void;
  increaseItem: (itemId: string, size: string) => void;
  deleteItem: (itemId: string, size: string) => void;
  user: User | undefined;
  authGoogle: () => Promise<void>;
  totalPrice: number;
  goToItemPage: (itemId: string) => void;
  currentItem: item[];
  defineClothesSize: (size: string) => void;
  clothesSize: string;
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
  size?: string;
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
  size: string;
  quantity: number;
  purchaseId: string;
};

const initialCartItems: cartItem[] = [];
const initialCurrentItem: item[] = [];

export function ProviderItem({ children }: ProviderItemProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>(initialCartItems);
  const [user, setUser] = useState<User>();
  const itemsOnStorage = JSON.parse(localStorage.getItem("items"));
  const [currentItem, setCurrentItem] = useState<item[]>(initialCurrentItem);
  const navigate = useNavigate();
  const [clothesSize, setClothesSize] = useState("");

  function defineClothesSize(itemSize: string) {
    setClothesSize(itemSize);
  }

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

  function deleteItem(itemId: string, size: string) {
    const deletedItems = cartItems.filter(
      (item) => !(item.id === itemId && item.size === size)
    );

    localStorage.setItem("items", JSON.stringify(deletedItems));
    const deletedStorage = JSON.parse(localStorage.getItem("items"));
    setCartItems(deletedStorage);
  }

  function addItem(itemId: string, size: string) {
    if (!clothesSize) {
      toast("plese select a size");
      return;
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === itemId && item.size === size
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem("items", JSON.stringify(updatedCartItems));
      setClothesSize("");
      setCartItems(updatedCartItems);
      toast.success("+1 added to the cart");
      return;
    }

    for (const collection of clothesCollection) {
      const { items } = collection;
      const newItem = items.find((item) => item.id === itemId);
      if (newItem) {
        const updatedCartItems = [
          ...cartItems,
          { ...newItem, quantity: 1, size: size, purchaseId: uuidv4() },
        ];
        localStorage.setItem("items", JSON.stringify(updatedCartItems));

        setCartItems(updatedCartItems);
        setClothesSize("");
        toast.success("new item added to the cart");
      }
    }
  }

  function increaseItem(itemId: string, size: string) {
    const nextCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.size === size) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("items", JSON.stringify(nextCartItems));

    setCartItems(nextCartItems);
    toast.success("+1 added to the cart");
  }

  function decreaseItem(itemId: string, size: string) {
    const nextCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1 && item.size === size) {
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
    totalPrice,
    goToItemPage,
    currentItem,
    defineClothesSize,
    clothesSize,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
