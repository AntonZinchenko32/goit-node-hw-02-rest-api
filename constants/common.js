const path = require("path");

const TEMP_UPLOAD_DIR = path.join(process.cwd(), "temp");
const UPLOAD_DIR = path.join(process.cwd(), "public", "avatars");

module.exports = { TEMP_UPLOAD_DIR, UPLOAD_DIR };
