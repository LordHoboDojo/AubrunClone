var Amadeus = require('amadeus');
import axios from 'axios'
import { Coords } from './places'
//var apiKey = '436a27af5amshdee44385cd567fbp17d8c8jsn725d95d565a4'
interface Flight {
  departureTime: string;
  flightNumber: string;
  airline: string;
  departureAirport: string;
  destinationAirport: string;
  price: string;
}
export async function getPorts(coords: Coords) {
  let dat = []
  await axios.get(`http://aviation-edge.com/v2/public/nearby?key=235ba8-7ffa37&lat=${coords.lat}&lng=${coords.lng}&distance=80`).then(data=>{
    for (let d of data.data) {
      if (d.nameAirport.includes('International')) dat.push(d.codeIataAirport)
    }
  });
  return dat
}
export async function getFlights(originPlace: string,destinationPlace: string,departureDate: string,returnDate: string){
  var dat: Array<Flight> = []
  var amadeus = new Amadeus({
    clientId: 'SFDyOxzjqFubii6ZudPlg0Him1yZ5fsp',
    clientSecret: 'kktlRAeHtG3cXPEU'
  });
  await amadeus.shopping.flightOffersSearch.get({
    originLocationCode: originPlace,
    destinationLocationCode: destinationPlace,
    departureDate: departureDate,returnDate: returnDate,
    adults: '1', nonStop:true, max: 5,currencyCode: 'USD'
  }).then(async function (response: any) {
    const entries = response.result.data
    for (let key of entries) {
      const entry = { departureTime: '', flightNumber: '', airline: '', departureAirport: '', destinationAirport: '', price: '' }
      entry.departureAirport = key.itineraries[0].segments[0].departure.iataCode
      entry.departureTime = key.itineraries[0].segments[0].departure.at
      entry.flightNumber = `${key.itineraries[0].segments[0].carrierCode}${key.itineraries[0].segments[0].number}`
      entry.destinationAirport = key.itineraries[0].segments[0].arrival.iataCode
      entry.price = key.price.grandTotal
      var carrierCode = key.itineraries[0].segments[0].carrierCode
      await amadeus.referenceData.airlines.get({
        airlineCodes:  carrierCode
      }).then(function (response1:any) {
        entry.airline= response1.data[0].commonName
      }).catch(function (response1:any) {
        console.error(response1);
      });
      dat.unshift(entry);
    }

}).catch(function(responseError: { code: any; }){
  console.log(responseError.code);
});
return dat
}