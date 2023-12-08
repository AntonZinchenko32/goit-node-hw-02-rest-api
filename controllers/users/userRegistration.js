// const { joiForUserReg } = require("../../service/schemas");
// const { createUser } = require("../../service");

const regUser = async (req, res, next) => {
  res.status(404).json({
    status: 404,
    test: "test12",
  });
  // const { error, value } = joiForUserReg.validate(req.body);
  // if (error)
  //   return res.status(400).json({
  //     Status: "400 Bad Request",
  //     ContentType: "application/json",
  //     ResponseBody: error,
  //   });
  // else await createUser(value);
};

module.exports = { regUser };
