import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

const ManageProducts = () => {
  const [show, setShow] = useState(false)
  const [product1, setProduct] = useState({})
  const url = 'http://localhost:5100/product'
  const { isLoading, data, refetch } = useQuery(['Product'], () =>
    fetch(url,{
      method: "get",
      headers: {
        auth : localStorage.getItem('accessToken')
      }
    }).then(res =>
      res.json()
    )
  )
  function deletProduct(id) {
    axios.delete(`http://localhost:5100/product/${id}`, {
      headers: {
        auth : localStorage.getItem('accessToken')
      }
    })
      .then(res => {
        console.log(res)
        refetch()
      })
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='w-full'>
      <h1 className="text-4xl text-center font-bold">My Orders</h1>

      <div className="overflow-x-auto w-full mt-10">
        <table className="table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Image</th>
              <th>Name</th>
              <th>Price Per Product</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(((product, index) =>
                <tr key={product._id}>
                  <th className='text-center'>{index + 1}</th>
                  <td className='text-center'>
                    <div className="avatar">
                      <div className="w-24 rounded-xl">
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>{product.name}</td>
                  <td className='text-center'>${product.price}</td>
                  <td className='text-center'>{product.quantity}p</td>
                  <td className='text-center'>
                    <div>
                      <button onClick={() => {
                        setShow(true)
                        setProduct(product)
                      }}
                        className="btn btn-primary mr-4">Update</button>
                      <button className="btn btn-error" onClick={() => {
                        deletProduct(product._id)

                      }}>Delete</button>
                    </div>
                  </td>
                </tr>))
            }
          </tbody>
        </table>
      </div>
      <Modal show={show} setShow={setShow} product={product1} refetch={refetch} />
    </div>
  )
}

export default ManageProducts

const Modal = ({ show, setShow, product, refetch }) => {
  const [loading, setLoading] = useState(false)
  const updateProduct = (e) => {
    e.preventDefault()
    setLoading(true)
    const quantity = parseInt(e.target.quantity.value) + parseInt(product.quantity)
    const price = parseInt(e.target.price.value)
    const updateValue = { quantity, price }
    fetch(`http://localhost:5100/product/${product._id}`, {
      method: "Put",
      headers: {
        'content-type': 'application/json',
        auth : localStorage.getItem('accessToken')
      },
      body: JSON.stringify(updateValue)
    }).then(res => {
      console.log(res)
      setLoading(false)
      refetch()
      setShow(false)
      toast.success('Product Updated')
      e.target.reset()
    })
  }
  return (
    <div className={`${show ? 'block' : "hidden"} absolute product-order-page top-0 right-0 z-10 w-full`}>
      <div className="hero min-h-screen">
        <div style={{ width: '100%' }} className="hero-content">

          <div className="card relative w-full max-w-md shadow-2xl bg-base-100">
            <button className='absolute top-0 right-0 bg-red-500 p-2 text-white' onClick={() => setShow(false)}>Close</button>
            <form onSubmit={updateProduct} className="card-body ">
              <h1 className='text-center mt-3'>Product Name : <span className='font-bold'>{product.name}</span></h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Quantity</span>
                </label>
                <input
                  placeholder='Quantity'
                  className="input input-bordered"
                  type='number'
                  name='quantity'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Price</span>
                </label>
                <input
                  placeholder='Quantity'
                  className="input input-bordered"
                  type='number'
                  name='price'
                  required
                />
              </div>
              <div className="form-control mt-5">
                <button type='submit' className={`btn btn-primary ${loading && "loading"}`}>{`${loading ? "Updating...." : "Update"}`}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
