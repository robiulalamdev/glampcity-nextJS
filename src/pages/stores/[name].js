import SmallLoader from '@/components/Loaders/SmallLoader';
import { setIsloading } from '@/Slices/controllerSlice';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SingelStore = () => {
    const { isLoading } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()
    const router = useRouter()
    const name = router.query.name
    const [data, setData] = useState()

    useEffect(() => {
        dispatch(setIsloading(true))
        fetch(`https://heylink.ahmadalanazi.com/api/store/getInfo/${name}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                dispatch(setIsloading(false))
            })
    }, [router])

    if (isLoading) {
        return <SmallLoader />
    }

    // console.log(data);
    return (
        <div className='min-h-screen'>
            <h1>{data?.name}</h1>
        </div>
    );
};

export default SingelStore;