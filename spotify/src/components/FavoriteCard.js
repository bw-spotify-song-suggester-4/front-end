import React from "react";
// import EditFavorites from "../components/EditFavorites";
import {Link} from "react-router-dom"

function FavoriteCard(props) {
 console.log("fc", props)
  return (
      
      <div classNam="favorite-card">
        <div className="favorites">
        <h2>Song ID: {props.id}</h2>
        <h2>Artist: {props.artist}</h2>
        <h2>Song Title: {props.title}</h2>
        </div>
        <div className="buttons">
        <Link to = {`/EditFavorites/${props.id}`}>
        <button className= "fav-button">Edit Favorite</button> 
        </Link>
        <button className= "fav-button"> Delete Favorite </button>
        </div>
        </div>
        
     
     
        
    
   );
}

export default FavoriteCard;
