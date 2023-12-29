// const { mailSendProcess } = require("./sendMail");
const { transporter, emailOptionsBuilder } = require("./nodemailer");

module.exports = { transporter, emailOptionsBuilder };
