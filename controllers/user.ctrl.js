
import logger from "../utils/logger"
const userCtrl = {
    login: function(req, res){
        logger.info("ctrl into")
        res.send("login inter")
    }
}

export default userCtrl