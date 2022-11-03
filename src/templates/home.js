import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ pageContext }) => {
  return (
    <Layout pageTitle="Home Page" language={pageContext.language}>
      <h1>Welcome to my Gatsby site!</h1>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage