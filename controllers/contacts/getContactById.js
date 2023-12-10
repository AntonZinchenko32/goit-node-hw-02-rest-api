const { notFound } = require("../../helpers");

const { getContactById } = require("../../services");

const getById = async (req, res) => {
  const { id } = req.params;
  const contactFound = await getContactById(id);

  if (contactFound)
    res.json({
      status: 200,
      contactFound,
    });
  else notFound(res);
};
module.exports = { getById };
