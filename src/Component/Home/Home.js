import { Button } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import bannerImg from '../Images/banner.jpg'
import Loading from '../Loading/Loading'
import ProductCard from '../Product/ProductCard'
const Home = () => {
    const navigate = useNavigate()
    const url = 'http://localhost:5100/product'
    const { isLoading, data } = useQuery(['products'], () =>
        fetch(url).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <header>
                <div className="hero w-full min-h-screen bg-base-100">
                    <div className="hero-content w-full justify-between flex-col lg:flex-row">

                        <div className='ml-5'>
                            <h1 className='text-xl mb-4 font-bold text-neutral'>Wellcome To Our</h1>
                            <h1 className="text-5xl leading-tight font-bold text-left">Motorbike Parts & Accessories Warehouse</h1>
                            <p className="py-6 text-left">
                                We Provide All Type Of Motor Bike's Parts And Accessories</p>
                            <div className='flex justify-start'>
                                <Button onClick={() => navigate('/login')} size="large" variant="contained">Get Started</Button>

                            </div>
                        </div>
                        <img src={bannerImg} className="max-w-xl w-full rounded-lg  shadow-2xl" alt='banner img' />
                    </div>
                </div>

            </header>

            <div className='container mx-auto mt-10 '>
                <h1 className='text-center text-4xl my-5 font-bold'>Our  Products</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 gap-7'>
                    {
                        data.slice(0,4).map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
                <div className='flex justify-center mt-10'><Link to='/product' className='btn btn-primary'>See All Product</Link></div>
            </div>
        </div>
    )
}

export default Home