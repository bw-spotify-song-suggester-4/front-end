import axiosWithAuth from "../utils/axiosWithAuth";

// Login State
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const userLogin = credentials => dispatch => {
  dispatch({ type: LOGIN_START, payload: credentials }); // Payload = creds
  axiosWithAuth()
    .post("/auth/login", credentials) // TODO Need correct endpoints
    .then(res => {
      // Store token
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token } });
    })
    .catch(err => {
      console.log("Error from Login:", err);
      dispatch({ type: LOGIN_FAILURE, payload: err.data }); // Payload = err msg
    });
};

// Fetching Music from API
export const FETCH_MUSIC_START = "FETCH_MUSIC_START";
export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_FAIL = "FETCH_MUSIC_FAIL";

export const getSong = id => dispatch => {
  dispatch({ type: FETCH_MUSIC_START });
  axiosWithAuth()
    .get(`/${id}`) //TODO Need to get correct endpoint and see how the search is going to get the music from backend. May not be by ID
    .then(response => {
      dispatch({ type: FETCH_MUSIC_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_MUSIC_FAIL, payload: err });
      console.log("Error: ", err);
    });
};

// Posting Favorites List
export const ADD_FAVORITE = "ADD_FAVORITE";

export const addFavorite = song => dispatch => {
  axiosWithAuth()
    .post("/stories", song) // TODO Need endpoint for saving favorite song
    .then(response => {
      dispatch({ type: ADD_FAVORITE, payload: response.data });
    })
    .catch(err => console.log("Error from addFavorite: ", err));
};

// Deleting Favorite
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const deleteFavorite = id => dispatch => {
  axiosWithAuth()
    .delete(`/delete/${id}`) // TODO update with correct endpoint and ensure the id is something we have access to in the data
    .then(response => {
      dispatch({ type: DELETE_FAVORITE, payload: response.data });
    })
    .catch(err => console.log("Error from deleteFavorite: ", err));
};
