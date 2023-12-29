const nodemailer = require("nodemailer");
const { HOST_URL, PORT, NODEMAILER_CONFIG_PASSWORD } = require("../constants");

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "zentik@meta.ua",
    pass: NODEMAILER_CONFIG_PASSWORD,
  },
};

const emailOptionsBuilder = (recipient, token) => {
  return {
    from: "zentik@meta.ua",
    to: recipient,
    subject: "Verification",
    text: `To verify your email, please follow this link - http://${HOST_URL}:${PORT}/users/verify/${token}`,
  };
};

const transporter = nodemailer.createTransport(config);

module.exports = { transporter, emailOptionsBuilder };
