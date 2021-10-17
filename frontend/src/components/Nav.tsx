import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
           <Link to="/">Home</Link> 
           <Link to="/Register">Register</Link>
           <Link to="/Login">Login</Link>

        </div>
    )
}

export default Nav
