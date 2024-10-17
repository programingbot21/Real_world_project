import React from 'react'
import Layout from '../componet/layout/layout'
import { Link } from 'react-router-dom'

const PagenotFound = () => {
  return (
    <Layout>
        <div className='png'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oops ! Page not Found</h2>
          <Link to="/" className='pnf-btn'>Go Back</Link>
        </div>
    </Layout>
  )
}

export default PagenotFound