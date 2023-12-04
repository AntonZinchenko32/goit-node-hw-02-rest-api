const { notFoundResponse } = require("../../helpers");
const { getContactById } = require("../../service");

const getById = async (req, res) => {
  const { id } = req.params;
  const contactFound = await getContactById(id);

  if (contactFound)
    res.json({
      status: 200,
      contactFound,
    });
  else notFoundResponse(res);
};
module.exports = { getById };
