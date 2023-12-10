const express = require("express");
const router = express.Router();
const {
  regUser,
  logUser,
  logOutUser,
  getUser,
} = require("../../controllers/users");
const { errorWrapper } = require("../../helpers");
const { auth } = require("../../middlewares");

router.post("/register", errorWrapper(regUser));
router.post("/login", errorWrapper(logUser));
router.post("/logout", auth, errorWrapper(logOutUser));
router.get("/current", auth, errorWrapper(getUser));

module.exports = router;
