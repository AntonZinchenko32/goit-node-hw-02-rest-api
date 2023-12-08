const express = require("express");
const router = express.Router();
const { regUser } = require("../../controllers/users");
const { errorWrapper } = require("../../helpers");

router.post("/register", errorWrapper(regUser));

module.exports = router;
