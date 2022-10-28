import * as React from 'react'
import { Link } from 'gatsby'
import Header from './header'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header></Header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>  
    </div>
  )
}

export default Layout