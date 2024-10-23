import React from 'react'
import Layout from '../componet/layout/layout'
import { useAuth } from '../context/auth'

function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout >
       <h1> HomePage </h1>
       <pre>{JSON.stringify(auth, null ,4)}</pre>
        </Layout>
  )
}

export default HomePage