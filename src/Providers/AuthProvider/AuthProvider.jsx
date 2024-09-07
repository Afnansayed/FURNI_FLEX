import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../FireBase/firebase.config';

export const  AuthContext = createContext(null);
const AuthProvider = ({children}) => {
     const [user,serUser] = useState(null);
     const [loading, setLoading] = useState(true);

    const  createAccount = (email,password) => {
         setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const gitProvider = new GithubAuthProvider();
    const gitSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,gitProvider)
    }
    
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
         onAuthStateChanged(auth,currentUser => {
             serUser(currentUser);
             setLoading(false);
         })
         
    },[])

    const authInfo = {
        createAccount,
        signin,
        googleSignIn,
        gitSignIn ,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;