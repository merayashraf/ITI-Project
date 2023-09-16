import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Nav.css";

function NavScrollExample() {
  const counter = useSelector(state => state.favorites);
  return (
    <>
    <nav>
      <ul class="menu-bar">
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="movies" className="navlink">Movies</NavLink>
      <NavLink to="fav" className="navlink">Favorites {counter.length}</NavLink>
      <NavLink to="contactUs" className="navlink">Contact Us</NavLink>
      <NavLink to="join" className="navlink">join</NavLink>
      </ul> 
    </nav>
    </>
  );
}

export default NavScrollExample;