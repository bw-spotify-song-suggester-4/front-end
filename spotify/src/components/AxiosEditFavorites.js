// import React, { useState } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import styled from "styled-components";

// const EditFavorites = (props) => {
//    console.log("edit", props)
//     const id = props.match.params.id;
//     const [edit, setEdit] = useState({
//         artist: '',
//         title: '',
//         users_id: 2
//     })


//     const handleChange = event => {
//         setEdit({ ...edit, [event.target.name]: event.target.value })
//     }

//     const handleSubmit = event => {
//         event.preventDefault();
//         axiosWithAuth()
//             .put(`https://song-suggester4-backend.herokuapp.com/editfavorites/${id}`, edit)
//             .then(response => {
//                 console.log( response);
//                 props.history.push('/dashboard')
//             })
//             .catch(err => {
//                 console.log("SignUp Login Catch Error: ", err.response.data.message);
//                 alert(err.response.data.message);
//             });
//     }

//     return (
       
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="artist"
//                     placeholder="Artist"
//                     onChange={handleChange}
//                     value={edit.artist}
//                 />
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     onChange={handleChange}
//                     value={edit.title}
//                 />
//                 <button type="submit">Edit Favorite</button>
//             </form>
        
//     )
// }


// export default EditFavorites;