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
                        <div key={data.song_id}> 
                        <TestSuggestedCard  
                            song_id = {data.song_id}
                            artist= {data.artist}
                            title= {data.title}
                        />
                        </div>
                    )}
                )}
             
            </div> 
        );
    };
    export default TestSuggestedList;