/*jshint esversion: 6 */

require('dotenv').config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');
var cors = require('cors');
// aylien API
var AYLIENTextAPI = require('aylien_textapi');
// set credentias
var textapi = new AYLIENTextAPI({
  application_id: process.env.APP_ID,
  application_key: process.env.API_KEY
});

const app = express();
app.use(express.static('dist'));
// bodyParser to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());



// ROUTES ////////////////////////////////

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/api', apiCall);

function apiCall (req, res) {
    textapi.sentiment({
      'text': req.body.input
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }
    });
}
