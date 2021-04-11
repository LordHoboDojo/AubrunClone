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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const skyscanner_1 = require("./api/skyscanner");
const places_1 = require("./api/places");
// import {getRestaurants} from './api/places'
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/build')));
app.get('/api/info', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const place = req.body.place;
    const coords = yield places_1.getCoordinates(place);
    const restaurants = yield places_1.getRestaurants(coords);
    //const hotels = await getHotels(coords)
}));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/build', 'index.html'));
});
function dev() {
    return __awaiter(this, void 0, void 0, function* () {
        yield skyscanner_1.getFlights2('LAX', 'JFK', '2021-05-03', '2021-05-05', 'AA');
    });
}
app.listen(3100, () => {
    dev();
    console.log('Starting API on port 3100...');
});
