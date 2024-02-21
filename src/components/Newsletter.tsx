import { SendHorizontal } from "lucide-react";

export function Newsletter() {
  return (
    <div className="mt-12 h-[500px] w-[100%] bg-pink-50 flex flex-col items-center justify-center gap-12">
      <h2 className="font-light font-Inter text-7xl">Newsletter</h2>
      <footer className="font-light font-Inter text-3xl">
        Get timely updates from your favorites products.
      </footer>
      <div className="flex item-center">
        <input
          type="text"
          className="w-[650px] pl-3 font-Inter font-light outline-none ring-1 ring-gray-400"
          placeholder="Your email"
        />
        <button className="bg-slate-900 w-[80px] h-[43px] text-white flex justify-center items-center">
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
}
