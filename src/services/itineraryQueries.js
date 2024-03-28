import axios from 'axios'

export const getItineraries = async (cityId) =>{
    try {
        const response = await axios("http://localhost:4000/api/itineraries/city/" + cityId)
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}
