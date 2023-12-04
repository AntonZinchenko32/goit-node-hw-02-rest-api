const { joiForPosting, joiForPuting, joiForPatching } = require("./schema-joi");
const Contact = require("./schema-mongoose");

module.exports = { joiForPosting, joiForPuting, joiForPatching, Contact };
