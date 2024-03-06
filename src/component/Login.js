import React from "react"; 
import './Login.css';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div className="container">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="username" required/> 
                    <FaUser className='icons'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password" required/>
                    <RiLockPasswordFill className='icons'/>
                </div>
                <button type="submit">Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;