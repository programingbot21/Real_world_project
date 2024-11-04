import React from 'react'
import Layout from '../../componet/layout/layout'
import UserMenu from '../../componet/layout/UserMenu'

const Oredr = () => {
  return (
    <Layout title={"Your Order"}>
        <div className='container-flui p-3 m-3'>
            <div className='row'>
                <div className='col-md-3'>
                   <UserMenu/>
                </div>
                <div className='col-md-9'>
                    <h1>Your Order</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Oredr