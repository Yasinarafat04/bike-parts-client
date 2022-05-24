import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import auth from '../Firebase/firebase.init'
import Loading from '../Loading/Loading'

const Profile = () => {
    const [user, loading] = useAuthState(auth)
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit,} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div  className='p-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user.photoURL} />
                </div>
            </div>
            <p className='my-2'>Name : {user.displayName}</p>
            <p>Email : {user.email}</p>
            <p className="font-bold mt-4">Links</p>
            <div className="links mt-4">
                <span className='block'>Facebook</span>
                <input type="text " {...register("facebook" , {value : "https://www.facebook.com/"})}
                    disabled={!edit} className={`${edit && "border"} p-2 mt-3`}
                    deafultvalue={'Facebook'} />
                <span className='block'>Twitter</span>
                <input type="text " {...register("twitter" , {value : "https://www.twitter.com/"})}
                    disabled={!edit} className={`${edit && "border"} p-2 mt-3`}
                    deafultvalue={'twitter'} />

                <span className='block'>Linkedin</span>

                <input type="text " {...register("linkedin", {value : "https://www.linkedin.com/"})}
                    disabled={!edit} className={`${edit && "border"} p-2 mt-3`}
                    deafultvalue={'Linkedin'} />

                <span className='block'>Github</span>
                <input type="text " {...register("github" , {value : "https://www.github.com/"})}
                    disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
            </div>
            <p className="font-bold mt-4">Skills</p>
            <div className="links mt-4">
                <input type="text " {...register("skill1" , {value : "Your skill"})} disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
                <input type="text " {...register("skill2" , {value : "Your skill"})} disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
                <input type="text " {...register("skill3" , {value : "Your skill"})} disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
                <input type="text " {...register("skill4" , {value : "Your skill"})} disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
                <input type="text " {...register("skill5" , {value : "Your skill"})} disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
                <input type="text " {...register("skill6" , {value : "Your skill"})} disabled={!edit} className={`${edit && "border"} p-2 mt-3`} />
            </div>
            {
                edit && <button type='submit' className='btn mt-4 btn-md'>Update</button>
            }
            </form>
            <button onClick={() => setEdit(true)} className='btn mt-4 btn-md'>Edit Profile</button>
        </div>
    )
}

export default Profile