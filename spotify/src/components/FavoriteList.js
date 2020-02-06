import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import FavoriteCard from './FavoriteCard'
import {songs} from "./DummyData";

function FavoriteList(){
    const [data, setData] = useState([]);
    console.log(songs)
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
             
            
                {songs.map((data)=>{
                    return(
                        <div id={data.id}> 
                        <FavoriteCard  
                            id={data.id}
                            artist = {data.artist}
                            title = {data.title}
                        />
                        </div>
                    )}
                )}
             
            </div> 
        );
    };
    export default FavoriteList;