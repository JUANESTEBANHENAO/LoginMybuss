const express = require("express");
const authController = require("../controllers/auth-controller");
const validatorAuth = require("../middleware/authD-validatos");
const router = express.Router();

router.post(
  "/",
  validatorAuth.validatorParams,
  validatorAuth.validator,
  authController.authDriver
);

module.exports = router;
