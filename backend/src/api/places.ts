import axios from 'axios'
const key = 'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE'

interface Coords {
  lat: number;
  lng: number;
}
interface Restaurant {
  name: string;
  coords: Coords
  icon: string;
  price_level: number;
  rating: number;
}
//https://maps.googleapis.com/maps/api/place/photo?photoreference=PHOTO_REFERENCE&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=YOUR_API_KEY
export async function getCoordinates(place: string) {
  var dat: Coords = { lat: 0, lng: 0 }
  await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${key}&input=${place}&inputtype=textquery&fields=geometry`).then(
    data => {
      if (data.data.candidates.length === 0) return
      dat.lat = data.data.candidates[0].geometry.location.lat
      dat.lng = data.data.candidates[0].geometry.location.lng
    }
  ).catch(err => console.log(err))
  return dat
}
export async function getRestaurants(coords: Coords) {
  var dat: Array<Restaurant> = []
  const radius = 7 * 1609.34
  await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${coords.lat},${coords.lng}&radius=${radius}&type=restaurant`).then(data => {
    for (let key of data.data.results) {
      const coords: Coords = { lat: 0, lng: 0 }
      const entry: Restaurant = { name: '', coords, icon: '', price_level: 0, rating: 0 }
      entry.name = key.name
      entry.coords.lat = key.geometry.location.lat
      entry.coords.lng = key.geometry.location.lng
      entry.icon = key.photos[0].photo_reference
      entry.price_level = key.price_level
      entry.rating = key.rating
      dat.push(entry)
    }
  }).catch(err => console.log(err))
  return dat
}