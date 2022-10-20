import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
   
    return (
        <div>
            <h1>Friend Details</h1>
            <h3>{friend.username}</h3>
            <p>{friend.name}</p>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetails;