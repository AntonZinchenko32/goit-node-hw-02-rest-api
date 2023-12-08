const { joiForPosting } = require("../../services/schemas");
const { createContact } = require("../../services");

const create = async (req, res, next) => {
  const { error, value } = joiForPosting.validate(req.body);

  if (error)
    res.status(400).json({
      status: 400,
      message: "missing required name field",
    });
  else {
    const newContact = await createContact(value);
    res.status(201).json({
      status: 201,
      newContact,
    });
  }
};

module.exports = { create };
