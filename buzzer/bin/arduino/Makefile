###############################################################################
# Makefile for Arduino core & libraries
###############################################################################

## General options
MCU = atmega328p
CLOCK = 16000000
COMPILER = "Arduino"
ARDUINO = 181
SHELL = C:\Windows\system32\cmd.exe

## Tools general options
CCFLAGS = -w -ffunction-sections -fdata-sections -DARDUINO_ARCH_AVR -DF_CPU=$(CLOCK) -DARDUINO=$(ARDUINO) -mmcu=$(MCU) -I "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino" -std=gnu++11 -fno-threadsafe-statics -I "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/variants/eightanaloginputs" -Os
ARFLAGS = ru

## Processing Tools
CC=avr-gcc
AR=ar

## Build tree:
all:	bin/arduino/arduino.a

bin/arduino/arduino.a:	bin/arduino/abi.cpp.o bin/arduino/CDC.cpp.o bin/arduino/HardwareSerial.cpp.o bin/arduino/HardwareSerial0.cpp.o bin/arduino/HardwareSerial1.cpp.o bin/arduino/HardwareSerial2.cpp.o bin/arduino/HardwareSerial3.cpp.o bin/arduino/hooks.c.o bin/arduino/IPAddress.cpp.o bin/arduino/main.cpp.o bin/arduino/new.cpp.o bin/arduino/PluggableUSB.cpp.o bin/arduino/Print.cpp.o bin/arduino/Stream.cpp.o bin/arduino/Tone.cpp.o bin/arduino/USBCore.cpp.o bin/arduino/WInterrupts.c.o bin/arduino/wiring.c.o bin/arduino/wiring_analog.c.o bin/arduino/wiring_digital.c.o bin/arduino/wiring_pulse.c.o bin/arduino/wiring_pulse.S.o bin/arduino/wiring_shift.c.o bin/arduino/WMath.cpp.o bin/arduino/WString.cpp.o 

bin/arduino/abi.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/abi.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/abi.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/abi.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/abi.cpp.o"

bin/arduino/CDC.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/CDC.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/CDC.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/CDC.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/CDC.cpp.o"

bin/arduino/HardwareSerial.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/HardwareSerial.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/HardwareSerial.cpp.o"

bin/arduino/HardwareSerial0.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial0.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/HardwareSerial0.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial0.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/HardwareSerial0.cpp.o"

bin/arduino/HardwareSerial1.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial1.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/HardwareSerial1.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial1.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/HardwareSerial1.cpp.o"

bin/arduino/HardwareSerial2.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial2.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/HardwareSerial2.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial2.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/HardwareSerial2.cpp.o"

bin/arduino/HardwareSerial3.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial3.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/HardwareSerial3.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/HardwareSerial3.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/HardwareSerial3.cpp.o"

bin/arduino/hooks.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/hooks.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/hooks.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/hooks.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/hooks.c.o"

bin/arduino/IPAddress.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/IPAddress.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/IPAddress.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/IPAddress.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/IPAddress.cpp.o"

bin/arduino/main.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/main.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/main.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/main.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/main.cpp.o"

bin/arduino/new.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/new.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/new.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/new.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/new.cpp.o"

bin/arduino/PluggableUSB.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/PluggableUSB.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/PluggableUSB.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/PluggableUSB.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/PluggableUSB.cpp.o"

bin/arduino/Print.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/Print.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/Print.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/Print.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/Print.cpp.o"

bin/arduino/Stream.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/Stream.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/Stream.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/Stream.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/Stream.cpp.o"

bin/arduino/Tone.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/Tone.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/Tone.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/Tone.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/Tone.cpp.o"

bin/arduino/USBCore.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/USBCore.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/USBCore.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/USBCore.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/USBCore.cpp.o"

bin/arduino/WInterrupts.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/WInterrupts.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/WInterrupts.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/WInterrupts.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/WInterrupts.c.o"

bin/arduino/wiring.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/wiring.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/wiring.c.o"

bin/arduino/wiring_analog.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_analog.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/wiring_analog.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_analog.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/wiring_analog.c.o"

bin/arduino/wiring_digital.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_digital.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/wiring_digital.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_digital.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/wiring_digital.c.o"

bin/arduino/wiring_pulse.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_pulse.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/wiring_pulse.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_pulse.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/wiring_pulse.c.o"

bin/arduino/wiring_pulse.S.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_pulse.S
	 $(CC) $(CCFLAGS) -o "bin/arduino/wiring_pulse.S.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_pulse.S"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/wiring_pulse.S.o"

bin/arduino/wiring_shift.c.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_shift.c
	 $(CC) $(CCFLAGS) -o "bin/arduino/wiring_shift.c.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/wiring_shift.c"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/wiring_shift.c.o"

bin/arduino/WMath.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/WMath.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/WMath.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/WMath.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/WMath.cpp.o"

bin/arduino/WString.cpp.o:	D:/Program\ Files/Proteus\ 8\ Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/WString.cpp
	 $(CC) $(CCFLAGS) -o "bin/arduino/WString.cpp.o" -c "D:/Program Files/Proteus 8 Professional/Tools/ARDUINO/hardware/arduino/avr/cores/arduino/WString.cpp"
	 $(AR) $(ARFLAGS) bin/arduino/arduino.a "bin/arduino/WString.cpp.o"

clean:	tidy
	 rm -f bin/arduino/arduino.a

tidy:
	 rm -f "bin/arduino/abi.cpp.o"
	 rm -f "bin/arduino/CDC.cpp.o"
	 rm -f "bin/arduino/HardwareSerial.cpp.o"
	 rm -f "bin/arduino/HardwareSerial0.cpp.o"
	 rm -f "bin/arduino/HardwareSerial1.cpp.o"
	 rm -f "bin/arduino/HardwareSerial2.cpp.o"
	 rm -f "bin/arduino/HardwareSerial3.cpp.o"
	 rm -f "bin/arduino/hooks.c.o"
	 rm -f "bin/arduino/IPAddress.cpp.o"
	 rm -f "bin/arduino/main.cpp.o"
	 rm -f "bin/arduino/new.cpp.o"
	 rm -f "bin/arduino/PluggableUSB.cpp.o"
	 rm -f "bin/arduino/Print.cpp.o"
	 rm -f "bin/arduino/Stream.cpp.o"
	 rm -f "bin/arduino/Tone.cpp.o"
	 rm -f "bin/arduino/USBCore.cpp.o"
	 rm -f "bin/arduino/WInterrupts.c.o"
	 rm -f "bin/arduino/wiring.c.o"
	 rm -f "bin/arduino/wiring_analog.c.o"
	 rm -f "bin/arduino/wiring_digital.c.o"
	 rm -f "bin/arduino/wiring_pulse.c.o"
	 rm -f "bin/arduino/wiring_pulse.S.o"
	 rm -f "bin/arduino/wiring_shift.c.o"
	 rm -f "bin/arduino/WMath.cpp.o"
	 rm -f "bin/arduino/WString.cpp.o"

