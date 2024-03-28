import React, { useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCities } from '../services/citiesQueries'
import { getItineraries } from '../services/itineraryQueries'
import CitiesCard from '../components/CitiesCard'
import { useSelector, useDispatch } from 'react-redux'
import { addCity, filterByName } from '../redux/actions/citiesActions'
import { addItinerary } from '../redux/actions/itineraryActions'

function Cities() {

    const inputSearch = useRef(null);

    const { filtered, search } = useSelector( (store) => store.cities);
    const { itineraries } = useSelector( (store) => store.itineraries);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getItineraries("6602ef243e8137637f62a046")
            .then( (r) => {
                dispatch(addItinerary(r.data))
            }
            );
        getCities()
            .then((r) => {
                dispatch(addCity(r.data.data));
            });
                
    }, []);
    console.log(itineraries);
    const handleInput = () =>{
        dispatch(filterByName(inputSearch.current.value));
    };        

    

    const cityCards = filtered.map( (city) => (
        <CitiesCard key={city._id} citie={city} />
    ));

    return (
        <>
        <Navbar></Navbar>
        <search className='w-screen flex justify-center'>
            <input
                type='text'
                name='name_citie'
                className='mt-6 w-2/4 rounded text-sm text-black outline-none border border-black'
                onInput={handleInput}
                ref={inputSearch}
                placeholder='Search your city'
                defaultValue={search}
            />
        </search>
            <div className='flex flex-wrap p-3'>
                {
                    filtered.length > 0 && cityCards
                    
                }
            </div>
                <Footer></Footer>
        </>
    )
}

export default Cities
