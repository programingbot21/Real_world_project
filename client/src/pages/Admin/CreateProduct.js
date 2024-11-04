import React from 'react'
import Layout from '../../componet/layout/layout'
import AdminMenu from '../../componet/layout/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard - Create Product"}>
      
       <div className='container-fluid m-3 p-3 t-300' >
       
      <div className='row ' >
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
            <h1>Create  Product</h1>
        </div>
        </div>
        </div>
     
        
    </Layout>
  )
}

export default CreateProduct