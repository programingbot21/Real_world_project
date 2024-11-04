import React from 'react'
import Layout from '../../componet/layout/layout'
import AdminMenu from '../../componet/layout/AdminMenu'

const User = () => {
  return (
    <Layout title={"Dashboard - All User"}> 
         <div className='container-fluid m-3 p-3' >
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
            <h1>All user</h1>
        </div>
        </div>
        </div>
    </Layout>
  )
}

export default User