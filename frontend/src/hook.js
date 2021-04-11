import axios from 'axios'
const ip = '99.125.121.169'
const port = '3100'
export async function getInformation(place) {
    const dat = {}
    await axios.get(`http://${ip}:${port}/api/info`, { place: place }).then(data => {
        dat.restaurants = data.data.restaurants
        console.log(dat.restaurants)
    })
    return dat
}