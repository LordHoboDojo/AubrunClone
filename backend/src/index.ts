import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser'
import { getFlights, getPorts } from './api/skyscanner'
import { getCoordinates, getRestaurants } from './api/places'
import { getHotels } from './api/hotels';
export let apiKey = 'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE'
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.post('/api/info', async (req, res) => {
    const place = req.body.place
    const fromCoords = req.body.coords
    const destCoords = await getCoordinates(place)
    if (destCoords.lat === 0 && destCoords.lng === 0) {
        res.send({ code: -1 })
    }
    const fromPorts = await getPorts(fromCoords)
    fromPorts.push('DFW')
    const toPorts = await getPorts(destCoords)
    const flights = []
    console.log(fromPorts)
    console.log(toPorts)
    const flightnums = []
    let i = 0
    for (let from of fromPorts) {
        if (i >= 3) break
        let j = 0
        for (let to of toPorts) {
            if (j >= 3) break
            console.log(`Handling ${from} to ${to}`)
            let x = await getFlights(from, to, '2021-04-13', '2021-04-14')
            if (x.length > 0) {
                for (let f of x) {
                    if (!flightnums.includes(f.flightNumber)) {
                        flights.push(f)
                        flightnums.push(f.flightNumber)
                    }
                }
            }
            j++
        }
        i++
    }
    console.log(flights)
    const restaurants = await getRestaurants(destCoords)
    const hotels = await getHotels(destCoords)
    res.send({ code: 0, coords: destCoords, flights, restaurants, hotels })
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
})
app.listen(3100, () => {
    console.log('Starting API on port 3100...');
});

