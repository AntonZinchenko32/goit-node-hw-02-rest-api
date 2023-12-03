const app = require("./app");
const mongoose = require("mongoose");

const {
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
} = require("./constants/env");

const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

const connection = mongoose.connect(
  `mongodb+srv://${DB_MONGO_USER}:${DB_MONGO_PASSWORD}@${DB_MONGO_HOST}/${DB_MONGO_DATABASE}`
);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Database connection failed. Error message: ${err.message}`);
    process.exit(1);
  });
