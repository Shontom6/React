import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const onLoginClickHandler = () => {
    navigate("/home");
  };
  return (
    <div>
      <button onClick={onLoginClickHandler}>Click to Login !!</button>
    </div>
  );
}
