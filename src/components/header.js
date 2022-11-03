import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const Header = ({ sliceContext, data }) => {


    
    const textFields = data.allLanguage.edges.find(element => element.node.language === sliceContext.language);

    console.log(textFields)
    return (
        <header>
            <h1>My Gatsby Site</h1>
            <nav>
                <ul>
                    <li><Link to={`/${sliceContext.language}`}>{textFields.node.home}</Link></li>
                    <li><Link to={`/${sliceContext.language}/bio`}>{textFields.node.bio}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export const query = graphql`
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
}`

export default Header