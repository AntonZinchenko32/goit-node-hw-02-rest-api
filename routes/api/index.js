const express = require("express");

const router = express.Router();
const {
  get,
  getById,
  create,
  remove,
  update,
  updateStatus,
} = require("../../controllers");

router.get("/", get);

router.get("/:id", getById);

router.post("/", create);

router.delete("/:id", remove);

router.put("/:id", update);

router.patch("/:id/favorite", updateStatus);

module.exports = router;
