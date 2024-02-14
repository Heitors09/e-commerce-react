import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <div className=" w-[100%] h-[100%] flex gap-2">
      <div className=" w-[400px] h-[100%] flex flex-col gap-5 items-center justify-center text-start p-5">
        <h2 className="text-2xl font-Inter font-light">VIBRA.</h2>
        <p className="font-medium font-Inter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum
          numquam voluptatem ratione, eaque id et libero nulla praesentium
          dolorem architecto repellat incidunt vitae dolore voluptatibus
          consequuntur veniam, voluptate ipsum.
        </p>
      </div>
      <div className=" w-[400px] h-[100%] flex flex-col items-start p-5 gap-12">
        <h3 className="font-Inter text-2xl">Useful Links</h3>
        <div className="flex font-Inter font-light gap-12 text-xl">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Man-fashion</a>
            </li>
            <li>
              <a href="">Acessories</a>
            </li>
            <li>
              <a href="">Order Tracking</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Woman-fashion</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[400px] h-[100%] font-Inter flex flex-col gap-9 p-3 font-light mt-3">
        <h2 className="font-Inter text-xl">Contact</h2>
        <p className="flex gap-4">
          <MapPin />
          622 Dixie Path, South Torbinchester 98336
        </p>
        <p className="flex gap-4">
          <Phone />
          +1 8567 989
        </p>
        <p className="flex gap-4">
          <Mail />
          contact@vibra.dev
        </p>
      </div>
    </div>
  );
}
