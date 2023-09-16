import { NavLink } from "react-router-dom";
import "./Nav.css";
<nav>
    <ul class="menu-bar">
    <NavLink to="/" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Home</NavLink>
            <NavLink to="movies" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Movies</NavLink>
            <NavLink to="fav" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Favorites</NavLink>
            {counter.length}
            <NavLink to="contactUs" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Contact Us</NavLink>
            <NavLink to="aboutUs" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>About Us</NavLink>
            <NavLink to="join" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>join</NavLink>
    </ul>
    </nav>