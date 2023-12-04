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
const { errorWrapper, errorWrapperWithIdCheck } = require("../../helpers");

router.get("/", errorWrapper(get));

router.get("/:id", errorWrapperWithIdCheck(getById));

router.post("/", errorWrapper(create));

router.delete("/:id", errorWrapperWithIdCheck(remove));

router.put("/:id", update);

router.patch("/:id/favorite", updateStatus);

module.exports = router;
