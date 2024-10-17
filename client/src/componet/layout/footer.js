import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div className='Footer'>
        <h4 className='text-center'>All Right Reserved &copy;  Techinfoyt</h4>
        <p className='text-center mt-3'>
          <Link to="/about">About</Link>
          <Link to="/cont">Contact</Link>
          <Link to="/policy">Privacy policy</Link>
        </p>
    </div>
  )
}

export default footer