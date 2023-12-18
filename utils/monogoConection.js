const mongoose = require("mongoose");

const {
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
} = require("../constants");

mongoose.Promise = global.Promise;

const connection = mongoose.connect(
  `mongodb+srv://${DB_MONGO_USER}:${DB_MONGO_PASSWORD}@${DB_MONGO_HOST}/${DB_MONGO_DATABASE}`
);

const mongoConection = async () => {
  await connection
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log(`Database connection failed. Error message: ${err.message}`);
      process.exit(1);
    });
};
module.exports = { mongoConection };
