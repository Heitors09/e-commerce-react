import { Link } from "react-router-dom";

export function Sections() {
  return (
    <div className="flex   w-[100%] items-center justify-between">
      <div className="bg-shirtStyle bg-center h-[500px] w-[500px] flex flex-col items-center justify-center gap-12 cursor-pointer group">
        <h2
          className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200
        "
        >
          SHIRT STYLE!
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  group-hover:bg-slate-900 group-hover:text-white">
          Shop Now
        </button>
      </div>
      <Link
        to="/loungewear"
        className="bg-louge  h-[500px] w-[500px] flex flex-col items-center justify-center gap-12 hover:cursor-pointer group"
      >
        <h2 className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200">
          LOUNGEWEAR
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  group-hover:bg-slate-900 group-hover:text-white ">
          Shop Now
        </button>
      </Link>
      <Link
        to="/light-jackets"
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
