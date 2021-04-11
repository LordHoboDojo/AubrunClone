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
exports.apiKey = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
//import { getFlights,getFlights2 } from './api/skyscanner'
const places_1 = require("./api/places");
const hotels_1 = require("./api/hotels");
exports.apiKey = 'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE';
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/build')));
app.post('/api/info', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const place = req.body.place;
    const coords = yield places_1.getCoordinates(place);
    if (coords.lat === 0 && coords.lng === 0) {
        res.send({ code: -1 });
    }
    const restaurants = yield places_1.getRestaurants(coords);
    const hotels = yield hotels_1.getHotels(coords);
    res.send({ code: 0, coords, restaurants, hotels });
}));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/build', 'index.html'));
});
app.listen(3100, () => {
    console.log('Starting API on port 3100...');
});
