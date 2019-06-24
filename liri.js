require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);

var whatToDo = process.argv[2];
var userInput = process.argv[3];

switch (whatToDo) {
    case "spotify-this-song":
        sporifyThis()
        break;
    case "concert-this":
        concertThis()
        break;
    case "movie-this":
        movieThis()
        break;
    case "do-what-it-says":
        doWhatItSays()
        break;
}

function spotifyThis(){
    spotify
    .search({type: "track", query: "All the small things", limit: 1})
    .then(function(response){
        console.log(Json.stringfy(response, null, 2);
        
    })
    .catch(function(err){
        console.log(err);
        
    });
}