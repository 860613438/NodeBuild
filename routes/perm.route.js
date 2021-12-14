import express from "express";
const router = express.Router();
import logger from "../utils/logger";

import userCtrl from "../controllers/user.ctrl";

console.log(userCtrl.login)

export default function(app){
    logger.info("perm: ==== star",app)
    router.route("/app").get(userCtrl.login);

    //使用上面的路由 api是一个前缀 api是每个接口前添加的
    app.use("/", router)
}
