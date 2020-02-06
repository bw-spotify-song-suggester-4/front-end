import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import FavoriteCard from './FavoriteCard'
import {songs} from "./DummyData";

function FavoriteList(){
    const [data, setData] = useState([]);
    console.log(songs)
        
    };
    export default FavoriteList;