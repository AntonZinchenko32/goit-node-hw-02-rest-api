const { getAllContacts } = require("../../service");

const get = async (req, res, next) => {
  const data = await getAllContacts();
  res.json({
    status: 200,
    data,
  });
};
module.exports = { get };
