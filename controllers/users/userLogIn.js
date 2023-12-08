const { joiForUserReg } = require("../../services/schemas");
const { findUserByEmail, updateUser } = require("../../services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../../constants");
const { validationErrorResponse } = require("../../helpers");

const logUser = async (req, res) => {
  const { error, value } = joiForUserReg.validate(req.body);
  validationErrorResponse(error, res);

  const userFound = await findUserByEmail(value.email);
  const { id, email, password, subscription } = userFound;
  const arePasswordEqual = await bcrypt.compare(value.password, password);

  if (!userFound || !arePasswordEqual)
    return res.status(401).json({
      Status: "401 Unauthorized",
      ResponseBody: {
        message: "Email or password is wrong",
      },
    });

  const payload = {
    id,
    email,
  };

  const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
  await updateUser(id, { token });

  res.status(200).json({
    Status: "200 OK",
    "Content-Type": "application/json",
    ResponseBody: {
      token,
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = { logUser };
