var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
    baudRate: 9600
});

port.on('data', function (data) {
    console.log('Data: ' + data);
});

port.on('open', function() {
    setInterval(function() {
        port.write('5', function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
            console.log('message written');
        });
    }, 2000);
});