import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { ArrowRight, ShoppingCart } from "lucide-react";

export function FinalCart() {
  const provider = useContext(ItemsContext);
  const finalItems = provider?.finalItemsToBuy;
  console.log(finalItems);

  return (
    <div className="flex items-start bg-slate-100">
      <div className="flex flex-col items-center text-sm">
        <div className="h-6 bg-white ring-1 rounded-md m-[50px] ring-slate-200 w-[800px] flex justify-between px-7">
          <p>Itens</p>
          <ul className="flex gap-7">
            <li>Quantidade</li>
            <li>Valor</li>
          </ul>
        </div>
        <div className=" w-[800px]  flex flex-col gap-2 mb-[20px]">
          {finalItems?.map((item) => (
            <div className="flex h-20 bg-white items-center ring-1 rounded-md ring-slate-200 justify-between">
              <div className="flex items-center">
                <img
                  className="p-2 size-20 rounded-md"
                  src={item.url}
                  alt="item selecionado"
                />
                <h3>{item.Name}</h3>
              </div>
              <ul className="flex gap-20 px-9">
                <li>X</li>
                <li>{item.price}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <aside className="flex flex-col gap-4 mt-[50px] w-64">
        <h2 className="flex gap-2 items-end justify-center">
          <ShoppingCart className="text-red-500" />
          Resumo da Compra
        </h2>
        <div className="flex justify-between ring-1 rounded-md px-5 ring-slate-200 bg-white">
          <h2>Valor</h2>
          <p>Total</p>
        </div>
        <button className="bg-red-500 text-white h-12 rounded-full font-bold text-sm flex items-center justify-center gap-8">
          <p>Go to Payment</p>
          <ArrowRight className="size-5" />
        </button>
      </aside>
    </div>
  );
}
