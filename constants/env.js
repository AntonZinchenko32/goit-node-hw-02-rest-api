const dotenv = require("dotenv");

dotenv.config();

const {
  HOST_URL,
  PORT,
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
  SECRET,
  NODEMAILER_CONFIG_PASSWORD,
} = process.env;

if (!DB_MONGO_HOST) {
  console.log("DB_MONGO_HOST is not set");
  process.exit(1);
}
if (!DB_MONGO_USER) {
  console.log("DB_MONGO_USER is not set");
  process.exit(1);
}
if (!DB_MONGO_PASSWORD) {
  console.log("DB_MONGO_PASSWORD is not set");
  process.exit(1);
}
if (!DB_MONGO_DATABASE) {
  console.log("DB_MONGO_DATABASE is not set");
  process.exit(1);
}
if (!SECRET) {
  console.log("SECRET is not set");
  process.exit(1);
}
if (!HOST_URL) {
  console.log("HOST_URL is not set");
  process.exit(1);
}
if (!PORT) {
  console.log("PORT is not set");
  process.exit(1);
}
if (!NODEMAILER_CONFIG_PASSWORD) {
  console.log("NODEMAILER_CONFIG_PASSWORD is not set");
  process.exit(1);
}

module.exports = {
  HOST_URL,
  PORT,
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
  SECRET,
  NODEMAILER_CONFIG_PASSWORD,
};
