import React from 'react'

import { NavLink } from 'react-router-dom'


const UserMenu = () => {
  return (
    <>
       <div className='text-center'>
  <div className="list-group">
    <h4>Dashboard</h4>
  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action " >
 profile 🧑‍🍼
  </NavLink>
  <NavLink to="/dashboard/user/order" className="list-group-item list-group-item-action">
  order</NavLink>
  
  
  
</div>
</div>
  
    </>
  )
}

export default UserMenu