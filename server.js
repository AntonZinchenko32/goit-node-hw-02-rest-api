const app = require("./app");
const { mongoConection, createDirIfNotExist } = require("./utils");
const { TEMP_UPLOAD_DIR, UPLOAD_DIR } = require("./constants");

const PORT = process.env.PORT || 3000;

(async () => {
  await mongoConection();
  await createDirIfNotExist(TEMP_UPLOAD_DIR);
  await createDirIfNotExist(UPLOAD_DIR);
  app.listen(PORT, function () {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
})();
