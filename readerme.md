## 什么是node express koa
node是js的后端的一个运行环境

## 前端和后端的交互方式
1、http ajax get post delete put 短连
2、socket 长连

## 交互方式
--短连接 ajax axios
    后端不能主动发消息
    前端不断轮询（解决方案）性能较差
    前端发请求，后端才会回应
--长链接 websocket
    全双工，前端和后端建立连接后，一直维持连接

## 

## 怎么启动node服务

-- npm init -y 创建paject.json文件
--安装依赖包
-- npm i -S express body-parse 
    express： 基于node的一个web框架
    body-parser： 用于http请求中body的解析

## 停止服务是ctrl+c 重启是node ******.js

## 路由
--web框架都有路由  mvc[开发模式  M module模型 V view 视图  C controller 控制器]
  express+jade -- 前端模板 用于展示数据  类似于vue template
  可以不同的请求地址router。get
  在项目中可以将接口抽离分装
## 中间件
-- 作用：拦截
-- 实现原理 拦截器 
--中间件一定要放到最上面

--发送请求

## 过滤词汇
--日志请求中间件，可以记录请求的地址，方法和时间等
--色情词汇过滤中间件，可以过滤内容中不当的词汇


## 第二课时node 封装

## Node启动服务 node xx.js
    --问题： 信贷 用户接口。信贷借款，合同接口****太杂太乱
    --解决方案：框架思想[1、启动的入口 2、框架（导出框架模块）]
        --
    --cofnig
     --express.js 框架 
    --serve.js 
    node server.js[√]
    
## 导出模块方式
vue export 
es6 export import 
node module.exports  require
把业务框架模块化 ，最大服用

## 问题
按一下方式模块化重构
const express = require("./config/express");
const server = express();
端口无法配置{弊端} 但可以显示的传参
希望能报暴露app.listen  可以通过promise方式

## vue 请求不变化的数据  固定列表
 axios ---> server
 axios ---> vuex ----> server 通过使用promise方式封装
 vuex:
 return new Promise((resolv,reject) => {
     //请求拿到的数据先存入vuex 
     resolve(data)//返回前端
 });
 前端直接读取vuex数据

 ## 支持es6   
 babel-cli  babel-node
 按照依赖
 npm i -S babel-cli babel-preset-env babel-plugin-add-module-exports

 测试是否安装成功
 npx babel-node  (x=>x*2)(2)

 ## 执行过程
 项目启动zou npm run start [project.json] 然后通过走.babelrc装载对应插件 去解析server.js模块

 ## 跨域
 cors 后端处理
 nginx 中间代理
 webpack proxy 中间代理 仅限开发使用，打包后无效
 跨域的多种方式

 ##框架日志
 --日志非常重要，运维、调试

 npm i - S winston

 ## corss-env 
 在不改动代码的情况下，配置接口
 npm i -S cross-env

 [project.json]
 "scripts": {
    "star": "cross-env part=4000 babel-node server.js"
  },
在项目其中中配置参数 /config/server.js 配置文件通过系统内置变了process.env.PART 其中配置参数不区分大小写

