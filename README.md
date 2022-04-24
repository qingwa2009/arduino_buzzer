# SSD1306_SPI_Snake
arduino uno(atmega328) 无源蜂鸣器播放mp3

buzzer文件夹是主文件夹，蜂鸣器的程序都在里面

mylib是自己边学边写的用到的库

编译相关：

cmd cd到buzzer目录输入make 编译

cmd cd到buzzer目录输入make upload 上传

Makefile需要将ARDUINO_PATH改到自己的arduino路径，新版的好像都没有mksketch，我用的proteus自带的编译。

上传相关：

Makefile需要将AVRDUE_CONF改到自己的路径

串口及波特率也可以在Makefile里面修改

运行相关：

1.无源蜂鸣器直接接3号引脚；

2.上传程序到开发板，开发板会等待串口数据；

3.buzzer里面有个js文件，修改pcmfiles数组，把mp3路径添加到数组里；

4.还要下载ffmpeg，设置ffmpeg环境变量；

5.在buzzer目录下cmd指令node main运行js文件，js会先mp3转码成pcm输出到sound目录，
在经过串口输出到arduino。（js里面的串口号也要改成自己的，波特率不要改）




