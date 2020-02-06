import React, {useState, useEffect} from 'react'

import TestSuggestedCard from './TestSuggestedCard'
import axiosWithAuth from '../utils/axiosWithAuth';

function TestSuggestedList(){
    const [data, setData] = useState([]);
    
        useEffect(() =>{
            axiosWithAuth()
            .get("/music/suggested")
            .then(response =>{
                setData(response.data);
                console.log(response)
            })
        },[])
        return(

            <div>
            
                {data.map((data)=>{
                    return(
                        <div key={data.track_id}> 
                        <TestSuggestedCard  
                            track_id = {data.track_id}
                            artist_name = {data.artist_name}
                            track_name = {data.track_name}
                            cover_url = {data.cover_url}
                        />
                        </div>
                    )}
                )}
             
            </div> 
        );
    };
    export default TestSuggestedList;