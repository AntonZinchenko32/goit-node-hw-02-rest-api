const { notFoundResponse, invalidIdErrorResponse } = require("../../helpers");
const { getContactById } = require("../../service");

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const contactFound = await getContactById(id);

    if (contactFound)
      res.json({
        status: 200,
        contactFound,
      });
    else notFoundResponse(res);
  } catch (e) {
    invalidIdErrorResponse(e, res);
  }
};
module.exports = { getById };
