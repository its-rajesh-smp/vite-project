import React, { useContext } from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import LoginCTX from '../../Context/LoginCTX';

function Header(props) {

    const loggedinCTX = useContext(LoginCTX)


    const logOutHandeler = () => {
        loggedinCTX.setIsLoggedIn(false)
        localStorage.removeItem("ID_TOKEN")
    }


    return (
        <div className=' Header-div '>
            {
                loggedinCTX.isLoggedIn ?
                    <>
                        <NavLink exact to="/"><p>Welcome</p></NavLink>
                        <NavLink to="/your-profile"><p>Your Profile</p></NavLink>
                        <NavLink to="/"><p onClick={logOutHandeler}>Logout</p></NavLink >
                    </>
                    :
                    <NavLink to="/login"><p>Login</p></NavLink >
            }
        </div>
    );
}

export default Header;
