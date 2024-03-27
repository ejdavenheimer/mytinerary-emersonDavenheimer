import axios from 'axios'

export const getCities = async () =>{
    try {
        const response = await axios("http://localhost:4000/api/cities")
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}
