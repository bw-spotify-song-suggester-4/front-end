import { CREATE_FAVORITE_FAILURE, CREATE_FAVORITE_SUCCESS, CREATE_FAVORITE_START, DELETE_FAVORITE_FAILURE, DELETE_FAVORITE_SUCCESS, DELETE_FAVORITE_START } from "../actions/";

const initialState = {
    favorites: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log('reducer is reducing', action );
    switch(action.type){
        case CREATE_FAVORITE_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case CREATE_FAVORITE_SUCCESS:
            return {
                ...state,
                workouts: [...state],
                error: null
            }
        case CREATE_FAVORITE_FAILURE:
            return {
                ...state,
                error: action.payload,
                workouts: []
            }
        case DELETE_FAVORITE_START:
            return {
                    ...state,
                    isFetching: true,
                    error: null 
                }
            case DELETE_FAVORITE_SUCCESS:
                return {
                    ...state,
                    workouts: action.payload,
                    error: null
                }
            case DELETE_FAVORITE_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    workouts: []
                }
                default: 
            return state;
    }
}