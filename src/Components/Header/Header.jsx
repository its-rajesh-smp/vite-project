import React, { useContext } from 'react';
import "./Header.css"
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom';
import LoginCTX from '../../Context/LoginCTX';


function Header(props) {

    const loggedinCTX = useContext(LoginCTX)

    const history = useHistory()


    const logOutHandeler = () => {
        loggedinCTX.setIsLoggedIn(false)
        localStorage.removeItem("ID_TOKEN")
        history.push("/login")
    }


    return (
        <div className=' Header-div '>
            {
                loggedinCTX.isLoggedIn ?
                    <>
                        <NavLink exact to="/"><p>Welcome</p></NavLink>
                        <NavLink to="/your-profile"><p>Your Profile</p></NavLink>
                        <p onClick={logOutHandeler}>Logout</p>
                    </>
                    :
                    <NavLink to="/login"><p>Login</p></NavLink >
            }
        </div>
    );
}

export default Header;
