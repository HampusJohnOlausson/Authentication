import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router'

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);

    const submit = async  (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/register',{
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });

        setRedirect(true);
    } 

    if(redirect){
        return <Redirect to="/Login"/>;
    }

    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={submit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="email" value={email}onChange={e => setEmail(e.target.value)}  placeholder="Email" />
                <input type="password" onChange={e => setPassword(e.target.value)}  value={password} placeholder="Password" />
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Register
