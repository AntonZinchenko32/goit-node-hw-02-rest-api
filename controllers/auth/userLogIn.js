const { joiForUserRegLog } = require("../../services/schemas");
const { findUserByEmail, updateUser } = require("../../services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../../constants");
const { validationError, wrongEmailOrPassword } = require("../../helpers");

const logUser = async (req, res) => {
  const { error, value } = joiForUserRegLog.validate(req.body);
  if (error) return validationError(error, res);

  const userFound = await findUserByEmail(value.email);
  if (!userFound) return wrongEmailOrPassword(res);
  if (!userFound.verify)
    return res.status(400).json({
      message: "Unverified user",
    });

  const arePasswordEqual = await bcrypt.compare(
    value.password,
    userFound.password
  );
  if (!arePasswordEqual) return wrongEmailOrPassword(res);

  const { id, email, subscription } = userFound;

  const token = jwt.sign({ id }, SECRET, { expiresIn: "1h" });
  await updateUser(id, { token });

  res.status(200).json({
    token,
    user: {
      email,
      subscription,
    },
  });
};

module.exports = { logUser };
