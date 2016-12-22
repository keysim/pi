#!/usr/bin/python
import time
import serial

ser = serial.Serial('/dev/ttyUSB0', 9600)

while 1 :
  time.sleep(1)
  ser.write('3')
