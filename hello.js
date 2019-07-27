var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);

	var filename = fileName(q.pathname);//calls fileName function	

	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log('Incoming Request: ' + req.url);
		return res.end();
		};
	});		
//}).listen(8080);
}).listen(PORT);


//console.log('Server listening on Port 8080...')
console.log('Server listening on Port 5000...')

//fileName function: Allows req name to either include or exclude .html
function fileName(q_path) {
	let fn = "." + q_path;
	fn = fn.toString();

	if (fn == './') {
		fn = './index';
	} else if (fn.substr(-5) == '.html') {
		fn = fn.replace(".html", "");
	};

	fn = fn + ".html";
	return fn;
}

/*
NOTES:



*/