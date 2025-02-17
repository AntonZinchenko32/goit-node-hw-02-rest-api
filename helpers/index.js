const { updateContact } = require("../services");
const { transporter, emailOptionsBuilder } = require("../utils");

const validationError = (error, res) =>
  res.status(400).json({
    message: error.message,
  });
const notFound = (res) =>
  res.status(404).json({
    message: "Not found",
  });

const notAthorized = (res) =>
  res.status(401).json({
    message: "Not authorized",
  });
const wrongEmailOrPassword = (res) =>
  res.status(401).json({
    message: "Email or password is wrong",
  });

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
    validationError(e, res);
  }
};

const updateContactFields = async (id, body, res) => {
  try {
    const updatedContact = await updateContact(id, body);
    if (updatedContact) return res.status(200).json(updatedContact);
    notFound(res);
  } catch (e) {
    validationError(e, res);
  }
};

const sendMailWithErrorHandle = (email, verificationToken) =>
  transporter
    .sendMail(emailOptionsBuilder(email, verificationToken))
    .then((info) => console.log(info))
    .catch((err) => console.log(err));

module.exports = {
  notFound,
  updateContactFields,
  errorWrapper,
  errorWrapperWithIdCheck,
  validationError,
  notAthorized,
  wrongEmailOrPassword,
  sendMailWithErrorHandle,
};
