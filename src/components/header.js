import React from 'react'
import { Link, graphql } from 'gatsby'

const Header = ({ sliceContext, data }) => {
    const {title, home, bio }= data.language
    console.log(data)
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <li><Link to={`/${sliceContext.language}`}>{home}</Link></li>
                    <li><Link to={`/${sliceContext.language}/bio`}>{bio}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export const query = graphql`
query ($language: String){
    language (language: {eq: $language}){
        id
        language
        title
        home
        bio
    }
}`

export default Header