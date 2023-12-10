const { removeContact } = require("../../services");

const { notFound } = require("../../helpers");

const remove = async (req, res) => {
  const { id } = req.params;

  const contactFound = await removeContact(id);

  if (contactFound)
    return res.status(200).json({
      message: "contact deleted",
    });

  notFound(res);
};

module.exports = { remove };
