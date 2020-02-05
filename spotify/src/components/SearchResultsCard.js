import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function SearchResultsCard(props) {
  const saveFavorite = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/save")
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.track_id}</h2>
      <h2>{props.artist}</h2>
      <div>
        <button onClick={saveFavorite}>Add Favorite </button>
      </div>
    </div>
  );
}

export default SearchResultsCard;
