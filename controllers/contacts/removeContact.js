const { removeContact } = require("../../service");
const { notFoundResponse, invalidIdErrorResponse } = require("../../helpers");

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const contactFound = await removeContact(id);

    if (contactFound) {
      res.json({
        status: 200,
        message: "contact deleted",
      });
    } else notFoundResponse(res);
  } catch (e) {
    invalidIdErrorResponse(e, res);
  }
};

module.exports = { remove };
