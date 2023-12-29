const { transporter, emailOptionsBuilder } = require("../../utils");

const mailSendProcess = async (email, verificationToken) => {
  await transporter.sendMail(emailOptionsBuilder(email, verificationToken));
};

module.exports = {
  mailSendProcess,
};
