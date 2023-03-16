import Link from 'next/link';
import React from 'react';
import img1 from '../../../assets/images/new-arrival-images/img1.png'
import img2 from '../../../assets/images/new-arrival-images/img2.png'
import img3 from '../../../assets/images/new-arrival-images/img3.png'
import img4 from '../../../assets/images/new-arrival-images/img4.png'
import img5 from '../../../assets/images/new-arrival-images/img5.png'
import img6 from '../../../assets/images/new-arrival-images/img6.png'
import LatestSignelProduct from './LatestSignelProduct';

const latestProducts = [
    { id: '1', img: img1, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '2', img: img2, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '3', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '4', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '5', img: img5, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '6', img: img6, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

const LatestProducts = (props) => {
    console.log(props);

    return (
        <div className='rounded-3xl md:p-4 mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-900 text-2xl text-left font-bold'>Latest Products</h1>
                <Link href='/categories/latest-products' className='text-primary font-bold'>See All</Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>

                {
                    latestProducts.map((product, i) => <LatestSignelProduct key={i} product={product} />)
                }
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API

    const res = await fetch(`http://localhost:5055/api/products`)
    const data = await res.json()

    console.log(data);

    // Pass data to the page via props
    return { props: { data } }
}

export default LatestProducts;