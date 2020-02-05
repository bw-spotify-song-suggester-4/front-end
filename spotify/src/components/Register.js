import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  console.log(props);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://fierce-crag-88546.herokuapp.com/accounts/register", user)
      .then(response => {
        console.log(response, props);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h1>Sign Up Below!</h1>

      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            name="name"
            placeholder="enter your first and last names"
            required
            onChange={handleChange}
            value={user.name}
          />
        </div>

        <div className="inputContainer">
          <input
            type="text"
            name="email"
            placeholder="someone@example.com"
            required
            onChange={handleChange}
            value={user.email}
          />
        </div>

        <div className="inputContainer">
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
            required
            value={user.password}
          />
        </div>

        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default Register;
