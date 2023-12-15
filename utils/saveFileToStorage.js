const fs = require("fs/promises");
const path = require("path");
const { UPLOAD_DIR } = require("../constants");

const saveFileToStorage = async (file) => {
  const fileBuffer = await fs.readFile(file.path);
  const newPathName = path.join(UPLOAD_DIR, file.filename);
  await fs.writeFile(newPathName, fileBuffer);
  await fs.unlink(file.path);
  return "http://localhost:3000/uploads/" + file.filename;
};
module.exports = { saveFileToStorage };
