const { findUserByFieldName, updateUser } = require("../../services");

const verifyUser = async (req, res) => {
  const { verificationToken } = req.params;

  const userFound = await findUserByFieldName(verificationToken);
  if (!userFound)
    return res.status(404).json({
      message: "User not found",
    });
  await updateUser(userFound._id, { verificationToken: null, verify: true });
  res.status(200).json({ message: "Verification successful" });
};
module.exports = { verifyUser };
