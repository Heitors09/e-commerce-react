import { Search } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import { ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <div className="w-[100%] bg-white h-[75px]  flex gap-5 p-5 items-center justify-between font-light drop-shadow-md">
      <div className="flex items-center gap-3">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="hover:cursor-pointer outline-none p-2  hover:bg-white rounded-full hover:opacity-85  group duration-150">
              <HamburgerMenuIcon className="text-slate-900 size-5  group-hover:text-slate-900" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white rounded-md drop-shadow-md font-Inter font-light outline-none ml-3 w-[200px] h-[100%] flex flex-col gap-5 p-2 "
              sideOffset={2}
            >
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Categories</button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Releases</button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Login</button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Promotions</button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <div className="flex">
          <textarea
            className="p-2 rounded-l-lg h-10 bg-transparent resize-none outline-none pt-2 bg-white border-solid border-bottom-2  border-slate-900 font-Inter font-light overflow-hidden text-nowrap ring-1"
            placeholder="Search"
          ></textarea>
          <button className=" h-10 w-9 rounded-r-lg bg-slate-900 p-2">
            <Search className="text-white size-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-1 text-slate-900 font-Inter mr-[120px]">
        <Link to="/" className="text-xl">
          VIBRA.
        </Link>
      </div>
      <div className="font-Inter text-slate-900  flex gap-5">
        <a href="">Register</a>
        <a href="">Login</a>
        <button>
          <ShoppingCart className="text-slate-900" />
        </button>
      </div>
    </div>
  );
}
