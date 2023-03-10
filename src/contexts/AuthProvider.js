import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [theme, setTheme] = useState('dark')


    // const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    // ///

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    //////

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('insid', currentUser);
            if (currentUser === null || currentUser.emailVerified || currentUser.providerData[0].providerId === 'github.com') {
                setUser(currentUser);
            }
            setLoading(false)

        });
        return () => {
            unsubscribe();
        }

    }, [])





    const authInfo = {
        user,
        loading,
        theme,
        setLoading,
        createUser,
        singIn,
        updateUserProfile,
        logOut,
        providerLogin,
        verifyEmail,
        setTheme

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;