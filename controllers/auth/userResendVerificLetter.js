const { joiForResendVerificLetter } = require("../../services/schemas");
const { validationError, sendMailWithErrorHandle } = require("../../helpers");
const { findUserByEmail } = require("../../services");

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

  sendMailWithErrorHandle(email, verificationToken);

  res.status(200).json({
    message: "Verification email sent",
  });
};
module.exports = { resendVerificLetter };
