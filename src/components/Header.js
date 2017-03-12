import React from 'react'
import { Link } from 'react-router-dom'

let Header = () => (
    <div className="header">
        <Link to="/">
            <h1>Benno Tielen</h1>
            <h2>Full stack developer</h2>
        </Link>
    </div>
)

export default Header