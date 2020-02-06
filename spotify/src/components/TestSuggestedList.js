import React, {useState, useEffect} from 'react'

import TestSuggestedCard from './TestSuggestedCard'
import axiosWithAuth from '../utils/axiosWithAuth';

function TestSuggestedList(){
    const [song, setSong] = useState([]);
    
        useEffect(() =>{
            axiosWithAuth()
            .get("/music/suggested")
            .then(response =>{
                setSong(response.data);
                console.log("response", response)
            })
        },[])

        console.log("song", song)
        return(

            <div>
            
                {song.map((song)=>{
                    return(
                        <div key={song.track_id}> 
                        <TestSuggestedCard  
                            track_id = {song.track_id}
                            artist_name = {song.artist_name}
                            track_name = {song.track_name}
                            cover_url = {song.cover_url}
                        />
                        </div>
                    )}
                )}
             
            </div> 
        );
    };
    export default TestSuggestedList;