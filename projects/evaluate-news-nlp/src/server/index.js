var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var FormData = require('form-data')
const fetch = require('node-fetch')
const dotenv = require('dotenv')

dotenv.config()
var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {

var data ={
    key: process.env.API_KEY,
    url: req.query.formText,
    lang: "en",
}


const response = fetch("https://api.meaningcloud.com/sentiment-2.1",  
  { method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }})
  .then(response => { return response.json()})
  .then(function(data){res.send(data)})
  .catch(error => console.log('error', error))

  
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
