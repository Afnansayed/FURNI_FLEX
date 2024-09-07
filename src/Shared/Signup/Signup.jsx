import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Signup = () => {
    const [userData, setUserData] = useState(null);
    const handleFormSubmit = (data) => {
        setUserData(data);
        console.log('Form Data from Child:', data);
        // You can also send the formData to an API here
      };
      console.log(userData)
    return (
        <div>
             <AuthForm isSignUp={true} handleFormSubmit={handleFormSubmit}/>
        </div>
    );
};

export default Signup;