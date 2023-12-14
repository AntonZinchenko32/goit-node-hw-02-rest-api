const { regUser } = require("./userRegistration");
const { logUser } = require("./userLogIn");
const { logOutUser } = require("./userLogOut");
const { getUser } = require("./userGetCurrent");
const { uploadFile } = require("./userUploadFile");

module.exports = { regUser, logUser, logOutUser, getUser, uploadFile };
