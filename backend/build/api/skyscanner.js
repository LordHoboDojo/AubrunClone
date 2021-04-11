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
exports.getFlights2 = exports.getFlights = void 0;
const axios_1 = __importDefault(require("axios"));
//var apiKey = '436a27af5amshdee44385cd567fbp17d8c8jsn725d95d565a4'
function getFlights(country, currency, locale, originPlace, destinationPlace, outboundPartialDate, inboundPartialDate) {
    return __awaiter(this, void 0, void 0, function* () {
        var toReturn = {};
        yield axios_1.default.get(`http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}/${inboundPartialDate}?apikey=prtl6749387986743898559646983194`).then((data) => {
            toReturn = data.data.Quotes;
        });
        toReturn = Object.assign({}, toReturn);
        console.log(toReturn);
    });
}
exports.getFlights = getFlights;
function getFlights2(originPlace, destinationPlace, departureDate, returnDate, airlineCode) {
    return __awaiter(this, void 0, void 0, function* () {
        var options = {
            headers: {
                "type": "amadeusOAuth2Token",
                "username": "kkshaunak@gmail.com",
                "application_name": "HackathonAuburn",
                "client_id": "SFDyOxzjqFubii6ZudPlg0Him1yZ5fsp",
                "token_type": "Bearer",
                "access_token": "kE9s3zLaAaIcnAe1FwLLYmOCMWXu",
                "expires_in": 1799,
                "state": "approved",
                "scope": ""
            }
        };
        axios_1.default.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originPlace}&destinationLocationCode=${destinationPlace}&departureDate=${departureDate}&adults=1&includedAirlineCodes=${airlineCode}&max=10`, options).then((data) => {
            console.log(data);
        });
    });
}
exports.getFlights2 = getFlights2;
