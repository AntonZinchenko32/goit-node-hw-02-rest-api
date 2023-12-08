const {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserReg,
} = require("./validation-joi");
const Contact = require("./contact");
const User = require("./user");

module.exports = {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserReg,
  Contact,
  User,
};
