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
const { auth } = require("../../middlewares");
const { errorWrapper, errorWrapperWithIdCheck } = require("../../helpers");

router.get("/", auth, errorWrapper(get));

router.get("/:id", auth, errorWrapperWithIdCheck(getById));

router.post("/", auth, errorWrapper(create));

router.delete("/:id", auth, errorWrapperWithIdCheck(remove));

router.put("/:id", auth, update);

router.patch("/:id/favorite", auth, updateStatus);

module.exports = router;
