import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({user, setUser}){

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        }).then(<redirect to="/" />)
    }

    return (
        <div>
            <h3 className="nav">Hello {user.username} | 
            <NavLink exact to="/"> Venues |</NavLink>
            <NavLink exact to="/account">  My Account  |</NavLink>
            <span onClick={handleLogout}> Log Out</span>
            </h3>
        </div>
    );
}

export default NavBar;