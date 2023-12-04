const { joiForPosting } = require("../../service/schemas");
const { createContact } = require("../../service");

const create = async (req, res, next) => {
  const { error, value } = joiForPosting.validate(req.body);

  if (error)
    res.status(400).json({
      status: 400,
      message: "missing required name field",
    });
  else {
    try {
      const newContact = await createContact(value);
      res.status(201).json({
        status: 201,
        newContact,
      });
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
};

module.exports = { create };
