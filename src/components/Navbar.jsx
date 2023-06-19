import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="">
    <img className="user-icon" src={Icon} alt="USER" />
    <h1 className="">Space Travelers' Hub</h1>
    <ul className="">
      <li className=""><NavLink className="" to="/">Rockets</NavLink></li>
      <li className=""><NavLink className="" to="/missions">Missions</NavLink></li>
      <span>|</span>
      <li className=""><NavLink className="" to="/my-profile">My Profile</NavLink></li>
    </ul>
  </header>
);

export default Navbar;