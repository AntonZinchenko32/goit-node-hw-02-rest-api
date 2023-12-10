const { getAllContacts } = require("../../services");

const get = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await getAllContacts({ owner });
  res.json(data);
};
module.exports = { get };
