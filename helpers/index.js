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

const validationErrorResponse = (error, res) => {
  const { message } = error;
  if (error)
    return res.status(400).json({
      message,
    });
};
const unauthorizedErrorResponse = (res) =>
  res.status(401).json({
    message: "Not authorized",
  });
const emailOrPasswordWrongError = (res) =>
  res.status(401).json({
    message: "Email or password is wrong",
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
  validationErrorResponse,
  unauthorizedErrorResponse,
  emailOrPasswordWrongError,
};
