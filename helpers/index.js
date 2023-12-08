const { updateContact } = require("../services");

const invalidIdErrorResponse = (error, res) => {
  res.status(400).json({
    status: 400,
    message: error.message,
  });
};

const errorWrapper = (func) => async (req, res, next) => {
  try {
    await func(req, res);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
const errorWrapperWithIdCheck = (func) => async (req, res) => {
  try {
    await func(req, res);
  } catch (e) {
    invalidIdErrorResponse(e, res);
  }
};

const notFoundResponse = (res) =>
  res.status(404).json({
    status: 404,
    message: "Not found",
  });

const updateContactFields = async (id, body, res) => {
  try {
    const updatedContact = await updateContact(id, body);
    if (updatedContact)
      res.json({
        status: 200,
        updatedContact,
      });
    else notFoundResponse(res);
  } catch (e) {
    invalidIdErrorResponse(e, res);
  }
};

module.exports = {
  notFoundResponse,
  invalidIdErrorResponse,
  updateContactFields,
  errorWrapper,
  errorWrapperWithIdCheck,
};
