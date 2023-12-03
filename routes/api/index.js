const express = require("express");

const router = express.Router();
const controllers = require("../../controllers");

const {
  get,
  getById,
  // addContact,
  remove,
  // updateContact,
} = controllers;

router.get("/", get);

router.get("/:id", getById);

// router.post("/", addContact);

router.delete("/:id", remove);

// router.put("/:contactId", updateContact);

module.exports = router;
