const router = require("express").Router();
const controllers = require("./controllers.js");

router
  .route("/storage")
  .get(controllers.getItems)
  .post(controllers.postItems);

module.exports = router;
