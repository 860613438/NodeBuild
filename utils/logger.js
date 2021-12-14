//日志文件
const { createLogger, format, transports } = require("winston");
var moment = require("moment");//时间格式化插件
var currentLogName = moment(Date.now()).format("YYYY-MM-DD");

const myFormat = format.printf(log=>{
    return `${log.timestamp} ${log.level} : ${log.message}`
})

//日志输出级别 info warn error
const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({
           format:"YYYY-MM-DD HH:mm:ss" 
        }),
        myFormat
    ),
    transports: [
        new transports.Console(),//控制tai
        new transports.File({filename: `./logs/${currentLogName}.log`,level: 'info'})
    ]
})
export default logger