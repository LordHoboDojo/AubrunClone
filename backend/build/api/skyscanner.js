"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlights = exports.getPorts = void 0;
var Amadeus = require('amadeus');
const axios_1 = __importDefault(require("axios"));
function getPorts(coords) {
    return __awaiter(this, void 0, void 0, function* () {
        let dat = [];
        yield axios_1.default.get(`http://aviation-edge.com/v2/public/nearby?key=235ba8-7ffa37&lat=${coords.lat}&lng=${coords.lng}&distance=80`).then(data => {
            for (let d of data.data) {
                if (d.nameAirport.includes('International'))
                    dat.push(d.codeIataAirport);
            }
        });
        return dat;
    });
}
exports.getPorts = getPorts;
function getFlights(originPlace, destinationPlace, departureDate, returnDate) {
    return __awaiter(this, void 0, void 0, function* () {
        var dat = [];
        var amadeus = new Amadeus({
            clientId: 'SFDyOxzjqFubii6ZudPlg0Him1yZ5fsp',
            clientSecret: 'kktlRAeHtG3cXPEU'
        });
        yield amadeus.shopping.flightOffersSearch.get({
            originLocationCode: originPlace,
            destinationLocationCode: destinationPlace,
            departureDate: departureDate, returnDate: returnDate,
            adults: '1', nonStop: true, max: 5, currencyCode: 'USD'
        }).then(function (response) {
            return __awaiter(this, void 0, void 0, function* () {
                const entries = response.result.data;
                for (let key of entries) {
                    const entry = { departureTime: '', flightNumber: '', airline: '', departureAirport: '', destinationAirport: '', price: '' };
                    entry.departureAirport = key.itineraries[0].segments[0].departure.iataCode;
                    entry.departureTime = key.itineraries[0].segments[0].departure.at;
                    entry.flightNumber = `${key.itineraries[0].segments[0].carrierCode}${key.itineraries[0].segments[0].number}`;
                    entry.destinationAirport = key.itineraries[0].segments[0].arrival.iataCode;
                    entry.price = key.price.grandTotal;
                    var carrierCode = key.itineraries[0].segments[0].carrierCode;
                    yield amadeus.referenceData.airlines.get({
                        airlineCodes: carrierCode
                    }).then(function (response1) {
                        entry.airline = response1.data[0].commonName;
                    }).catch(function (response1) {
                        console.error(response1);
                    });
                    dat.unshift(entry);
                }
            });
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
        return dat;
    });
}
exports.getFlights = getFlights;
