const { regUser } = require("./userRegistration");
const { logUser } = require("./userLogIn");
const { logOutUser } = require("./userLogOut");
const { getUser } = require("./userGetCurrent");

module.exports = { regUser, logUser, logOutUser, getUser };
