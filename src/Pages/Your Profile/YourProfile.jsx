import React, { useRef } from 'react';
import "./YourProfile.css"
import { API_KEY_CHANGEPASS } from '../../assets/assets';

function YourProfile(props) {

    const passRef = useRef()

    const updatePassHandeler = async () => {
        try {
            const obj = {
                idToken: JSON.parse(localStorage.getItem("ID_TOKEN")),
                returnSecureToken: true,
                password: passRef.current.value
            }

            const response = await fetch(API_KEY_CHANGEPASS, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { "Content-Type": "application/json" }
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error.message)
            }

            // Save idToken in local Storage
            localStorage.setItem("ID_TOKEN", JSON.stringify(data.idToken))

            console.log(data);

        } catch (error) {
            alert(error)
        }
    }




    return (
        <div className=' YourProfile-div '>
            <h1>Your Profile</h1>
            <p>Your Email</p>
            <p>email@gmail.com</p>
            <input ref={passRef} type="text" placeholder='Enter New Password' />
            <button onClick={updatePassHandeler}>Change Password</button>
        </div>
    );
}

export default YourProfile;
