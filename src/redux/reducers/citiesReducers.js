import { createReducer } from "@reduxjs/toolkit";
import { addCity, filterByName } from "../actions/citiesActions";
const initialState = {
    all: [],
    filtered: [],
    search: ""
}

const reducer = createReducer( initialState, (builder) =>{
        builder.addCase( addCity, (state, action)=> {
                const newState = {...state};
                newState.all = action.payload;
                newState.filtered = action.payload;
                return newState;
        }).addCase( filterByName, (state, action)=>{
            const fnFilter = (citie) => citie.name.toLowerCase().startsWith(action.payload.toLowerCase());
            const aux = state.all.filter( fnFilter);
            return {...state, filtered:aux, search: action.payload}
        })
} )

export default reducer