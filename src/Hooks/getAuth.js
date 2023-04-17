import { useEffect, useState } from "react"

export const useAuth = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (user === null) {
            fetch(`http://localhost:5055/api/user`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('glampcity-token')}`,
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data)
                })
        }
        else {
            return user;
        }
    }, [])
    return user;
}