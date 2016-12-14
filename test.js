var http = require('http');
var exec = require('child_process').exec;

var visits = 0;
var light = false;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    visits += 1;
    if(visits % 2 == 1)
        light = !light;
    var msg = 'Light: ' + (light ? "true":"false");
    res.end(msg + '\n');
    console.log(msg);
    exec('gpio write 1 ' + (light ? "0" : "1"), function(error, stdout, stderr) {
        //console.log('stdout: ' + stdout);
        //console.log('stderr: ' + stderr);
        if (error !== null)
            console.log('exec error: ' + error);
        else
            console.log("writed !");
    });
}).listen(1337, '0.0.0.0');
console.log('Server running at http://127.0.0.1:1337/');