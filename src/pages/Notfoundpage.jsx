import React from 'react'
import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
        <h1>Notfoundpage</h1>
        <p>This page doesn't exist. Go <Link to="/">Home</Link></p>
    </div>
  )
}

export default Notfoundpage