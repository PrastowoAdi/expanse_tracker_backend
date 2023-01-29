const routes = require("express").Router();
const controller = require("../controller/controller");

routes
  .route("/api/categories")
  .post(controller.create_Categories)
  .get(controller.get_Categories);

routes
  .route("/api/transaction")
  .get(controller.get_Transaction)
  .post(controller.create_Transaction)
  .delete(controller.delete_Transaction);

routes.route("/api/labels").get(controller.get_Labels);
module.exports = routes;
