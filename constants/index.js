const {
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
  SECRET,
} = require("./env");
const { TEMP_UPLOAD_DIR } = require("./common");

module.exports = {
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
  SECRET,
  TEMP_UPLOAD_DIR,
};
