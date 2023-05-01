import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({user}){

    return (
        <div>
            <h3>Hello {user.username}</h3>
            <NavLink exact to="/">Venues |</NavLink>
            <NavLink exact to="/account">  My Account  |</NavLink>
            <NavLink exact to="/logout">  Log Out  </NavLink>
        </div>
    );
}

export default NavBar;