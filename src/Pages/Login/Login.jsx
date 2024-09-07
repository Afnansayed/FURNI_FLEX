import React, { useContext, useState } from 'react';
import AuthForm from '../../Shared/AuthForm/AuthForm';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Login = () => {
    const [userData, setUserData] = useState(null);
    const {signin} = useContext(AuthContext)
    const handleFormSubmit = (data) => {
        setUserData(data);
        console.log('Form Data from Child:', data);
        // You can also send the formData to an API here
        signin(data?.email , data?.password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => console.log(err))
      };
      console.log(userData)
    return (
        <div>
            <AuthForm isSignUp={false} handleFormSubmit={handleFormSubmit}/>
        </div>
    );
};

export default Login;