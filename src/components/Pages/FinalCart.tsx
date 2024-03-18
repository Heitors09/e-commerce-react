import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { ArrowRight, ShoppingCart, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Item {
  Name: string;
  id: string;
  url: string;
  price: number;
  promotion?: boolean;
}

export function FinalCart() {
  const provider = useContext(ItemsContext);
  const finalItems = provider?.finalItemsToBuy;
  const quantity = provider?.cartItems;
  const navigate = useNavigate();
  const user = provider?.user;
  const cartItems = provider?.cartItems;

  function cauculateBuyPrice(
    items: Item[],
    cartItems: { [itemId: string]: number }
  ) {
    //os meus props recebem os items do meu carrinho e quais items são esses
    let totalPrice = 0;
    //começo com uma variavel de valor inicial 0
    items.forEach((item) => {
      if (cartItems[item.id]) {
        totalPrice += item.price * cartItems[item.id];
      }
    });
    return totalPrice;
  }

  const total = cauculateBuyPrice(finalItems, cartItems);
  console.log(total);

  function handleGoToPayment() {
    if (user) {
      navigate("/payment");
      return;
    }

    alert("é necessário estar logado para completar esta ação");
  }

  const cauculateItemTotalPrice = (itemId: string) => {
    const item = finalItems.find((item) => item.id === itemId);
    if (item) {
      return item.price * quantity[itemId];
    } else {
      return 0;
    }
  };

  return (
    <div className="flex items-start bg-slate-100">
      <div className="mt-[100px]  flex flex-col items-center text-sm">
        <div className="h-6 bg-white ring-1  m-[50px] ring-slate-200 w-[800px] flex justify-between px-7">
          <p>Itens</p>
          <ul className="flex gap-7">
            <li>Quantidade</li>
            <li>Valor</li>
          </ul>
        </div>
        <div className=" w-[800px]  flex flex-col gap-2 mb-[20px]">
          {finalItems?.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="flex h-20 min-w-[800px] bg-white items-center ring-1  ring-slate-200 justify-between">
                <div className="flex items-center">
                  <img
                    className="p-2 size-20"
                    src={item.url}
                    alt="item selecionado"
                  />
                  <h3>{item.Name}</h3>
                </div>
                <ul className="flex gap-20 px-9">
                  <li className="flex gap-3 ring-1 p-2 rounded-md ring-slate-200 items-center h-6 ">
                    <button onClick={() => provider?.removeItem(item.id)}>
                      -
                    </button>
                    <span className="font-bold">{quantity[item.id]}</span>
                    <button onClick={() => provider?.addItem(item.id)}>
                      +
                    </button>
                  </li>
                  <li className="font-bold">
                    ${cauculateItemTotalPrice(item.id)}
                  </li>
                </ul>
              </div>
              <button onClick={() => provider?.deleteItem(item.id)}>
                <Trash2Icon className="text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <aside className="flex flex-col gap-4 mt-[120px] w-64">
        <h2 className="flex gap-2 items-end justify-center">
          <ShoppingCart className="text-red-500" />
          Resumo da Compra
        </h2>
        <div className="flex justify-between ring-1  px-5 ring-slate-200 bg-white">
          <h2>Valor</h2>
          <p className="flex gap-1 font-bold">
            <p>$</p>
            {total}
          </p>
        </div>
        <button
          onClick={handleGoToPayment}
          className="bg-red-500 text-white h-12 rounded-full font-bold text-sm flex items-center justify-center gap-8"
        >
          <p>Go to Payment</p>
          <ArrowRight className="size-5" />
        </button>
      </aside>
    </div>
  );
}
