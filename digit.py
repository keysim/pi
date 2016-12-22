#!/usr/bin/python
import time
import serial
import netifaces as ni

ser = serial.Serial('/dev/ttyUSB0', 9600)

ni.ifaddresses('eth0')
ip = ni.ifaddresses('eth0')[2][0]['addr']
print(ip)  # should print "192.168.100.37"

print(addr)

while 1 :
  time.sleep(1)
  ser.write('3')
