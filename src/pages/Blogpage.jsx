import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <>
    <h1>Blogpage</h1>
    <Link to={`/blog/new`}>Create new Post</Link>
    {
      posts.map(post => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))
    }
    </>
    
  )
}

export default Blogpage