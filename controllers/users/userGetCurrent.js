const { notAthorized } = require("../../helpers");

const getUser = (req, res) => {
  if (!req.user) return notAthorized(res);
  const { email, subscription } = req.user;
  res.status(200).json({
    email,
    subscription,
  });
};
module.exports = { getUser };
