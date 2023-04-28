import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <div>
            <p>Hello USER</p>
            <NavLink exact to="/venues">Venues |</NavLink>
            <NavLink exact to="/account">  My Account  </NavLink>
            <p>LOG OUT</p>

        </div>
    );
}

export default NavBar;