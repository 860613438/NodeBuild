
//导入express模块的函数
// const express = require("./config/express");//传统导入模式
import express from "./config/express";
const server = express();
import Logger from "./utils/logger"

const part = process.env.part || 3310;
console.log("ENV_part:"+process.env.PART)
console.log("part:"+process.env.part)
server.listenAsync(part).then(function(){
    console.log("服务器已启动，端口" + part);
    Logger.info("qidong=======")
    Logger.warn("qidong====ddd===")
    Logger.error("qidong====error===")
})