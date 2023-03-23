import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    
    const navigate = useNavigate();
    
    function handleClick(){
        navigate("/Register")
    }


    return (
        <div className="auth-form-container1">
            <h2>{props.name}</h2>
            <form className="login-form1" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button >
                <Link to={"/login/docter"}>
                Log In
                </Link></button>
            </form>
            <button className="link-btn1" onClick={handleClick}>Don't have an account? Register here.</button>
        </div>
    )
}

