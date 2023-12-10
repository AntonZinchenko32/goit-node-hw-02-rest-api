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

const joiForUserRegLog = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
  subscription: Joi.any(),
  token: Joi.any(),
});

module.exports = {
  joiForPosting,
  joiForPuting,
  joiForPatching,
  joiForUserRegLog,
};
