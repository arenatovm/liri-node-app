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
        sporifyThis(userInput)
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

function spotifyThis(song){
    spotify
    .search({type: "track", query: song, limit: 1})
    .then(function(response){
        console.log(Json.stringfy(response.tracks.items[0], null, 2));
        
    })
    .catch(function(err){
        console.log(err);
        
    });
}