import React from 'react'
import { Link } from 'gatsby'

const Header = (context) => {
    return (
        <header>
            <h1>私のギャツビーのウェブサイト</h1>
            <nav>
                <ul>
                    <li><Link to={`/${context.sliceContext.language}`}>ホームページ</Link></li>
                    <li><Link to={`/${context.sliceContext.language}/bio`}>伝記</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header