const fs = require("fs/promises");

const createDirIfNotExist = async (url) => {
  try {
    await fs.access(url);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(url);
    }
  }
};

module.exports = { createDirIfNotExist };
