import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>私のギャツビーのウェブサイト</h1>
            <nav>
                <ul>
                    <li><Link to="/">ホームページ</Link></li>
                    <li><Link to="/bio">伝記</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header