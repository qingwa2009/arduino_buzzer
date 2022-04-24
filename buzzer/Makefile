###############################################################################
# Makefile for project 
###############################################################################

## General options
# RST_PIN	:=	8
# CS_PIN	:=	10
# DC_PIN	:=	9

PROJECT = 
MCU = ATmega328P
COMPILER = "Arduino AVR"
TARGET = Debug
SHELL = C:\Windows\system32\cmd.exe
ARDUINO_PATH="D:\Program Files\Proteus 8 Professional\Tools\ARDUINO"
AVRDUE_CONF = "D:\Program Files\Arduino\hardware\tools\avr\etc\avrdude.conf"
BUILD_DIR=bin
OPTIMIZE = Os

UPLOAD_PORT = COM3
UPLOAD_BAUD = 115200
UPLOAD_PROGRAMER = arduino

SRCS = $(wildcard *.c) 
OBJS = $(addprefix $(BUILD_DIR)/,$(SRCS:.c=.o))
THIS_DIR = $(abspath .)
CURR_FOLDER_NAME =$(lastword $(notdir $(THIS_DIR)))

MYLIB_PATH = ../mylib
MYLIB_OUT_PATH = $(BUILD_DIR)/mylib
MYLIB_OUT_PATH_RELATIVE_FROM_MYLIB = ../$(CURR_FOLDER_NAME)/$(MYLIB_OUT_PATH)

## Tools general options
APPFLAGS=-C pro328 -T -std=gnu++11 -T -fno-threadsafe-statics -N atmega328p -F 16000000
LDFLAGS=-Wl,--gc-sections -lm -mmcu=atmega328p
CCFLAGS=-Wall -gdwarf-2 -fno-exceptions -DF_CPU=16000000 \
		-I . \
		-DARDUINO_ARCH_AVR @$(BUILD_DIR)/arduino/libs.inc \
		-$(OPTIMIZE) -mmcu=atmega328p
CFLAGS:=$(CCFLAGS)
##编译到boot区
# LDFLAGS += -Wl,--section-start=.text=0x3800

CCFLAGS+= -std=gnu++11 -fno-threadsafe-statics 
CFLAGS+= -std=gnu11  


##没用到的函数将不会编译进去
CCFLAGS+= -ffunction-sections -fdata-sections 
CFLAGS+= -ffunction-sections -fdata-sections 

## Processing Tools
APP=$(ARDUINO_PATH)\mksketch
CC=avr-gcc
ASM=avr-gcc
LD=avr-gcc

# Build tree:
all:	Debug

Debug:	$(BUILD_DIR)/Debug.elf


$(BUILD_DIR)/Debug.elf:	$(BUILD_DIR)/main.o  $(MYLIB_OUT_PATH)/mylib.a
	$(LD) $(LDFLAGS)  -o $@ $^ $(BUILD_DIR)/arduino/arduino.a -lm
	avr-objcopy -O ihex -R .eeprom $@  "$(BUILD_DIR)/Debug.hex"
	avr-objcopy -j .eeprom --set-section-flags=.eeprom="alloc,load" --change-section-lma .eeprom=0 --no-change-warnings -O ihex $@  "$(BUILD_DIR)/Debug.eep" || exit 0 
	avr-size $@ 
	
$(BUILD_DIR)/main.o: $(BUILD_DIR)/main.cpp $(wildcard *.h) 
	$(CC) $(CCFLAGS)  -o $@ -c $< 

$(BUILD_DIR)/main.cpp: main.ino
	-mkdir $(BUILD_DIR)
	$(APP) $(APPFLAGS) -M $(BUILD_DIR)/arduino  -A $(ARDUINO_PATH) -O $@ $<
	make -f $(BUILD_DIR)/arduino/Makefile all

$(MYLIB_OUT_PATH)/mylib.a: $(wildcard $(MYLIB_PATH)/*.c) $(wildcard $(MYLIB_PATH)/*.h) 
	make -C $(MYLIB_PATH) -f Makefile all OUT_DIR=$(MYLIB_OUT_PATH_RELATIVE_FROM_MYLIB)


.PHONY: upload
upload: 
	avrdude -C$(AVRDUE_CONF) -v \
	-p$(MCU) -c$(UPLOAD_PROGRAMER) -P$(UPLOAD_PORT) -b$(UPLOAD_BAUD) -D -Uflash:w:$(BUILD_DIR)/Debug.hex:i

# 使c文件依赖头文件，搞不了不会搞
# sinclude $(SOURCES:%.c=$(BUILD_DIR)/%.d)

# $(BUILD_DIR)/%.d: %.c
# 	SET /p=$@> $@ < nul &\
# 	$(CC) -M $(CFLAGS) $< >> $@ 


#$(CC) -M $(CFLAGS) $< >> $@
#$(subst .c,.o, $(BUILD_DIR)/$<) > $@

#sed 's,$*\.o[ :]*,\1.o $@ : ,g' < $@.$$$$ > $@
#rm -f $@.$$$$
	
# bootloader - attach bootloader to the firmware
bootloader:
	avr-objcopy -O ihex -R .eeprom "$(BUILD_DIR)/Debug.elf" "$(BUILD_DIR)/Debug.hex"
	copy /b bootloader.hex+"$(BUILD_DIR)/Debug.hex" "$(BUILD_DIR)/with.bootloader.hex"

# tidy - delete all temporary files which are not involved in the target generation
tidy:
	rm -rf $(BUILD_DIR)/main.d
# -make -f $(BUILD_DIR)/arduino/Makefile tidy

# cleanup - delete all generated files
clean:	tidy
	rm -rf $(BUILD_DIR)/Debug.elf
	rm -rf $(BUILD_DIR)/main.cpp
	rm -rf $(BUILD_DIR)/*.o
# -make -f $(BUILD_DIR)/arduino/Makefile clean

