import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import FavoriteCard from './FavoriteCard'

function FavoriteList(){
    const [data, setData] = useState([]);
    
        useEffect(() =>{
            axiosWithAuth()
            .get("accounts/favorites")
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
                        <FavoriteCard  
                            name = {data.name}
                            artist = {data.artist}
                        />
                        </div>
                    )}
                )}
             
            </div> 
        );
    };
    export default FavoriteList;