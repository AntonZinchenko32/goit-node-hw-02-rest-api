const { notFound } = require("../../helpers");

const { getContactById } = require("../../services");

const getById = async (req, res) => {
  const { id } = req.params;
  const contactFound = await getContactById(id);

  if (contactFound) return res.status(200).json(contactFound);

  notFound(res);
};
module.exports = { getById };
