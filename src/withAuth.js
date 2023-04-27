import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ParentByProducts from './pages/products/[name]';

const withAuth = (WrappedComponent) => {
    const [user, setUser] = useState(null)
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


    const Wrapper = (props) => {
        const router = useRouter();

        useEffect(() => {
            if (!user?._id) {
                router.push('/login');
            }
        }, [user?._id, router]);

        return user?._id ? <WrappedComponent {...props} /> : null;
    };

    return Wrapper;
};

export default withAuth(<ParentByProducts />);
