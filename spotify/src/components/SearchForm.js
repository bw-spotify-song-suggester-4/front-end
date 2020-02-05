// searchForm component
import React, { useState, useEffect } from "react";


export default function SearchForm(props) {
  // console.log("hello", props);

  const submitHandler = e => {
    e.preventDefault();
  }
  return (
    <section className="search-form">
      <label>Search Form: </label>
      <form onSubmit={submitHandler}>
        <input type="text" name="song" value="" onChange={props.handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      
    </section>
  );
}
