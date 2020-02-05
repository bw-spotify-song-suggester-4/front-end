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
      .post("https://song-suggester4-backend.herokuapp.com/accounts/register", user)
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
    <div className="register">
      <h1>Welcome</h1>
      <h3>Sign Up</h3>

      <form onSubmit={handleSubmit}>
        <div> 
          <h5>Enter your name here: </h5>
          <input className='inputContainer'
            type="text"
            name="name"
            
            required
            onChange={handleChange}
            value={user.name}
          />
        </div>

        <div>
        <h5>Enter your email: </h5>
          <input className='inputContainer'
            type="text"
            name="email"
            
            required
            onChange={handleChange}
            value={user.email}
          />
        </div>

        <div >
        <h5>Enter your password: </h5>
          <input className='inputContainer'
            type="password"
            name="password"

            onChange={handleChange}
            required
            value={user.password}
          />
        </div>

        <button className="buttonOne" type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default Register;
