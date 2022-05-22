import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
import ProductCard from './ProductCard'

const Product = () => {
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
    <div className='container mx-auto mt-10 '>
      <h1 className='text-center text-4xl my-5 font-bold'>Our All Products</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-7'>
        {
          data.map(product => <ProductCard key={product._id}  product={product}/>)
        }
        </div>
    </div>
  )
}

export default Product