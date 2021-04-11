import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser'
//import { getFlights,getFlights2 } from './api/skyscanner'
import { getCoordinates, getRestaurants } from './api/places'
import { getHotels } from './api/hotels';
export let apiKey = 'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE'
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.post('/api/info', async (req, res) => {
    const place = req.body.place
    const coords = await getCoordinates(place)
    if (coords.lat === 0 && coords.lng === 0) {
        res.send({ code: -1 })
    }
    const restaurants = await getRestaurants(coords)
    const hotels = await getHotels(coords)
    res.send({ code: 0, coords, restaurants, hotels })
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
})
app.listen(8080, () => {
    console.log('Starting API on port 3100...');
});

