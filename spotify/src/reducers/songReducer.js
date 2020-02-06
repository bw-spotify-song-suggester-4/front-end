import { SONG_SEND, RESULTS_FETCH, RESULTS_SUCCESS, RESULTS_FAILED } from '../actions/postFormActions';

// This is an example shape of the returned Search data
// [
//   {
//     artist_name: "Britney Spears",
//     track_name: "Toxic",
//     track_id: "6I9VzXrHxO9rA9A5euc8Ak",
//     cover_art:
//       "https://i.scdn.co/image/ab67616d00001e02efc6988972cb04105f002cd4"
//   },
//   {
//     artist_name: "System Of A Down",
//     track_name: "Toxicity",
//     track_id: "0snQkGI5qnAmohLE7jTsTn",
//     cover_art:
//       "https://i.scdn.co/image/ab67616d00001e0230d45198d0c9e8841f9a9578"
//   },
//   {
//     artist_name: "Trippie Redd",
//     track_name: "Toxic Waste",
//     track_id: "1SxagO9GK0UUeEYLmH8Pln",
//     cover_art:
//       "https://i.scdn.co/image/a1475f416d1f8b8ab48e29f6494b116a676c0a13"
//   },
//   {
//     artist_name: "Britney Spears",
//     track_name: "Toxic - Y2K & Alexander Lewis Remix",
//     track_id: "48C9sYkAOavqzFn77bxGR3",
//     cover_art:
//       "https://i.scdn.co/image/ab67616d00001e0271c4c3087c137f63ae9ed94f"
//   },
//   {
//     artist_name: "Brytiago",
//     track_name: "Toxico",
//     track_id: "2ohqtT8jp5VeSBAtBEpSqA",
//     cover_art:
//       "https://i.scdn.co/image/ef3522130c8df89e16de121fab243532e16de061"
//   },
//   {
//     artist_name: "Britney Spears",
//     track_name: "Toxic",
//     track_id: "717TY4sfgKQm4kFbYQIzgo",
//     cover_art:
//       "https://i.scdn.co/image/ab67616d00001e025028c2ac460025bffa43057e"
//   }
// ];





const initialState = {
    song: [],
    results: [],
    isFetching: true,
    error: ""
}

export const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case SONG_SEND:
            return {
                ...state,
                track_name: action.payload,
                isFetching: false,
                error: ""
            };
        case RESULTS_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case RESULTS_SUCCESS:
                console.log(action.payload);
            return {
                ...state,
                results: action.payload,
                isFetching: false,
                error: ""
            };
        case RESULTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
    
}

