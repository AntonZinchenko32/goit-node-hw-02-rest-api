const { joiForUserRegLog } = require("../../services/schemas");
const { findUserByEmail, updateUser } = require("../../services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../../constants");
const {
  validationErrorResponse,
  emailOrPasswordWrongError,
} = require("../../helpers");

const logUser = async (req, res) => {
  const { error, value } = joiForUserRegLog.validate(req.body);
  if (error) validationErrorResponse(error, res);

  const userFound = await findUserByEmail(value.email);
  if (!userFound) emailOrPasswordWrongError(res);

  const arePasswordEqual = await bcrypt.compare(
    value.password,
    userFound.password
  );
  if (!arePasswordEqual) emailOrPasswordWrongError(res);

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
