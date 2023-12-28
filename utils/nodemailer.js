const nodemailer = require("nodemailer");
const { HOST_URL, PORT, NODEMAILER_CONFIG_PASSWORD } = require("../constants");

const config = {
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "zinchenko309@gmail.com",
    pass: NODEMAILER_CONFIG_PASSWORD,
  },
};

const emailOptionsBuilder = (recipient, token) => {
  return {
    from: "zinchenko309@gmail.com",
    to: recipient,
    subject: "Verification",
    text: `To verify your email, please follow this link - http://${HOST_URL}:${PORT}/users/verify/${token}`,
  };
};

const transporter = nodemailer.createTransport(config);

module.exports = { transporter, emailOptionsBuilder };
