const { updateUser } = require("../../services");

const uploadFile = async (req, res, next) => {
  const id = req.user._id;
  const { body } = req;
  console.log(req.file);
  const user = await updateUser(id, body);

  res.status(200).json({
    user,
  });
};
module.exports = { uploadFile };
