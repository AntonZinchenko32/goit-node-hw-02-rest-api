const { transporter, emailOptionsBuilder } = require("./nodemailer");

const mailSendProcess = async (email, verificationToken) => {
  await transporter.sendMail(emailOptionsBuilder(email, verificationToken));
};

module.exports = {
  mailSendProcess,
};
