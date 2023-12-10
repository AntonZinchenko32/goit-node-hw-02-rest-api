const { removeContact } = require("../../services");

const { notFound } = require("../../helpers");

const remove = async (req, res) => {
  const { id } = req.params;

  const contactFound = await removeContact(id);

  if (contactFound) {
    res.json({
      status: 200,
      message: "contact deleted",
    });
  } else notFound(res);
};

module.exports = { remove };
