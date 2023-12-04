const express = require("express");

const router = express.Router();

const { get } = require("../../controllers/contacts/getAllContacts");
const { getById } = require("../../controllers/contacts/getContactById");
const { remove } = require("../../controllers/contacts/removeContact");
const { create } = require("../../controllers/contacts/addContact");
const { update } = require("../../controllers/contacts/updateContact");
const { updateStatus } = require("../../controllers/contacts/updateContact");

router.get("/", get);

router.get("/:id", getById);

router.post("/", create);

router.delete("/:id", remove);

router.put("/:id", update);

router.patch("/:id/favorite", updateStatus);

module.exports = router;
