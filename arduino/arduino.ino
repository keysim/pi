#include <Serial.h>

/*void setup(){
  Serial.begin(9600);
}

void loop(){
  Serial.println("Hello Pi");
  delay(1000);
}*/

const int ledPin = 13;

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
}
