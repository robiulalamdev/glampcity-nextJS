import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = typeof window !== 'undefined' && localStorage.getItem("theglampcity-token");

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
        if (!user?._id) {
            setLoading(true)
            if (token) {
                fetch(`http://localhost:5055/api/user/userinfo/me`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('theglampcity-token')}`,
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setUser(data);
                        setLoading(false);
                    })
            }
            else {
                setUser(null)
            }
            setLoading(false)
        }
    }, [token]);


    const authInfo = {
        user,
        userRefetch,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;