import { configureStore } from "@reduxjs/toolkit";
import citiesReducers from './reducers/citiesReducers'

const store = {
    cities: citiesReducers
}

export default configureStore({
    reducer: store
})