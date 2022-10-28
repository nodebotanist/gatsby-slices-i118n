import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Meine Gatsby-Website</h1>
            <nav>
                <ul>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/bio">Biografie</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header