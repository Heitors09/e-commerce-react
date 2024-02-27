import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Contacts() {
  return (
    <div className="bg-stone-50 w-[100%] h-60 flex justify-around">
      <div className="flex flex-col gap-2 items-center justify-center w-[30%] h-60 ">
        <h2 className="text-slate-900 font-Inter text-4xl font-light">
          VIBRA.
        </h2>
        <ul className="flex gap-4">
          <li>
            <Instagram />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 justify-center w-[30%] h-60  p-5">
        <h2 className="font-Inter text-xl">Contact</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-4">
            <MapPin />
            622 Dixie Path, South Torbinchester 98336
          </li>
          <li className="flex gap-4">
            <Phone />
            +1 8567 989
          </li>
          <li className="flex gap-4">
            <Mail />
            contact@vibra.dev
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 justify-center w-[30%] h-60  p-5">
        <h2 className="font-Inter text-xl">Common questions</h2>
        <ul className="flex flex-col gap-2">
          <li>Privacy police</li>
          <li>Terms of use</li>
          <li>Track your order</li>
          <li>exchanges and returns</li>
        </ul>
      </div>
    </div>
  );
}
