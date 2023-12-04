const { updateContact } = require("../service");

const notFoundResponse = (res) =>
  res.status(404).json({
    status: 404,
    message: "Not found",
  });

const invalidIdErrorResponse = (error, res) => {
  res.status(400).json({
    status: 400,
    message: error.message,
  });
};

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
};
