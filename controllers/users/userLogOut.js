const { updateUser } = require("../../services");
const { unauthorizedErrorResponse } = require("../../helpers");
const { User } = require("../../services/schemas");

const logOutUser = async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findById(id);

  if (!user) unauthorizedErrorResponse(res);

  await updateUser(id, { token: null });

  res.status(204).json({
    Status: "204 No Content",
  });
};
module.exports = { logOutUser };
