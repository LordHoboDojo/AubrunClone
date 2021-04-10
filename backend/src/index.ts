import express from 'express';
import cors from 'cors';
import path from 'path';
var bodyParser = require('body-parser')
cosnt app =express();
onst app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')))
connect();