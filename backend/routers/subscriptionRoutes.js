const express = require("express");

const router = express.Router();

const controller =
require("../controllers/subscriptionController");

router.get("/", controller.getAll);

router.post(
  "/",
  controller.addSubscription
);

module.exports = router;