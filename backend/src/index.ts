import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser'
import { getFlights,getFlights2 } from './api/skyscanner'
import { getCoordinates, getRestaurants} from './api/places'
// import {getRestaurants} from './api/places'
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('/api/info', async (req, res) => {
    const place = req.body.place
    const coords = await getCoordinates(place)
    const restaurants = await getRestaurants(coords)
    //const hotels = await getHotels(coords)
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
})

async function dev() {
    await getFlights2('LAX','JFK','2021-05-03','2021-05-05','AA');
}
app.listen(3100, () => {
    dev();
    console.log('Starting API on port 3100...');
});

