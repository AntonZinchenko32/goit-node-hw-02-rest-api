const nodemailer = require("nodemailer");
const { HOST_URL, PORT } = require("../constants");

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "zentik@meta.ua",
    pass: "Kamakura1192",
  },
};

const emailOptionsBuilder = (recipient, token) => {
  return {
    from: "zentik@meta.ua",
    to: recipient,
    subject: "Verification",
    text: `Please follow this link http://${HOST_URL}:${PORT}/users/verify/${token} to verify your mailbox`,
  };
};

const transporter = nodemailer.createTransport(config);

module.exports = { transporter, emailOptionsBuilder };
