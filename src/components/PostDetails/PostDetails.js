import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const post = useLoaderData();
    const {id} = post;
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate(`/friend/${post.userId}`)
    }

    return (
        <div>
             <h2>Post Details : {id}</h2>
             <div className='post-box'>
          
           <p>{post.userId}</p>
           <h1>{post.title}</h1>
           <p>{post.body}</p>
           <button onClick={handelNavigate}>Author</button>

        </div>
        </div>
        
    );
};

export default PostDetails;