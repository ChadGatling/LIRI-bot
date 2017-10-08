var firstArgument = process.argv[2];
var secondArgument = process.argv[3];
var twitterKeys = require("./keys.js");

var consumerKey = twitterKeys.consumerKey;
var consumerSecret = twitterKeys.consumerSecret;
var accessTokenKey = twitterKeys.accessTokenKey;
var accessTokenSecret = twitterKeys.accessTokenSecret;

// command handler
switch(firstArgument) {
    case "my-tweets":
    	myTweets();
        break;
    case "spotify-this-song":
    	spotifyThisSong();
        break;
    case "movie-this":
    	movieThis();
 		break;
	case "do-what-it-says":
		doWhatItSays();
		break;
    default:
        console.log("Command not recognized");
}

// functions ------------------------------------------------------------------------------------------------------------

// my-tweets
function myTweets(argument) {
	console.log("Getting tweets");

    // ajax to poll api. probably a for loop to conosole.log the resoponse 
}

// spotify-this-song
function spotifyThisSong(argument) {
	console.log("Spotifying song");

    // ajax to poll api. log the response with the specified path to the info in the json itens required.
    // if no results available search again the ace of base song. or just hardcode the info and log that when needed

}

// movie-this
function movieThis(argument) {
	console.log("Movieing this");

    //ajax to poll api. log out info using the json path specific to the items requested.
    // if statement for blank argument, retuen Mr nobody info
}

// do-what-it-says
function doWhatItSays(argument) {
	console.log("Doing what you said");

    //uhhhhhh...
    // something with fs.readfile()

}

// fs append file to also write all the info into the file.