import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Singlepage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <div>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goHome}>Go Home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/blog/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    );
};

export default Singlepage;
