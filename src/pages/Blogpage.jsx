import React, {useState, useEffect} from 'react'
import { Link, useSearchParams} from 'react-router-dom';
import BlogFilter from '../components/BlogFilter';

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;




  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <>
    <h1>Blogpage</h1>
    <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
    <Link to={`/blog/new`}>Create new Post</Link>
    {
      posts.filter(
        post => post.title.includes(postQuery) && post.id >= startsFrom
      ).map(post => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))
    }
    </>
    
  )
}

export default Blogpage