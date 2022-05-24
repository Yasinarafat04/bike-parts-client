import React from 'react'

const updateUserProfile = ({data}) => {
    const email = data.email
    const name = data.name
    const others = {}
    console.log(data)
    fetch(`http://localhost:5100/profile/${email}`, {
        method: "put",
        headers: {
            'content-type': 'application/json',
            auth: localStorage.getItem("accessToken")
        },
        body: JSON.stringify({email , name , others})
    }).then(res => res.json()).then(json => {
        console.log('Added Profile For This User')
    })
}

export default updateUserProfile