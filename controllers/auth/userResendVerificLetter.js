const { joiForResendVerificLetter } = require("../../services/schemas");
const { validationError } = require("../../helpers");
const { findUserByEmail } = require("../../services");
const { transporter, emailOptionsBuilder } = require("../../services/email");

const resendVerificLetter = async (req, res) => {
  const { error, value } = joiForResendVerificLetter.validate(req.body);
  if (error) return validationError(error, res);

  const userFound = await findUserByEmail(value.email);
  if (!userFound)
    return res.status(404).json({
      message: "No user with this email address found",
    });

  const { verify, email, verificationToken } = userFound;

  if (verify)
    return res.status(400).json({
      message: "Verification has already been passed",
    });

  try {
    await transporter.sendMail(emailOptionsBuilder(email, verificationToken));
    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    console.log(error.message);
    res.status(error.responseCode).json({
      error,
    });
  }
};
module.exports = { resendVerificLetter };
