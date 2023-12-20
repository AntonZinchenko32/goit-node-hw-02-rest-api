const nodemailer = require("nodemailer");

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "zentik@meta.ua",
    pass: "Kamakura1192",
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: "zentik@meta.ua",
  to: "lenapst@gmail.com",
  subject: "Verification letter",
  text: "Please follow the link to verify your mailbox",
};

module.exports = { transporter, emailOptions };
