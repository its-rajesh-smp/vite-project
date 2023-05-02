import React from 'react';
import "./YourProfile.css"

function YourProfile(props) {
    return (
        <div className=' YourProfile-div '>
            <h1>Your Profile</h1>
            <p>Your Email</p>
            <p>email@gmail.com</p>
            <input type="text" placeholder='Enter New Password' />
            <button>Change Password</button>
        </div>
    );
}

export default YourProfile;
