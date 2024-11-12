import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <div className="text-center" style={{height: "auto"}}>
  <div className="list-group dashboard-menu">
    <h4>Admin User</h4>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action " >
  Create Category
  </NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
  Create Product</NavLink>

  <NavLink to="/dashboard/admin/product" className="list-group-item list-group-item-action">
   Product</NavLink>
  <NavLink to="/dashboard/admin/user" className="list-group-item list-group-item-action">
  User</NavLink>
  
  
</div>
</div>

    </>
  )
}

export default AdminMenu