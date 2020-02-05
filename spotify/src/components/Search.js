import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import SearchForm from "../components/SearchForm";

const Search = props => {
  const [songSearch, setSongSearch] = useState([]);
  const [search, setSearch] = useState("");
  console.log(props);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axiosWithAuth()
      .get(`accounts/search`)
      .then(response => {
        console.log(response.data.results);

        setSongSearch(response.data.results);
      })
      .catch(error => console.log(error));

    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
  }, [search]);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const SaveFavorite = e => {
      e.preventDefault()
        axiosWithAuth()
        .post('accounts/favorites')
        .then(response => {
            console.log (response)


        })
        .catch(error => console.log(error))
  }

  if (!songSearch) {
    return <h2>...loading</h2>;
  }
  return (
    <main>
      <SearchForm
        songSearch={songSearch}
        handleSearchChange={handleSearchChange}
      />
      {/* TODO search results card, may need to map through results */}
      <h1>track id</h1>
      <h2>track name</h2>
      <p>artist name</p>
      <button onClick={SaveFavorite}>Save as favorite</button> 
    </main>
  );
};
export default Search;

{/* <SuggestedCard  
                            name = {data.name}
                            url= {data.url}
                            description= {data.description}
                            subscribers= {data.subscribers} */}
                        // />