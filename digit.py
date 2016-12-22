#!/usr/bin/python
import time
import serial
import socket

ser = serial.Serial('/dev/ttyUSB0', 9600)

print(socket.gethostname())

while 1 :
  time.sleep(1)
  ser.write('3')
