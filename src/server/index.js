/*jshint esversion: 6 */

const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

var AYLIENTextAPI = require('aylien_textapi');
// set aylien API credentias
var textapi = new AYLIENTextAPI({
  application_id: process.env.APP_ID,
  application_key: process.env.API_KEY
});

const app = express();
app.use(express.static('dist'));

console.log(__dirname);



// ROUTES ////////////////////////////////

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});



// AYLIEN API /////////////////////////////

textapi.sentiment({
  'text': 'John is a very good football player!'
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});
