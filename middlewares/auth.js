const jwt = require("jsonwebtoken");
const { User } = require("../services/schemas");
const { SECRET } = require("../constants");
// const { unauthorizedErrorResponse } = require("../helpers");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    return res.status(401).json({
      Status: "401 Unauthorized",
      "Content-Type": "application/json",
      ResponseBody: {
        message: "Not authorized",
      },
    });
  }

  try {
    const { id } = jwt.verify(token, SECRET);

    const user = await User.findById(id);
    if (!user) {
      console.log("test2");
      return res.status(401).json({
        Status: "401 Unauthorized",
        "Content-Type": "application/json",
        ResponseBody: {
          message: "Not authorized",
        },
      });
    }
    next();
  } catch {
    res.status(401).json({
      Status: "401 Unauthorized",
      "Content-Type": "application/json",
      ResponseBody: {
        message: "Not authorized",
      },
    });
  }
};
module.exports = { auth };
