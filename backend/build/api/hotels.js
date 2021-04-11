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
exports.getHotels = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../index");
function getHotels(coords) {
    return __awaiter(this, void 0, void 0, function* () {
        var dat = [];
        const radius = 20 * 1609.34;
        yield axios_1.default.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${index_1.apiKey}&location=${coords.lat}, ${coords.lng}&radius=${radius}&type=lodging`).then(data => {
            for (let key of data.data.results) {
                const coords = { lat: 0, lng: 0 };
                const entry = { name: '', coords, icon: '', price_level: 0, rating: 0, address: '' };
                entry.name = key.name;
                entry.coords.lat = key.geometry.location.lat;
                entry.coords.lng = key.geometry.location.lng;
                if (key.photos)
                    entry.icon = key.photos[0].photo_reference;
                entry.price_level = key.price_level;
                entry.rating = key.rating;
                entry.address = key.vicinity;
                dat.push(entry);
            }
        }).catch((err) => console.log(err));
        return dat;
    });
}
exports.getHotels = getHotels;
