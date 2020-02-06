import React from "react";
// import EditFavorites from "../components/EditFavorites";
import {Link} from "react-router-dom"
import { Card, CardSubtitle, CardBody, CardTitle, CardImg} from "reactstrap";

function FavoriteCard(props) {
 console.log("fc", props)
  return (
      
      // <div classNam="favorite-card">
      //   <div className="favorites">
      //   <h2>Song ID: {props.track_id}</h2>
      //   <h2>Artist: {props.artist_name}</h2>
      //   <h2>Song Title: {props.track_name}</h2>
      //   <h2>Cover URL: {props.cover_url}</h2>
      //   </div>
      //   <div className="buttons">
      //   <Link to = {`/EditFavorites/${props.id}`}>
      //   <button className= "fav-button">Edit Favorite</button> 
      //   </Link>
      //   <button className= "fav-button"> Delete Favorite </button>
      //   </div>
      //   </div>
        
        <Card className= "favorite-card">
        <CardTitle>Song Title: {props.track_name}</CardTitle>
        <CardImg src={props.cover_url} />
        <CardBody>
        <CardSubtitle>{props.artist_name}</CardSubtitle>
        <CardSubtitle> {props.song_id}</CardSubtitle>
        <Link to = {`/EditFavorites/${props.id}`}>
        <button className= "fav-button">Edit Favorite</button> 
        </Link>
        <button className= "fav-button"> Delete Favorite </button>
        </CardBody>
      </Card>
     
   );
}

export default FavoriteCard;
