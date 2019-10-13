const http = require('http');
const open = require('open');
const readline = require('readline')
const { quote } = require('.');

const userInput = process.argv[2] || 'How about a nice game of chess?';

const uri = 'http://localhost:8080';

// Create an io interface to make the log messages visible.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Open the HTTP webserver location with the default browser.
console.log(`Opening ${uri} with default browser...`);
open(uri);

// Start the HTTP webserver and serve the quoted user input.
console.log(`Starting webserver at ${uri}...`);
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write(quote(userInput), "utf8");
    res.end();
}).listen(8080);
