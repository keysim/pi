import serial

ser = serial.Serial('/dev/ttyUSB0', 9600)

while 1 :
  sleep 1200
  ser.write('3')
