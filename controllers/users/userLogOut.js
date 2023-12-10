const { updateUser } = require("../../services");
const { notAthorized } = require("../../helpers");
const { User } = require("../../services/schemas");

const logOutUser = async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) return notAthorized(res);

  await updateUser(req.user._id, { token: null });

  res.status(204).json({
    Status: "204 No Content",
  });
};
module.exports = { logOutUser };
