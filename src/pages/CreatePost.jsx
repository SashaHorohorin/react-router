import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'

const CreatePost = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>CreatePost</h1>
      <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
    </div>
  )
}

export default CreatePost