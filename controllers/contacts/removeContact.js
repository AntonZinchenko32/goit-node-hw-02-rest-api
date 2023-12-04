const { removeContact } = require("../../service");
const { notFoundResponse } = require("../../helpers");

const remove = async (req, res) => {
  const { id } = req.params;

  const contactFound = await removeContact(id);

  if (contactFound) {
    res.json({
      status: 200,
      message: "contact deleted",
    });
  } else notFoundResponse(res);
};

module.exports = { remove };
