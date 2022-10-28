import * as React from 'react'
import { Link } from 'gatsby'

const BioPage = () => {
  return (
    <main>
      <h1>My Bio</h1>
      <p>I live somewhere and my hobbies are something and something else.</p>
      <Link to="/">Back Home</Link>
    </main>
  )
}

export default BioPage