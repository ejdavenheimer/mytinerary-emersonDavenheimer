import { createAction } from "@reduxjs/toolkit";

export const addCity = createAction('addCities', (cities) =>{
    return {
        payload: cities
    }
} )

export const filterByName = createAction( 'filterByName', (value)=>{
    return{
        payload: value
    }
})