import React from 'react'
import bannerImg from '../Images/banner.jpg'
const Home = () => {
    return (
        <div>
            <header>
                <div className="hero w-full min-h-screen bg-base-200">
                    <div className="hero-content w-full justify-between flex-col lg:flex-row">
                        
                        <div className='ml-5'>
                            <h1 className='text-xl mb-4 font-bold text-neutral'>Wellcome To Our</h1>
                            <h1 className="text-5xl leading-tight font-bold text-left">Motorbike Parts & Accessories Warehouse</h1>
                            <p className="py-6 text-left">
                                We Provide All Type Of Motor Bike's Parts And Accessories</p>
                            <div className='flex justify-start'>
                            <button className="btn btn-primary text-white">Get Started</button>
                            </div>
                        </div>
                        <img src={bannerImg} className="max-w-xl w-full rounded-lg  shadow-2xl" alt='banner img'/>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Home