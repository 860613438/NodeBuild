import express from "express";
const router = express.Router();

import userCtrl from "../controllers/user.ctrl";
import logger from "../utils/logger";

logger.info(userCtrl.login)

export default function(app){
    logger.info("login star: ====")
    router.route("/app/perm").get(userCtrl.login);
    // router.route("/user/query").get(userCtrl.login);
    // router.route("/api/getList").post();

    //使用上面的路由 api是一个前缀 api是每个接口前添加的
    app.use("/", router)
}
