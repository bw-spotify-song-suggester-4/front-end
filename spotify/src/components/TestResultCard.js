import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { saveResults } from '../actions/postFormActions';

const useStyles = makeStyles(theme => ({
    text: {
        fontSize: 20,
        marginRight: 100,
    },

    card: {
        maxWidth: 500,
        background: 'linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)',
        borderRadius: 0,
        maxHeight: 900
    },
    h1: {
        fontFamily: 'Ralewayy',
    },
    results: {
        background: 'linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)',
        borderColor: '#FFFFFF'
    }

}));




export function TestResultCard(props) {
    console.log("result card props", props)
    const classes = useStyles();
    props.results.length = 3;

    const backendSubmit = event => {
        event.preventDefault();
        //user_id is hard coded right now. Need to fix a redux store issue where the user id is not being updated with the one given upon login
        const resultInfo = {
            user_id: localStorage.getItem("user_id"),
            song_id: props.song.song_id,
            artist: props.song.artist,
            title: props.song.title,
            first: props.results[0].song_id,
            first_artist: props.results[0].artist,
            first_title: props.results[0].title,
            second: props.results[1].song_id,
            second_artist: props.results[1].artist,
            second_title: props.results[1].title,
            third: props.results[2].song_id,
            third_artist: props.results[2].artist,
            third_title: props.results[2].title,
        }
        console.log("backend submit", resultInfo)
        props.saveResults(resultInfo)
    }

    return (
        <Card className={classes.card} flexDirection="row">
            <button onClick={backendSubmit}>Save</button>
            <h1 className={classes.titletext}>Song Title:{props.post.title}</h1>
            <br /><br />
            {props.results.map(result => {
                return (

                    <Card border={5} className={classes.results}>
                        <h1> {result.song_id}  </h1>
                        <h3>{result.artist}</h3>
                        <h3> {result.title}</h3>
                        
                    </Card>
                )
            })}

        </Card>
    )
}

const mapStateToProps = state => {
    console.log(state.loginReducer)
    return {
        results: state.postReducer.results,
        idUser: state.loginReducer.idUser
    }
}

export default connect(
    mapStateToProps,
    { saveResults }
)(TestResultCard);