import React from "react";
import axios from "axios";

export default function SignUp() {
  const [addTeamMembers, setAddTeamMembers] = React.useState([{}]);

  return (
    <div className="register">
      <h1>Sign Up Below!</h1>

      <NewAddTeamMemberForm
        addTeamMembers={addTeamMembers}
        setAddTeamMembers={setAddTeamMembers}
      />

    </div>
  );
}

function NewAddTeamMemberForm(props) {
  const [newTeamMember, setNewTeamMember] = React.useState({
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
        console.log(response);
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
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          type="text"
          name="name"
          placeholder="enter your first and last names"
          onChange={handleChange}
          value={newTeamMember.name}
        />
      </div>

      <div className="inputContainer">
        <input
          type="text"
          name="email"
          placeholder="someone@example.com"
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
          value={newTeamMember.password}
        />
      </div>

      
        
      
        <button role="submit">Sign Up!</button>
      
    </form>
  );
      }
