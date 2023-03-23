import React from 'react'
import { useParams } from 'react-router'


const Editpost = () => {
    const {id} = useParams();
  return (
    <div>Edit post {id} </div>
  )
}

export default Editpost