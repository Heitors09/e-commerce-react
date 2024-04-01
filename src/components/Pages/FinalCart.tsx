import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { ArrowRight, ShoppingCart, Trash2Icon } from "lucide-react";

//interface Item {
//Name: string;
//id: string;
//url: string;
//price: number;
//promotion?: boolean;
//}

export function FinalCart() {
  const provider = useContext(ItemsContext);
  const cartItems = provider?.cartItems;

  return (
    <div className="flex items-start bg-slate-100 min-h-[500px]">
      <div className="mt-[100px]  flex flex-col items-center text-sm">
        <div className="h-6 bg-white ring-1  m-[50px] ring-slate-200 w-[800px] flex justify-between px-7">
          <p>Itens</p>
          <ul className="flex gap-7">
            <li>Quantidade</li>
            <li>Valor</li>
          </ul>
        </div>
        <div className=" w-[800px]  flex flex-col gap-2 mb-[20px]">
          {cartItems?.map((item) => (
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
                    <button onClick={() => provider?.decreaseItem(item.id)}>
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button onClick={() => provider?.increaseItem(item.id)}>
                      +
                    </button>
                  </li>
                  <li className="font-bold">${item.price * item.quantity}</li>
                </ul>
              </div>
              <button onClick={() => provider?.deleteItem(item.id)}>
                <Trash2Icon className="text-black hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <aside className="flex flex-col gap-4 mt-[120px] w-64">
        <h2 className="flex gap-2 items-end justify-center">
          <ShoppingCart className="text-black" />
          Resumo da Compra
        </h2>
        <div className="flex justify-between ring-1  px-5 ring-slate-200 bg-white">
          <h2>Valor</h2>
          <p className="flex gap-1 font-bold">
            <p>$</p>
            {provider?.totalPrice}
          </p>
        </div>
        <button className="bg-green-500 text-white h-12 rounded-full font-bold text-sm flex items-center justify-center gap-8">
          <p>Go to Payment</p>
          <ArrowRight className="size-5" />
        </button>
      </aside>
    </div>
  );
}
