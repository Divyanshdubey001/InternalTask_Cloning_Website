import { NavLink } from "react-router-dom";
import "../Styles/navBar.css";

const NavBar = () => {
  return (
    <>
      <div className="title-nav">Escape. </div>
      <div className="nav-linl-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
