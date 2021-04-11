import axios from 'axios'
import { Coords } from './places'
import { apiKey } from '../index'
interface Hotel {
	name: string;
	coords: Coords;
	icon: string;
	price_level: number;
	rating: number;
	address: string;
}

export async function getHotels(coords: Coords) {
	var dat: Array<Hotel> = []
	const radius = 20 * 1609.34
	await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&location=${coords.lat}, ${coords.lng}&radius=${radius}&type=lodging`).then(data => {
		for(let key of data.data.results) {
			const coords: Coords = { lat: 0, lng: 0 }
			const entry: Hotel = { name: '', coords, icon: '', price_level: 0, rating: 0, address: ''}
			entry.name = key.name
			entry.coords.lat = key.geometry.location.lat
			entry.coords.lng = key.geometry.location.lng
			if (key.photos) entry.icon = key.photos[0].photo_reference
			entry.price_level = key.price_level
			entry.rating = key.rating
			entry.address = key.vicinity
			dat.push(entry)
		}
	}).catch((err: any) => console.log(err))
    return dat
}