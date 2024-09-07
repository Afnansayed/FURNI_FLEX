import React, { useContext, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Signup = () => {
    const [userData, setUserData] = useState(null);
    const {user} = useContext(AuthContext)
    const handleFormSubmit = (data) => {
        setUserData(data);
        console.log('Form Data from Child:', data);
        // You can also send the formData to an API here
      };
      console.log(user)
    return (
        <div>
             <AuthForm isSignUp={true} handleFormSubmit={handleFormSubmit}/>
        </div>
    );
};

export default Signup;