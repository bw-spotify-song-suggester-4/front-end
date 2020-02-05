// searchForm component
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import Search from "../components/Search";

export default function SearchForm(props) {
  // console.log("hello", props);
  console.log("props", props);

  const submitHandler = e => {
    e.preventDefault();

    // TODO: Add API Request here - must run in `useEffect`
    axiosWithAuth()
      .get(`/music/search/${props.search.title}`)
      .then(response => {
        console.log("response", response, props.search.title);

        props.setSongResults(response);
      })
      .catch(error => console.log(error));
  };
  //  Important: verify the 2nd `useEffect` parameter: the dependencies array!

  return (
    <section className="search-form">
      <label>Search Form: </label>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Search"
          value={props.search.title}
          onChange={props.handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
