import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { saveResults } from "../actions/postFormActions";

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 20,
    marginRight: 100
  },

  card: {
    maxWidth: 500,
    background: "linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)",
    borderRadius: 0,
    maxHeight: 900
  },
  h1: {
    fontFamily: "Ralewayy"
  },
  results: {
    background: "linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)",
    borderColor: "#FFFFFF"
  }
}));

export function TestResultCard(props) {
  console.log("result card props", props);
  const classes = useStyles();
  props.results.length = 3;

  const backendSubmit = event => {
    event.preventDefault();
    //TODO add backendsubmit to a handlesumbit button that says "add to favorites"
    //user_id is hard coded right now. Need to fix a redux store issue where the user id is not being updated with the one given upon login
    const resultInfo = {
      user_id: localStorage.getItem("user_id"),
      track_id: props.song.track_id,
      artist_name: props.song.artist_name,
      cover_art: props.song.cover_art,
      track_name: props.song.track_name,
      first: props.results[0].track_id,
      first_artist_name: props.results[0].artist_name,
      first_track_name: props.results[0].track_name,
      first_cover_art: props.results[0].cover_art,
      second: props.results[1].track_id,
      second_artist_name: props.results[1].artist_name,
      second_track_name: props.results[1].track_name,
      second_cover_art: props.results[1].cover_art,
      third: props.results[2].track_id,
      third_artist_name: props.results[2].artist_name,
      third_track_name: props.results[2].track_name,
      third_cover_art: props.results[2].cover_art, 
    };
    console.log("backend submit", resultInfo);
    props.saveResults(resultInfo);
  };

  return (
    <Card className={classes.card} flexDirection="row">
      <button onClick={backendSubmit}>Add to Favorites</button>
      <h1 className={classes.titletext}>Song Title:{props.post.track_name}</h1>
      <br />
      <br />
      {props.results.map(result => {
        return (
          <Card border={5} className={classes.results}>
            
           
            <h1> {result.track_id} </h1>
            <h2>{result.cover_url}</h2>
            <h3>{result.artist_name}</h3>
            <h3> {result.track_name}</h3>

            {/* TODO Add cardbody/image cap */}
          </Card>
        );
      })}
    </Card>
  );
}

const mapStateToProps = state => {
  console.log(state.loginReducer);
  return {
    results: state.postReducer.results,
    // TODO double check props for this property
    idUser: state.loginReducer.user_id
  };
};

export default connect(mapStateToProps, { saveResults })(TestResultCard);
