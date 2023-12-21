const { regUser } = require("./userRegistration");
const { logUser } = require("./userLogIn");
const { logOutUser } = require("./userLogOut");
const { getUser } = require("./userGetCurrent");
const { verifyUser } = require("./userVerify");

module.exports = { regUser, logUser, logOutUser, getUser, verifyUser };
