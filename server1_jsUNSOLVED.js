var http = require("http");
//requires teh http package from npm
//Here we require/import the HTTP module

var PORT = 8080;
//We define a port to listen to, telling the computer where to listen

function handleRequest(request, response) {
	//Here we create a generic function to handle requests and reponse 
	  response.end("It Works!! Path Hit: " + request.url);
	} //request url comes from a request, and the end means this is the last part of
	//the resquest
	//the url is the url the client requested



	var server = http.createServer(handleRequest);



	server.listen(PORT, function() {
		  console.log("Server listening on: http://localhost:%s", PORT);
		});
//a listener that listens for changes on teh server and consoles logs the name of the host it's listening on and the port it's using
