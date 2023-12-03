const Joi = require("joi");

const joiForPosting = Joi.object({
  name: Joi.required(),
  email: Joi.required(),
  phone: Joi.required(),
  favorite: Joi.boolean(),
});

const joiForPuting = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.alternatives().try(Joi.string(), Joi.number()),
  favorite: Joi.boolean(),
}).or("name", "email", "phone", "favorite");

module.exports = {
  joiForPosting,
  joiForPuting,
};
