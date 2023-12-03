const express = require("express");

const router = express.Router();
const controllers = require("../../controllers");

const { get, getById, create, remove, update } = controllers;

router.get("/", get);

router.get("/:id", getById);

router.post("/", create);

router.delete("/:id", remove);

router.put("/:id", update);

module.exports = router;
