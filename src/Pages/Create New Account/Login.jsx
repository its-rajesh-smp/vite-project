import React, { useRef, useState } from 'react';
import "./Login.css"
import { API_KEY_SIGNUP, API_KEY_SIGNIN } from '../../assets/assets';

function Login(props) {


    const emailRef = useRef()
    const passRef = useRef()
    const [loader, setLoader] = useState(false)

    /* -------------------------------------------------------------------------- */
    /*                             CREATE NEW ACCOUNT                             */
    /* -------------------------------------------------------------------------- */
    const createNewAccount = async () => {
        const obj = {
            email: emailRef.current.value,
            password: passRef.current.value,
            returnSecureToken: true
        }
        try {
            setLoader(true)
            const response = await fetch(API_KEY_SIGNUP, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error.message)
            }
        } catch (error) {
            alert(error.message)

        }
        setLoader(false)

    }


    /* -------------------------------------------------------------------------- */
    /*                                    LOGIN                                   */
    /* -------------------------------------------------------------------------- */
    const login = async () => {
        const obj = {
            email: emailRef.current.value,
            password: passRef.current.value,
            returnSecureToken: true
        }
        try {
            setLoader(true)
            const response = await fetch(API_KEY_SIGNIN, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            console.log(data);

            if (!response.ok) {
                throw new Error(data.error.message)
            }
        } catch (error) {
            alert(error.message)

        }
        setLoader(false)
    }




    return (
        <div className=' Login-div '>
            <h1>Login</h1>
            <input ref={emailRef} type="text" placeholder='Email' />
            <input ref={passRef} type="text" placeholder='Password' />

            {
                !loader ?
                    <div>
                        <button onClick={login} >Login</button>
                        <button onClick={createNewAccount} >Create Account</button>
                    </div>
                    :
                    <p>LOADING</p>
            }
        </div>
    );
}

export default Login;
