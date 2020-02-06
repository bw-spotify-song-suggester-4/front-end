import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TestResultCard from "./TestResultCard";
import { saveResults } from "../actions/postFormActions";
import axiosWithAuth from "../utils/axiosWithAuth";


const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 15,
    marginRight: 105,
    height: 100,
    width: 350
  },
  button: {
    fontSize: 30
  },
  card: {
    maxWidth: 500,
    background: "linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)"
  },
  h2: {
    fontFamily: "Raleway"
  },
  title: {
    height: 20,
    width: 330
  }
}));

const TestSongForm = props => {
  console.log("this is the results", props.results);
  const [song, setSong] = useState({ title: "" });

  const classes = useStyles();

  const handleChange = event => {
    setSong({ ...song, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post(`/music/search/${song}`)
      .then(response => {
        console.log("response", response, props.search.title);
        console.log("post", song, response.data);
        console.log("redux state", props.songFormSubmission);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="postForm">
      <Card className={classes.card}>
        <h2 className={classes.h2}>Enter Your Song Name Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.title}
            type="title"
            name="title"
            placeholder="Song Title"
            onChange={handleChange}
          />
          <br />
          <br />
          <Button className={classes.button} size="large" type="submit">
            Get Suggestions
          </Button>
        </form>
      </Card>
      <TestResultCard song={song} />
    </div>
  );
};

const mapStateToProps = state => {
  console.log("in post form", state);
  console.log("in post form", state.songReducer);
  return {
    results: state.songReducer.results,
    
  };
};

export default connect(mapStateToProps, { saveResults })(TestSongForm);
