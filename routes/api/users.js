const express = require("express");
const router = express.Router();
const { regUser } = require("../../controllers/users");

router.post("/register", regUser);

module.exports = router;
