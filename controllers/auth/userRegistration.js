const { nanoid } = require("nanoid");
const { joiForUserRegLog } = require("../../services/schemas");
const { findUserByEmail, createUser } = require("../../services");
const bcrypt = require("bcrypt");
const { validationError, sendMailWithErrorHandle } = require("../../helpers");

const gravatar = require("gravatar");

const regUser = async (req, res) => {
  const { error, value } = joiForUserRegLog.validate(req.body);
  if (error) return validationError(error, res);

  const userFound = await findUserByEmail(value.email);

  if (userFound)
    return res.status(409).json({
      message: "Email in use",
    });

  const { password, ...rest } = value;
  const passwordHash = await bcrypt.hash(password, 10);
  const avatar = gravatar.url(
    value.email,
    { s: "180", r: "x", d: "retro" },
    true
  );
  const newUser = await createUser({
    ...rest,
    password: passwordHash,
    avatarURL: avatar,
    verificationToken: nanoid(),
  });
  const { email, subscription, verificationToken } = newUser;

  sendMailWithErrorHandle(email, verificationToken);

  res.status(201).json({
    user: {
      email,
      subscription,
    },
  });
};

module.exports = { regUser };
