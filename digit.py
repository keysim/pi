#!/usr/bin/python
import time
import serial
import netifaces as ni

ser = serial.Serial('/dev/ttyUSB0', 9600)
time.sleep(1)
ni.ifaddresses('eth0')
ip = ni.ifaddresses('eth0')[2][0]['addr']
print(ip)  # should print "192.168.100.37"

while 1 :
  for c in ip:
    ser.write(c.encode('ascii'))
    time.sleep(.7)
  ser.write(".".encode('ascii'))
  ni.ifaddresses('eth0')
  ip = ni.ifaddresses('eth0')[2][0]['addr']
  time.sleep(2)
