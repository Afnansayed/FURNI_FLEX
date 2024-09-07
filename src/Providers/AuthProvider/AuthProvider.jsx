import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../FireBase/firebase.config';

export const  AuthContext = createContext(null);
const AuthProvider = ({children}) => {


    const  createAccount = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        createAccount
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;