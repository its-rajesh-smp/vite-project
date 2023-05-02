import React, { useState } from 'react';

const LoginCTX = React.createContext({ isLoggedIn: "", setIsLoggedIn: () => { } })

export const LoginCTXProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)


    return (<LoginCTX.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </LoginCTX.Provider>)
}

export default LoginCTX

