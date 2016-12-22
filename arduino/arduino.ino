#include <Serial.h>

/*void setup(){
  Serial.begin(9600);
}

void loop(){
  Serial.println("Hello Pi");
  delay(1000);
}*/

/*const int ledPin = 13;

void light(int n){
  for (int i = 0; i < n; i++) {
    digitalWrite(ledPin, HIGH);
    delay(500);
    digitalWrite(ledPin, LOW);
    delay(500);
  }
}

void setup(){
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop(){
  if (Serial.available()){
    light(Serial.read() - '0');
  }
  delay(500);
}*/

/* Arduino Tutorial - 7 Segment 
   One 7 segment is one digit, from 0 to  9.
   Dev: Vasilakis Michalis // Date: 25/7/2015 // www.ardumotive.com */

//Library
#include "SevenSeg.h"

//Defines the segments A-G: SevenSeg(A, B, C, D, E, F, G);
SevenSeg disp (10,9,8,7,6,11,12);
//Number of 7 segments
const int numOfDigits =1;
//CC(or CA) pins of segment
int digitPins [numOfDigits]={4};

//Variables
int number=0; //Default number
int flag;

void setup() {
	
  Serial.begin(9600);
  //Defines the number of digits to be "numOfDigits" and the digit pins to be the elements of the array "digitPins"
  disp.setDigitPins ( numOfDigits , digitPins );
  //Only for common cathode 7segments
  disp.setCommonCathode();
  //Control brightness (values 0-100);
  disp.setDutyCycle(20);
  disp.write(' ');
}

void loop()
{
  if (Serial.available() > 0){
    number = Serial.read() - '0';
    Serial.println(number);
    flag=0;
  }

  if (number>=0 && number<=9){
    disp.writeDigit(number);
  }
  else if(number + '0' == '.') {
    disp.write(' ');
  }
}

