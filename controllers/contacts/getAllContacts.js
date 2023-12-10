const { getAllContacts } = require("../../services");

const get = async (req, res, next) => {
  const data = await getAllContacts();
  res.json(data);
};
module.exports = { get };
