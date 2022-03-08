#!/usr/bin/node

let http = 		require("http");
let fs = 		require("fs");
let archivo =	require('./images.json');

let http_server = http.createServer(function(req,res) {
	let html = "index.html";

	if (req.url == "/favicon.ico"){
		console.log("Favicon error");
		return;
	}
	for(let i = 0; i < archivo.images.length; i++){
		if (req.url == "/" + archivo.images[i]){
			fs.readFile(archivo.images[i], function(err, data) {
				if (err) {
					console.log("Error1");
					return;
				}
				res.writeHead(200);
				res.end(data);
			});
		}
	}
	fs.readFile(html,function(err, data){
		if (err){
			console.log("Error2");
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(1095);

console.log("Server running :)");
