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
exports.getRestaurants = exports.getCoordinates = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../index");
//https://maps.googleapis.com/maps/api/place/photo?photoreference=PHOTO_REFERENCE&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=YOUR_API_KEY
function getCoordinates(place) {
    return __awaiter(this, void 0, void 0, function* () {
        var dat = { lat: 0, lng: 0 };
        yield axios_1.default.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${index_1.apiKey}&input=${place}&inputtype=textquery&fields=geometry`).then(data => {
            if (data.data.candidates.length === 0)
                return;
            dat.lat = data.data.candidates[0].geometry.location.lat;
            dat.lng = data.data.candidates[0].geometry.location.lng;
        }).catch(err => console.log(err));
        return dat;
    });
}
exports.getCoordinates = getCoordinates;
function getRestaurants(coords) {
    return __awaiter(this, void 0, void 0, function* () {
        var dat = [];
        const radius = 7 * 1609.34;
        yield axios_1.default.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${index_1.apiKey}&location=${coords.lat},${coords.lng}&radius=${radius}&type=restaurant`).then(data => {
            for (let key of data.data.results) {
                const coords = { lat: 0, lng: 0 };
                const entry = { name: '', coords, icon: '', price_level: 0, rating: 0 };
                entry.name = key.name;
                entry.coords.lat = key.geometry.location.lat;
                entry.coords.lng = key.geometry.location.lng;
                if (key.photos)
                    entry.icon = key.photos[0].photo_reference;
                entry.price_level = key.price_level;
                entry.rating = key.rating;
                dat.push(entry);
            }
        }).catch(err => console.log(err));
        return dat;
    });
}
exports.getRestaurants = getRestaurants;
