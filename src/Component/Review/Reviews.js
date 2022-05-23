import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../Firebase/firebase.init'
import Loading from '../Loading/Loading'
import AddReview from './AddReview'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const [show, setShow] = useState(false)
    const [user, loading] = useAuthState(auth)
    const { isLoading, data, refetch } = useQuery(['reviews'], () =>
        fetch('http://localhost:5100/review').then(res =>
            res.json()
        )
    )
    if (isLoading || loading ) {
        return <Loading />
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center mt-16'>Testimonials</h1>
            <div className="grid grid-cols-4 mt-14 gap-5">
                {
                    data.map(review => <ReviewCard key={review._id} review={review} />)
                }

            </div>
            <div className={`${user ? 'flex' : 'hidden'} justify-center`}>
                <button onClick={() => {
                    if (show) {
                        setShow(false)
                    }
                    else {
                        setShow(true)
                    }
                }} className='btn mt-10'>Write a Review</button>
            </div>
            {
                show && <AddReview refetch={refetch} show={show} />
            }
        </div>
    )
}

export default Reviews