import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const OnclickHandler = () => {
        navigate('/home')
    };
    return (
        <div>
            <button onClick={OnclickHandler}>Click to enter</button>
        </div>
    )
}
