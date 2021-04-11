import axios from 'axios'
const ip = '99.125.121.169'
const port = '3100'
export async function getInformation(place) {
    const dat = {}
    await axios.post(`http://${ip}:${port}/api/info`, { place: place }).then(data => {
        dat.code = data.data.code
        dat.restaurants = data.data.restaurants
        dat.coords = data.data.coords
    })
    return dat
}