import React, { useState } from "react";
import axios from "axios";

function Register(props) {
  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (event, props) => {
    event.preventDefault();
    axios
      .post(
        "https://fierce-crag-88546.herokuapp.com/accounts/register",
        newTeamMember
      )
      .then(response => {
        console.log(response, props);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = event => {
    setNewTeamMember({
      ...newTeamMember,
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
            value={newTeamMember.name}
          />
        </div>

        <div className="inputContainer">
          <input
            type="text"
            name="email"
            placeholder="someone@example.com"
            required
            onChange={handleChange}
            value={newTeamMember.email}
          />
        </div>

        <div className="inputContainer">
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
            required
            value={newTeamMember.password}
          />
        </div>

        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
}

export default Register;
