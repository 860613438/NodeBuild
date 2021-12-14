const express = require("express");   //基于node的一个web框架
const bodyParser = require("body-parser"); //用于http请求中body的解析 

const app = express();
//创建一个路由容器
var router = express.Router();
//配置bodyparse 固定写法
app.use(bodyParser.json());//处理jsons数据 用了解析前端发送的json数据
app.use(bodyParser.urlencoded({extended: true}));//处理表单数据

//日志中间件
app.use(async(req,res,next) => {

    //可以针对登录进行拦截，如果是登录不拦截，非则进行拦截
    if(!req.originalUrl.includes("/login")){
        console.log("该拦截了")
    }else{
        console.log("我是登录按钮，不要拦截我，")
        await next()
    }

    // console.log(req,res)
    console.log("中间件开始")
    console.log(`${req.method} ${req.originalUrl}`)
    console.log(req.query.content);
    if(req.query.content) {
        req.query.content = req.query.content.replace("色情","**");
        res.send(req.query.content)
    }
    await next();
    console.log("中间件结束")
});

//定义get接口
app.get("/",(req,res) => { //req,res 为固定写法 req请求 res 相应
    //返回字符串给浏览器
    res.send("hello world");//res.json各种
})

app.get("/json",(req,res) => {
    console.log(req.query)
    const obj = { name: "zhagnsan", code: 2000}
    res.send(obj)
});
//路由的方式
router.get("/api/getList", (req,res) => {
    console.log("接口请求 api/getList 开始")
    res.status(200).send("list");
});
//添加路由
app.use("/", router);



//post put delete 参数json formdate 
app.listen(3000,() => {
    console.log("服务已启动，part 3000")
})