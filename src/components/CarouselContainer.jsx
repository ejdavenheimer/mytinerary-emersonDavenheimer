import React, { useState } from 'react'
import CarouselCard from './CarouselCard'
import { dataCities } from './dataCities'

function CarouselContainer() {
    const [countSlide, setCountSlide] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const [cities, setCities] = useState(dataCities.slice(start, end));

    const next = () => {
        if (countSlide > 1) {
            setCountSlide(0);
        } else {
            setCountSlide(countSlide + 1);
        }

        setStart(start + 4 === 12 ? 0 : start + 4);
        setEnd(end + 4 === 16 ? 4 : end + 4);
        setCities(dataCities.slice(start, end));
    }

    const prev = () => {
        if (countSlide < 1) {
            setCountSlide(2);
        } else {
            setCountSlide(countSlide - 1);
        }

        setStart(start - 4 === 0 ? 8 : start - 4);
        setEnd(end - 4 === 4 ? 12 : end - 4);
        setCities(dataCities.slice(start, end));
    }

    return (
        <>
            <div className='flex items-center p-3 my-10'>
                <button onClick={prev}>
                    <i className="fa-solid fa-chevron-left text-4xl"></i>
                </button>

                <CarouselCard citie={cities[0]}></CarouselCard>
                <CarouselCard citie={cities[1]}></CarouselCard>
                <CarouselCard citie={cities[2]}></CarouselCard>
                <CarouselCard citie={cities[3]}></CarouselCard>

                <button onClick={next}>
                    <i className="fa-solid fa-chevron-right text-4xl"></i>
                </button>

            </div>
        </>
    )
}

export default CarouselContainer
