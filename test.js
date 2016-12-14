var http = require('http');
var exec = require('child_process').exec;

var visits = 0;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    visits = !visits;
    var msg = 'Light: ' + (visits ? "true":"false");
    res.end(msg + '\n');
    console.log(msg);
    exec('gpio write 1 ' + (visits ? "1" : "0"), function(error, stdout, stderr) {
        //console.log('stdout: ' + stdout);
        //console.log('stderr: ' + stderr);
        if (error !== null)
            console.log('exec error: ' + error);
        else
            console.log("writed !");
    });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');