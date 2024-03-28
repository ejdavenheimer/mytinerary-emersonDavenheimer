import { configureStore } from "@reduxjs/toolkit";
import citiesReducers from './reducers/citiesReducers'
import itineraryReducers from './reducers/itineraryReducers'

const store = {
    cities: citiesReducers,
    itineraries: itineraryReducers
}

export default configureStore({
    reducer: store
})