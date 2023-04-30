// import { useEffect, useState } from "react"

// export const useAuth = () => {
//     const [user, setUser] = useState(null)
//     useEffect(() => {
//         if (user === null) {
//             fetch(`https://server.theglampcity.com/api/user`, {
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('glampcity-token')}`,
//                     'Content-Type': 'application/json',
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setUser(data)
//                 })
//         }
//         else {
//             return user;
//         }
//     }, [])
//     return user;
// }



import { useState, useEffect } from "react";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://server.theglampcity.com/api/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('glampcity-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
    }, []);

    return { user, loading };
};