import React from "react";
import { useState } from "react";

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      alert("Registration Successful.");
    } else {
      alert("Registration Failed.");
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register to Enter the Oasis...</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => {
          setusername(ev.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => {
          setpassword(ev.target.value);
        }}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
