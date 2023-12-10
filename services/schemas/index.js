const {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserRegLog,
} = require("./validation-joi");
const Contact = require("./contact");
const User = require("./user");

module.exports = {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserRegLog,
  Contact,
  User,
};
