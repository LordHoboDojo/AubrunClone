import axios from 'axios'
const ip = '99.125.121.169'
const port = '80'
export async function getInformation(place) {
    const dat = {}
    const coords = {}
    await navigator.geolocation.getCurrentPosition(async (data) => {
        coords.lat = data.coords.latitude
        coords.lng = data.coords.longitude
    })
    await axios.post(`http://${ip}:${port}/api/info`, { place: place, coords }).then(data => {
        dat.code = data.data.code
        dat.coords = data.data.coords
        dat.hotels = data.data.hotels
        dat.restaurants = data.data.restaurants
        dat.flights = data.data.flights
    })
    return dat
}