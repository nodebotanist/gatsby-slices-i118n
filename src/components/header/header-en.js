import React from 'react'
import { Link } from 'gatsby'

const Header = (context) => {
    return (
        <header>
            <h1>My Gatsby Site</h1>
            <nav>
                <ul>
                    <li><Link to={`/${context.sliceContext.language}`}>Home</Link></li>
                    <li><Link to={`/${context.sliceContext.language}/bio`}>Bio</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header