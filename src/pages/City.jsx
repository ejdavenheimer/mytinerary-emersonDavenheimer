import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCities } from '../services/citiesQueries'


function City() {
    const paramCitie = useParams();

    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            getCities()
            .then((r) => {
                setCity(r.data.data.filter(city => city.name === paramCitie.name)[0]);
            })
        .finally( () => setLoading(false));  
        }, 10);
    }, []);

    if(loading){
        return (
            <div className='grow pt-20'>
                <h3 className='pt-20 text-4xl text-white'>Loading...</h3>
            </div>
        );
    }

    return (
        <>
        <Navbar></Navbar>
            <div>
                <Link to={"/cities"} className='text-sm'> /Back to Cities </Link>
                <h3 className='mt-6'>{city && city.name}</h3>
                <img className='w-screen h-80 object-cover' src={city.image} alt={"Photo of " + city.name} />
                
            </div>
            <p>Under construction</p>
            <Footer></Footer>
        </>
    )
}

export default City
