const { joiForUserReg } = require("../../services/schemas");
const { findUserByEmail, updateUser } = require("../../services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../../constants");
const { validationErrorResponse } = require("../../helpers");

const logUser = async (req, res) => {
  const { error, value } = joiForUserReg.validate(req.body);
  if (error) validationErrorResponse(error, res);

  const userFound = await findUserByEmail(value.email);
  const { id, email, password, subscription } = userFound;
  const arePasswordEqual = await bcrypt.compare(value.password, password);

  if (!userFound || !arePasswordEqual)
    return res.status(401).json({
      message: "Email or password is wrong",
    });

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
