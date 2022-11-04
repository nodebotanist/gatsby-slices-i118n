import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

const Header = ({ sliceContext, data }) => {
    data = data.allLanguage.edges[0]
    
    return (
        <header>
            <h1>My Gatsby Site</h1>
            <nav>
                <ul>
                    <li><Link to={`/${sliceContext.language}`}>{data.node.home}</Link></li>
                    <li><Link to={`/${sliceContext.language}/bio`}>{data.node.bio}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export const query = graphql`
query ($language: String){
    allLanguage (filter: {language: {eq: $language} } ){
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
}`

export default Header