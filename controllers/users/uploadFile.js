const { updateUser } = require("../../services");
const { saveFileToStorage } = require("../../utils");

const uploadFile = async (req, res) => {
  const id = req.user._id;
  // console.log(req.user);
  const { body } = req;
  const avatarURL = await saveFileToStorage(id, req.file);
  await updateUser(id, { ...body, avatarURL });

  res.status(200).json({
    avatarURL,
  });
};
module.exports = { uploadFile };
