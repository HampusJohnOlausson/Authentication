import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router';

const Login = (props: {setName: (name: string) => void}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);
    
    const submit = async (e: SyntheticEvent) => {
        const response = await fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers: {'Content-Type': 'Application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        
        setRedirect(true);
        props.setName(content.name);
    }

    if(redirect){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={submit}>
            <input type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login
