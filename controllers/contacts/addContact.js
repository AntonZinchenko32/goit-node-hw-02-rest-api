const { joiForPosting } = require("../../services/schemas");
const { createContact } = require("../../services");

const create = async (req, res, next) => {
  const { error, value } = joiForPosting.validate(req.body);
  const { _id: owner } = req.user;
  if (error)
    return res.status(400).json({
      message: "missing required name field",
    });
  const newContact = await createContact({ ...value, owner });
  res.status(201).json(newContact);
};

module.exports = { create };
