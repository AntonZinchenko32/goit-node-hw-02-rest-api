const {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserRegLog,
  joiForResendVerificLetter,
} = require("./validation-joi");
const Contact = require("./contact");
const User = require("./user");

module.exports = {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserRegLog,
  joiForResendVerificLetter,
  Contact,
  User,
};
