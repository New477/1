import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    return (
        <div className='f-div'>
            <h3><Link to={`/friend/${friend.id}`}>{friend.name}</Link></h3>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
        </div>
    );
};

export default Friend;