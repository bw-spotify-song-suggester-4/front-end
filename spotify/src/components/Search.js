import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import SearchForm from "../components/SearchForm";

const Search = props => {
  const [songResults, setSongResults] = useState([]);
  const [search, setSearch] = useState({
    title: ""
  
  });
  console.log("props it", props);
  
  

  const handleSearchChange = event => {
    setSearch({ 
     ...search, 
     [event.target.name]: event.target.value })
};

  
  if (!songResults) {
    return <h2>...loading</h2>;
  }
  console.log("songResults", songResults)
  return (
    
    <main>
      <SearchForm
        songResults={songResults}
        handleSearchChange={handleSearchChange}
        search={search}
        setSongResults={setSongResults}
      />
      
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