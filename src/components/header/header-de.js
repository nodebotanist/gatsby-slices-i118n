import React from 'react'
import { Link } from 'gatsby'

const Header = (context) => {
    return (
        <header>
            <h1>Meine Gatsby-Website</h1>
            <nav>
                <ul>
                    <li><Link to={`/${context.sliceContext.language}`}>Startseite</Link></li>
                    <li><Link to={`/${context.sliceContext.language}/bio`}>Biografie</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header