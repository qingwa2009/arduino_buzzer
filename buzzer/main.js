'use strict';
const { SerialPort } = require("serialport");
const fs = require('fs');
const { spawn } = require("child_process");


const pcmfiles = ["sound/陈奕迅-黄金时代.mp3", "sound/陈奕迅-K歌之王 (国).mp3"];
//-f数据格式 -ar采样率 -ac通道数 -acodec输出编码 -输出到管道(serialport管道有点莫名其妙暂停了就不会再启动了)
const ffmpeg = { cmd: "ffmpeg", args: [/*-i inputfile, */"-f", "u8", "-ar", "8000", "-ac", "1", "-acodec", "pcm_u8"/*, outputfile*/] }


var pcmfileInd = 0;
const baudRate = 80000
const com = new SerialPort({ path: "com3", baudRate });

com.on("error", (err) => console.error("Serial Error: ", err));
com.on("pause", () => console.log("com pause!"));
com.on("end", () => console.log("com end!"));
com.on("close", () => console.log("com closed!"));
com.on("resume", () => console.log("com resume"));
com.addListener("drain", () => {
    console.log("drain");
});
let rs = null;
//搞不懂，这样写管道流触发了暂停后就不会再继续，迷-_-!!!
// com.once("data", (data) => {
//     console.log(data);
//     rs.pipe(com, { end: false });
// });

setTimeout(() => {
    play(pcmfiles[pcmfileInd]);
}, 1000);

function play(filename) {
    const temp = "sound/temp.pcm";

    //直接用管道SerialPort有点莫名其妙自动暂停
    // const cp = spawn(ffmpeg.cmd, ["-i", filename, ...ffmpeg.args, "-"], { stdio: ["inherit", "pipe", "inherit"] });
    try {
        fs.unlinkSync(temp);
    } catch (error) {

    }
    const cp = spawn(ffmpeg.cmd, ["-i", filename, ...ffmpeg.args, temp], { stdio: ["inherit", "pipe", "inherit"] });
    cp.on("message", (msg, h) => {
        console.log(msg, h);
    })
    cp.on("close", (exitcode, signal) => {
        console.log(exitcode, signal);
        rs = cp.stdout;
        rs = fs.createReadStream(temp);

        rs.on("end", () => {
            console.log("rs end!");
        });
        rs.on("pause", async () => {
            console.log("rs pause!");
            // console.log(com);
        });
        rs.on("resume", () => {
            console.log('rs resume!');
            console.log("playing: ", filename);
        });
        rs.on("error", (err) => console.log("rs error: ", err));
        rs.on("close", () => {
            console.log("rs closed!");
            pcmfileInd++;
            if (pcmfileInd >= pcmfiles.length) pcmfileInd = 0;
            play(pcmfiles[pcmfileInd]);
        });

        rs.pipe(com, { end: false });
    });



}

