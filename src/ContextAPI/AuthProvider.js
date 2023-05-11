import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signOut, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = typeof window !== 'undefined' && localStorage.getItem("theglampcity-token");
    const auth = getAuth(app)

    const userRefetch = () => {
        if (token) {
            fetch(`http://localhost:5055/api/user/userinfo/me`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theglampcity-token')}`,
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                    setLoading(false);
                })
        }
    }

    useEffect(() => {
        userRefetch()
    }, [token]);

    // signup with google
    const signupWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // user Logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem('theglampcity-token')
        return signOut(auth)
    }


    const authInfo = {
        user,
        userRefetch,
        setUser,
        loading,
        setLoading,
        signupWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;