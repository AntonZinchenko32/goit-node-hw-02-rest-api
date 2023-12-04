const Joi = require("joi");

const joiForPosting = Joi.object({
  name: Joi.required(),
  email: Joi.required(),
  phone: Joi.required(),
});

const joiForPuting = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.alternatives().try(Joi.string(), Joi.number()),
}).or("name", "email", "phone", "favorite");

const joiForPatching = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  joiForPosting,
  joiForPuting,
  joiForPatching,
};
