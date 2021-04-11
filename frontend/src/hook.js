import axios from 'axios'
const ip = '99.125.121.169'
const port = '3100'
export async function getInformation(place) {
    const dat = {}
    await axios.post(`http://${ip}:${port}/api/info`, { place: place }).then(data => {
        dat.code = data.data.code
        dat.coords = data.data.coords
        dat.hotels = data.data.hotels
        dat.restaurants = data.data.restaurants
    })
    return dat
}