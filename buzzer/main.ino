#include <Arduino.h>
#include "../mylib/MyPWM.h"
#include "../mylib/MyPin.h"
#define DEBUG_LED 2

void setup()
{

    Serial.begin(80000);

    // timer1SetClockSource(Timer1_Clock_1);
    // timer1SetCountType(Timer1_Count_FPWM_0_ICR);
    // timer1SetICRValue(999);
    // timer1SetAOnCompMatchOutType(Timer1_OCx_FPWM_Out0_On_Match_Out1_at_Bottom);
    // timer1SetACompMatchValue(0);
    // MYPIN_WRITE_MODE(9);

    timer2SetClockSource(Timer2_Clock_1);
    timer2SetCountType(Timer2_Count_FPWM_0_OCRA);
    timer2SetACompMatchValue(255);
    timer2SetBOnCompMatchOutType(Timer2_OCx_FPWM_Out0_On_Match_Out1_at_Bottom);
    timer2SetBCompMatchValue(0);
    MYPIN_WRITE_MODE(3);

    MYPIN_WRITE_MODE(DEBUG_LED);
    MYPIN_WRITE_LOW(DEBUG_LED);

    Serial.write(1); /*可以开始*/
    while (1)
    {
        while (!Serial.available())
            ;
        OCR2B = Serial.read();
        // timer1SetACompMatchValue(Serial.read() * 4);
        MYPIN_WRITE_TOGGLE(DEBUG_LED);
    }
}

void loop()
{
}