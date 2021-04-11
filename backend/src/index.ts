import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser'
import { getFlights } from './api/skyscanner'
import { getCoordinates, getRestaurants } from './api/places'
// import {getRestaurants} from './api/places'
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.post('/api/info', async (req, res) => {
    const place = req.body.place
    const coords = await getCoordinates(place)
    const restaurants = await getRestaurants(coords)
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
})

async function dev() {
    await getFlights('US', 'USD', 'en-US' ,'DFW-iata', 'JFK-iata' ,'2021-05-12', '2021-05-13');
}
app.listen(3100, () => {
    dev();
    console.log('Starting API on port 3100...');
});

