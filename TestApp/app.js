// going to require whatever middleware your using from npm
var Mustache = require("mustache");

//create a requirement for the server
var http = require("http"); // for web requests

//if it is in the same directory, use " ./ "
//This is an example of creating your own middleware
var randomNum = require ("./randomNumber");

//your code
var message = Mustache.render("Hi, {{firstname}} {{lastname}} how are you today? ", {firstname: "Alexandra", lastname:"de Castro"});

function sendMessage(){
    console.log(message);
}
//Handle incoming HTTP requests
// === is an abosolute equal comparsion. Meaning, not only the value, but the type of container (var it is) has to be same and exact. If not, it will return false
function reqHandler(req, res){
    console.log("We have a server request from " + req.url);
    if(req.url === "/"){
        res.end("Weclome to my Homepage!");
    }
    else if (req.url === "/about"){
        res.end("This is the about page");
    }
    else if (req.url === "/contact"){
        req.end(message + randomNum());
    }
    else{
        res.end("Page not found.");
    }
    res.end(message + randomNum());
}

//rendering the result
sendMessage();
console.log(randomNum());
console.log(randomNum());
console.log(randomNum());

//create and start the server
var server = http.createServer(reqHandler);

//starts the server
server.listen(3000);