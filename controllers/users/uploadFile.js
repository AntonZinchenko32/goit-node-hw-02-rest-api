const { updateUser } = require("../../services");
const { saveFileToStorage } = require("../../utils");

const uploadFile = async (req, res, next) => {
  const id = req.user._id;
  const { body } = req;
  const avatarURL = await saveFileToStorage(req.file);
  const user = await updateUser(id, { ...body, avatarURL });

  res.status(200).json({
    user,
  });
};
module.exports = { uploadFile };
