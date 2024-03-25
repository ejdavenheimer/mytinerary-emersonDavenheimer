import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarouselContainer from '../components/CarouselContainer'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <CarouselContainer></CarouselContainer>
        <Footer></Footer>
        </>
    )
}

export default Home