import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const navigate = useNavigate();
    const handelNavigate = () => {
      navigate(`/post/${post.id}`)

    }
    return (
        <div className='post-div'>
             <h4>{post.title}</h4>
             <p>{post.body}</p>
            
            <Link to={`/post/${post.id}`}> <button>Details</button></Link>
            <button onClick={handelNavigate}>Show details</button>
        </div>
    );
};

export default Post;