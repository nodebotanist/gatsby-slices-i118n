import React from "react"
import { Link } from "gatsby"

export default () => {
    return (
        <>
            <h2>Hello!</h2>
            <p>You can view this site in 3 languages</p>
            <ul>
                <li><Link to="/en">English</Link></li>
                <li><Link to="/de">Deustch</Link></li>
                <li><Link to="/jp">日本語</Link></li>    
            </ul> 
        </>
    )
}