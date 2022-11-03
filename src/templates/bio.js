import * as React from 'react'
import Layout from '../components/layout'

const BioPage = ({ pageContext }) => {
  return (
    <Layout pageTitle="My Bio" language={pageContext.language}>
      <p>I live somewhere and my hobbies are something and something else.</p>
    </Layout>
  )
}

export default BioPage