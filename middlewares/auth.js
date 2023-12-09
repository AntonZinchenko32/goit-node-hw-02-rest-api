const jwt = require("jsonwebtoken");
const { User } = require("../services/schemas");
const { SECRET } = require("../constants");
const { unauthorizedErrorResponse } = require("../helpers");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") unauthorizedErrorResponse(res);

  try {
    const { id } = jwt.verify(token, SECRET);

    const user = await User.findById(id);
    if (!user) unauthorizedErrorResponse(res);
    req.user = user;
    next();
  } catch {
    unauthorizedErrorResponse(res);
  }
};
module.exports = { auth };
