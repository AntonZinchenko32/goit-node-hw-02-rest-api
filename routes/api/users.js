const express = require("express");
const router = express.Router();
const { regUser, logUser } = require("../../controllers/users");
const { errorWrapper } = require("../../helpers");

router.post("/register", errorWrapper(regUser));
router.post("/login", errorWrapper(logUser));

module.exports = router;
