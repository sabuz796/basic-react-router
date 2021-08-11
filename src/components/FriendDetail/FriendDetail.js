import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {id} = useParams()
    //{} we use this because we will get an object not an array. 
    const [friend, setFriend] = useState({})
    const {name, phone, email, website} = friend
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>This is friend detail area: {id}</h1>
            <h4>{name}</h4>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default FriendDetail;