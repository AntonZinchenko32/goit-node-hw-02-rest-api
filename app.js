const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { contactsRouter, authRouter } = require("./routes/api");
const { UPLOAD_DIR } = require("./constants");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/avatars", express.static(UPLOAD_DIR));
app.use("/api/contacts", contactsRouter);
app.use("/users", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
