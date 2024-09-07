import React, { useState } from 'react';
import AuthForm from '../../Shared/AuthForm/AuthForm';

const Login = () => {
    const [userData, setUserData] = useState(null);
    const handleFormSubmit = (data) => {
        setUserData(data);
        console.log('Form Data from Child:', data);
        // You can also send the formData to an API here
      };
      console.log(userData)
    return (
        <div>
            <AuthForm isSignUp={false} handleFormSubmit={handleFormSubmit}/>
        </div>
    );
};

export default Login;