import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { getCities } from '../services/citiesQueries'
function Cities() {
    const dataCities = () => {
        getCities()
        .then((r) => console.log(r))
        .finally(()=> console.log("Finish promise"))
    }
    return (
        <>
            Hola
        </>
    )
}

export default Cities
