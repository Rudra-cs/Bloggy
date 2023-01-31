import React from "react";
import "../App.css";
const Login = () => {
  return (
    <form className="login">
      <h1>Login to Enter the Oasis...</h1>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button>Login</button>
    </form>
  );
};

export default Login;
