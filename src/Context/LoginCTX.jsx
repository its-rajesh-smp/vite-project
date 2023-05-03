import React, { useEffect, useState } from 'react';

const LoginCTX = React.createContext({ isLoggedIn: "", setIsLoggedIn: () => { } })

export const LoginCTXProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)


    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("ID_TOKEN"))
        if (localData !== null) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    }, [])






    return (<LoginCTX.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </LoginCTX.Provider>)
}

export default LoginCTX

