import React, { useState } from 'react'

const Login = () => {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

   async function getUserData(){
       let response = await fetch({
           method: "GET",
           url: 'http://localhost:5000/Login',
       });
       
       return response.json
   }
    

    return (
        <div>
            <h3>Login</h3>
            <form>
            <input type="text" placeholder="email" onChange={e => setUserName(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login
