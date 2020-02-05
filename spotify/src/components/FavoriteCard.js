import React from "react";

function FavoriteCard(props) {
  return (
    
      <div>
        <h1>{props.name}</h1>
        <h2>{props.track_id}</h2>
        <h2>{props.artist}</h2>
        <div>
        <button>Edit Favorite </button>
        <button> Delete Favorite </button>
        </div>
      </div>
     
        
    
   );
}

export default FavoriteCard;
