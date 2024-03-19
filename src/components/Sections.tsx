import { Link } from "react-router-dom";

export function Sections() {
  return (
    <div className="flex gap-3  w-[100%] items-center justify-between mt-5">
      <Link
        to="/summer-collection"
        className="bg-shirtStyle bg-center h-[500px] w-[500px] flex flex-col items-center justify-center gap-12 cursor-pointer group"
      >
        <h2
          className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200
        "
        >
          SUMMER!
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  group-hover:bg-slate-900 group-hover:text-white">
          Shop Now
        </button>
      </Link>
      <Link
        to="/dresses-collection"
        className="bg-dresses bg-center h-[500px] w-[500px] flex flex-col items-center justify-center gap-12 hover:cursor-pointer group"
      >
        <h2 className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200">
          DRESSES
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  group-hover:bg-slate-900 group-hover:text-white ">
          Shop Now
        </button>
      </Link>
      <Link
        to="/jackets-collection"
        className="bg-jacket bg-center h-[500px] w-[500px] flex flex-col items-center justify-center gap-12 hover:cursor-pointer group"
      >
        <h2
          className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200
        "
        >
          LIGHT JACKETS
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  group-hover:bg-slate-900 group-hover:text-white">
          Shop Now
        </button>
      </Link>
    </div>
  );
}
