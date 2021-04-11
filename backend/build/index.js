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
const skyscanner_1 = require("./api/skyscanner");
const places_1 = require("./api/places");
const hotels_1 = require("./api/hotels");
exports.apiKey = 'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE';
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/build')));
app.post('/api/info', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const place = req.body.place;
    const fromCoords = req.body.coords;
    const destCoords = yield places_1.getCoordinates(place);
    if (destCoords.lat === 0 && destCoords.lng === 0) {
        res.send({ code: -1 });
    }
    const fromPorts = yield skyscanner_1.getPorts(fromCoords);
    fromPorts.push('DFW');
    const toPorts = yield skyscanner_1.getPorts(destCoords);
    const flights = [];
    console.log(fromPorts);
    console.log(toPorts);
    const flightnums = [];
    let i = 0;
    for (let from of fromPorts) {
        if (i >= 3)
            break;
        let j = 0;
        for (let to of toPorts) {
            if (j >= 3)
                break;
            console.log(`Handling ${from} to ${to}`);
            let x = yield skyscanner_1.getFlights(from, to, '2021-04-13', '2021-04-14');
            if (x.length > 0) {
                for (let f of x) {
                    if (!flightnums.includes(f.flightNumber)) {
                        flights.push(f);
                        flightnums.push(f.flightNumber);
                    }
                }
            }
            j++;
        }
        i++;
    }
    console.log(flights);
    const restaurants = yield places_1.getRestaurants(destCoords);
    const hotels = yield hotels_1.getHotels(destCoords);
    res.send({ code: 0, coords: destCoords, flights, restaurants, hotels });
}));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/build', 'index.html'));
});
app.listen(80, () => {
    console.log('Starting API on port 3100...');
});
