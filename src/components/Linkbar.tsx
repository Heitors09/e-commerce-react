import { Link } from "react-router-dom";

export function Linkbar() {
  return (
    <div className="bg-stone-100 w-[100%] h-12 flex items-center justify-center">
      <ul className="font-Inter font-light flex gap-9">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/summer-Collection" className="hover:underline">
            Summer
          </Link>
        </li>

        <li>
          <Link to="/autumn-Collection" className="hover:underline">
            Autumn
          </Link>
        </li>
        <li>
          <Link to="/jackets-Collection" className="hover:underline">
            Light Jackets
          </Link>
        </li>
        <li>
          <Link to="/jeans-Collection" className="hover:underline">
            Jeans
          </Link>
        </li>
        <li>
          <Link to="/dresses-Collection" className="hover:underline">
            Dresses
          </Link>
        </li>
      </ul>
    </div>
  );
}
