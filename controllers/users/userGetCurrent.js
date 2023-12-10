const { unauthorizedErrorResponse } = require("../../helpers");

const getUser = (req, res) => {
  if (!req.user) unauthorizedErrorResponse(res);
  const { email, subscription } = req.user;
  res.status(200).json({
    Status: "200 OK",
    "Content-Type": "application/json",
    ResponseBody: {
      email,
      subscription,
    },
  });
};
module.exports = { getUser };
