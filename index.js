#!/usr/bin/node

let http = 		require("http");
let fs = 		require("fs");
let archivo =	require('./images.json');

let http_server = http.createServer(function(req,res) {
	let html = "index.html";
	if (req.url == "/"){	
		fs.readFile(html,function(err, data){
			if (err){
				console.log("Error2");
				return;
			}
			res.writeHead(200);
			res.end(data);
		}); return;
	}
	for(let i = 0; i < archivo.images.length; i++){
		if (req.url == "/" + archivo.images[i]){
			fs.readFile(archivo.images[i], function(err, data) {
				console.log(archivo.images[i]);
				if (err) {
					console.log("Error1");
					return;
				}
				res.writeHead(200);
				res.end(data);
			});
		}
	};

	console.log("Server running :)");
}).listen(1095);
