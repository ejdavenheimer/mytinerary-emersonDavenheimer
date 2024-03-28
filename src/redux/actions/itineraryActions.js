import { createAction } from "@reduxjs/toolkit";


export const addItinerary = createAction('addItinerary', (itineraries) =>{
    
    console.log(itineraries.data);
    return {
        payload: itineraries
    }
} )
