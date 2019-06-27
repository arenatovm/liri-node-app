require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var whatToDo = process.argv[2];
var userInput = process.argv[3];

function spotifyThis(song){
    spotify
    .search({type: "track", query: song, limit: 1})
    .then(function(response){
        console.log(JSON.stringify(response.tracks.items[0], null, 2));
        
    })
    .catch(function(err){
        console.log(err);
        
    });
}

switch (whatToDo) {
    case "spotify-this-song":
        spotifyThis(userInput)
        break;
    case "concert-this":
        concertThis(userInput)
        break;
    case "movie-this":
        movieThis(userInput)
        break;
    case "do-what-it-says":
        doWhatItSays(userInput)
        break;
}

