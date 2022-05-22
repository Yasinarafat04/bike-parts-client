import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Loading from '../Loading/Loading'

const ProductDetails = () => {
    const location = useLocation()
    const pathname = location.pathname
    const id = pathname.split('/')
    const url = `http://localhost:5100/product/${id[2]}`
    const { isLoading, data } = useQuery(['One-product'], () =>
        fetch(url).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="hero py-14 items-start bg-base-200">
                <div className="hero-content flex-col items-center lg:flex-row">
                    <img src={data.image} className="max-w-lg w-full rounded-lg shadow-2xl" />
                    <div className='ml-10'>
                        <h1 className="text-3xl font-bold">{data.name}</h1>
                        <p className='mt-5 font-bold text-neutral'>Price : ${data.price}</p>
                        <p className='mt-5 font-bold text-neutral'>Quantity : {data.quantity} p</p>
                         <p className='mt-5 font-bold text-neutral'>Min Order : {data.quantity > 300 ? 300 : data.quantity} p</p>
                        <p className="py-6">{data.description}</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails