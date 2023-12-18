const path = require("path");
const { UPLOAD_DIR } = require("../constants");
const Jimp = require("jimp");
const { HOST_URL, PORT } = require("../constants");

const saveFileToStorage = async (userId, file) => {
  let newPathName;
  let newFileName;

  await Jimp.read(file.path)
    .then(async (image) => {
      newFileName = `user-avatar-with-id-${String(
        userId
      )}.${image.getExtension()}`;
      newPathName = path.join(UPLOAD_DIR, newFileName);
      image.resize(250, 250);
      await image.writeAsync(newPathName);
    })
    .catch((err) => {
      console.log(err.message);
    });
  return `http://${HOST_URL}:${PORT}/avatars/${newFileName}`;
};
module.exports = { saveFileToStorage };
