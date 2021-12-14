const express = require("express"); //基于node的一个web框架
const bodyParser = require("body-parser"); //用于http请求中body的解析 
const util = require("util");
import logger from "../utils/logger"
import fs from "fs";//node 自带
import path from "path";

// module.exports = function () {
export default function () {
    const app = express();

    //暴露app.listen  把监听方法延迟执行
    app.listenAsync = util.promisify(app.listen);
    //跨域处理   node  nginx webpack
    app.use((req,res,next) => {
        //http请求的来源
        res.setHeader("Access-Control-Allow-Orgin","*");
        //http请求的方法  get post put delete 
        res.setHeader("Access-Control-Allow-Mehtods","*");
        //http请求的头 token jwt cookie
        res.setHeader("Access-Control-Allow-Headers","*");
        next();
    })


    //配置bodyparse 固定写法
    app.use(bodyParser.json()); //处理jsons数据 用了解析前端发送的json数据
    app.use(bodyParser.urlencoded({
        extended: true
    })); //处理表单数据


    //已经将该块代码提取到了
    // //路由的方式
    // app.get("/api/getList", (req, res) => {
    //     logger.error(req.originalUrl)
    //     logger.error("接口请求 api/getList 开始")routes中
    //     res.status(200).send("list");
    // });
    // //路由的方式
    // app.get("/api/getLists", (req, res) => {
    //     logger.error(req.originalUrl)
    //     logger.error("接口请求 api/getLists 开始")
    //     res.status(200).send("list");
    // });


    // //post put delete 参数json formdate 
    // app.listen(part, () => {
    //     console.log("服务已启动，part" + part)
    // })

    console.log(process.cwd() + "/routes/user.route.js")

    // require(process.cwd() + "/routes/user.route.js")(app);// 如果有多个就要复制多个，不利于维护
    // //动态加载路由
    // logger.info("currDir" + process.cwd());
    // logger.info(fs.readdirSync(process.cwd()))
    
    // logger.info("routeDir:" + routeDir)
    // logger.info(fs.readdirSync(routeDir))
    const routeDir  = process.cwd() + "/routes"; //读取路由文件夹地址
    fs.readdirSync(routeDir).forEach(router => {//循环文件夹地址，然后遍历添加路由
        var filePath = path.join(routeDir, router);
        //加载并执行
        require(filePath)(app);
    })

    return app;


}