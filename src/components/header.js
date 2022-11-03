import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            allLanguage {
                edges {
                    node {
                        id
                        language
                        title
                        home
                        bio
                    }
                }
            }
        }
    `)

    return (
        <header>
            <h1>My Gatsby Site</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bio">Bio</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header