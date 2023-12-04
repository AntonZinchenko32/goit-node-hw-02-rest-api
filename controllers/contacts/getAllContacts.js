const { getAllContacts } = require("../../service");

const get = async (req, res, next) => {
  try {
    const data = await getAllContacts();
    res.json({
      status: 200,
      data,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
module.exports = { get };
