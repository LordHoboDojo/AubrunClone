import axios from 'axios'
import { Coords } from './places'
const key = 'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE'
//
interface Goods {
	lat: number;
	lng: number;
}
interface Hotel {
	name: string;
	goods: Goods
	icon: string;
	price_level: number;
}

/*export async function getHotels(coords: Coords) {
    const dat: Hotel = {some data}
    await axios('url').then(data => parse data).catch(err => console.log(err))
    return dat
}

*/

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY