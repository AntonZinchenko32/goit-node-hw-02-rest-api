const express = require("express");

const router = express.Router();

const {
  get,
  getById,
  remove,
  create,
  update,
  updateStatus,
} = require("../../controllers/contacts");

router.get("/", get);

router.get("/:id", getById);

router.post("/", create);

router.delete("/:id", remove);

router.put("/:id", update);

router.patch("/:id/favorite", updateStatus);

module.exports = router;
