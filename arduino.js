var SerialPort = require("serialport");
var port = new SerialPort("/dev/tty-USB0", {
    baudRate: 9600
});

port.on('data', function (data) {
    console.log('Data: ' + data);
});