const express = require("express");
const router = express.Router();
const {
  getAll,
  postAll,
  getOne,
  updateData,
  deletaData,
} = require("../controller/tasks");

router.route("/").get(getAll).post(postAll);
router.route("/:id").get(getOne).patch(updateData).delete(deletaData);

module.exports = router;
