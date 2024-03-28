import { createReducer } from "@reduxjs/toolkit";
import { addItinerary } from "../actions/itineraryActions";
const initialState = {
    all : []
}

const reducer = createReducer( initialState, (builder) =>{
    builder.addCase( addItinerary, (state, action)=> {
            const newState = {...state};
            newState.all = action.payload;
            return newState;
    })
} )

export default reducer