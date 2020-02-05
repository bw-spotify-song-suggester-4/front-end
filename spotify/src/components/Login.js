import React, { useState } from "react";
import axios from "axios";
const Login = props => {
  console.log("props", props);
  const [login, setLogin] = useState({
    email: "",
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
    axios
      .post("https://song-suggester4-backend.herokuapp.com/accounts/login", login)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err.message));
  };
  return (
    <div className="register">
      <h1>Welcome</h1>
      <h3>Login</h3>
    <form onSubmit={handleLogin}>
      <div>
        <input
          className="inputContainer"
          type="text"
          name="email"
          placeholder="email"
          value={login.email}
          onChange={handleInput}
        />
      </div>
      <div>
        <input
          className="inputContainer"
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleInput}
        />
      </div>
      <button className="buttonOne" type="submit">Log in</button>
      
    </form>
    </div>
  );
};
export default Login;
