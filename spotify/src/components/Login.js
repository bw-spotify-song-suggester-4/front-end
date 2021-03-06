import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    console.log(login);
  };
  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/accounts/login", login)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/private");
      })
      .catch(err => console.log(err.message));
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={login.username}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleInput}
      />
      <button type="submit">Log in</button>
      <button>Logout</button>
    </form>
  );
};
export default Login;
