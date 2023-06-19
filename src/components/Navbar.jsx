import { NavLink } from "react-router-dom";
import Icon from "../assets/space-icon.png";

const Navbar = () => (
  <header className="flex justify-between px-16 items-center py-2 mb-5">
    <div className="flex items-center gap-5">
      <img className="h-20" src={Icon} alt="USER" />
      <h1 className="text-2xl">Space Travelers' Hub</h1>
    </div>
    <ul className="flex gap-5">
      <li className="">
        <NavLink className="" to="/">
          Rockets
        </NavLink>
      </li>
      <li className="">
        <NavLink className="" to="/missions">
          Missions
        </NavLink>
      </li>
      <span>|</span>
      <li className="">
        <NavLink className="" to="/my-profile">
          My Profile
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Navbar;
