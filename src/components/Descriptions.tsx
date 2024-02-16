import { Link } from "react-router-dom";

export function Descriptions() {
  return (
    <div className="flex  w-[100%] items-center justify-between">
      <div className="bg-dresses w-[50%] bg-no-repeat bg-cover bg-center h-[500px] flex flex-col items-center justify-center gap-10 group hover:cursor-pointer hover:scale-105 duration-200 hover:drop-shadow-md">
        <h2 className="font-Inter font-medium text-4xl text-white  ">
          NEW DRESSES
        </h2>
        <div className="w-[500px] h-16 bg-white opacity-60 p-2 ">
          <p className="font-Inter font-light">
            Upgrade your look with our selection of must-have dresses Choose
            your style, combine your dresses
          </p>
        </div>
        <Link
          to="/dresses"
          className="font-Inter w-[150px] h-[50px] bg-white font-light group-hover:-translate-y-3 duration-200 hover:bg-slate-900 hover:text-white flex justify-center items-center"
        >
          SHOP NOW
        </Link>
      </div>
      <div className="bg-jeans bg-no-repeat bg-cover bg-center w-[50%] h-[500px] flex flex-col items-center justify-center gap-10 group hover:cursor-pointer hover:scale-105 duration-200 hover:drop-shadow-md">
        <h2 className="font-Inter font-medium text-4xl text-white">
          THE PERFECT JEANS!
        </h2>
        <div className="w-[500px] h-16 bg-white opacity-60 p-2">
          <p className="font-Inter font-light">
            Upgrade your look with our selection of must-have dresses Choose
            your style, combine your dresses
          </p>
        </div>
        <Link
          to="/jeans"
          className="font-Inter w-[150px] h-[50px] bg-white font-light group-hover:-translate-y-3 duration-200 hover:bg-slate-900 hover:text-white flex justify-center items-center"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
