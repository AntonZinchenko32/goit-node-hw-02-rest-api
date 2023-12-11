const jwt = require("jsonwebtoken");
const { User } = require("../services/schemas");
const { SECRET } = require("../constants");
const { notAthorized } = require("../helpers");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) return notAthorized(res);

  try {
    const { id } = jwt.verify(token, SECRET);

    const user = await User.findById(id);
    if (!user) return notAthorized(res);

    req.user = user;
    next();
  } catch {
    notAthorized(res);
  }
};
module.exports = { auth };
