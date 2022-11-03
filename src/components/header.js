import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const Header = ({ sliceContext }) => {
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

    
    // const textFields = data.find(element => element.language === sliceContext.language);

    return (
        <header>
            <h1>My Gatsby Site</h1>
            <nav>
                <ul>
                    <li><Link to={`/${sliceContext.language}`}>Home</Link></li>
                    <li><Link to={`/${sliceContext.language}/bio`}>Bio</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header