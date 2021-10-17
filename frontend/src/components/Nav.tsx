import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props: {name: string, setName: (name: string) => void}) => {


    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: "POST",
            headers: {'Content-Type': 'Application/json'},
            credentials: 'include',
        });

        props.setName('');
    }

    let menu;

    if(props.name === ''){
        menu = (
            <div>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
           </div>
        )
    } else {
        menu = (
            <div>
                <Link to="/Logout" onClick={logout}>Logout</Link>
           </div>
        )
    }

    return (
        <div>
           <Link to="/">Home</Link> 
           <Link to="/Register">Register</Link>
           <Link to="/Login">Login</Link>

        </div>
    )
}

export default Nav
