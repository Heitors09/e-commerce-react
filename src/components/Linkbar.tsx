import { Link } from "react-router-dom";

export function Linkbar() {
  return (
    <div className=" bg-white w-[100%] h-5 flex items-center justify-center">
      <ul className="font-Inter text-sm text-black font-light flex gap-9 outline-none">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/summer-collection" className="hover:underline">
            Summer
          </Link>
        </li>

        <li>
          <Link to="/autumn-collection" className="hover:underline">
            Autumn
          </Link>
        </li>
        <li>
          <Link to="/jackets-collection" className="hover:underline">
            Light Jackets
          </Link>
        </li>
        <li>
          <Link to="/jeans-collection" className="hover:underline">
            Jeans
          </Link>
        </li>
        <li>
          <Link to="/dresses-collection" className="hover:underline">
            Dresses
          </Link>
        </li>
      </ul>
    </div>
  );
}
