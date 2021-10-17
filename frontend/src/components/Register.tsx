import React from 'react'

const Register = () => {
    return (
        <div>
            <h3>Register</h3>
            <form>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Register
