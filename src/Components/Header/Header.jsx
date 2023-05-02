import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

function Header(props) {
    return (
        <div className=' Header-div '>
            <NavLink exact to="/"><p>Welcome</p></NavLink>
            <NavLink to="/your-profile"><p>Your Profile</p></NavLink>
            <NavLink to="/login"><p>Login</p></NavLink >
        </div>
    );
}

export default Header;
