import React from 'react'
import Layout from '../../componet/layout/layout'

const Dashboard = () => {
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <h1>Dashboard</h1>
    {/* <div className="container-flui m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </div> */}
  </Layout>
  )
}

export default Dashboard