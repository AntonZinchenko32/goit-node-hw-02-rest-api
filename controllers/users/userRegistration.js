const { joiForUserReg } = require("../../service/schemas");
const { findUserByEmail, createUser } = require("../../service");
const bcrypt = require("bcrypt");

const regUser = async (req, res) => {
  const { error, value } = joiForUserReg.validate(req.body);
  if (error)
    return res.status(400).json({
      Status: "400 Bad Request",
      "Content-Type": "application/json",
      ResponseBody: error.message,
    });
  const userFound = await findUserByEmail(value.email);
  if (userFound)
    return res.status(409).json({
      Status: "409 Conflict",
      "Content-Type": "application/json",
      ResponseBody: {
        message: "Email in use",
      },
    });
  const { password, ...rest } = value;
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await createUser({ ...rest, password: passwordHash });

  res.status(201).json({
    Status: "201 Created",
    "Content-Type": "application/json",
    ResponseBody: {
      user: newUser,
    },
  });
};

module.exports = { regUser };
