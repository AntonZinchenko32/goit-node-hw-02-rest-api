const validationSchema = require("../service/schemas/schema-joi");
// const helpers = require("./helpers");

// const { Parcer, fileReader, fileWriter, handleContactUpdate } = helpers;

const service = require("../service");
const { forPosting } = validationSchema;
const { getAllcontacts, getContactById, removeContact, createContact } =
  service;

const get = async (req, res, next) => {
  try {
    const data = await getAllcontacts();
    res.json({
      status: 200,
      data,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const contactFound = await getContactById(id);

    if (contactFound)
      res.json({
        status: 200,
        contactFound,
      });
    else
      res.status(404).json({
        status: 404,
        message: "Not found",
      });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const contactFound = await removeContact(id);

    if (contactFound) {
      res.json({
        status: 200,
        message: "contact deleted",
      });
    } else
      res.status(404).json({
        status: 404,
        message: "Not found",
      });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const create = async (req, res, next) => {
  const { error, value } = forPosting.validate(req.body);

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

// const updateContact = async (req, res) => {
//   const { error, value } = forPuting.validate(req.body);

//   if (error)
//     res.status(400).json({
//       status: 400,
//       message: "missing fields",
//     });
//   else {
//     const updatedContact = await handleContactUpdate(req, contactsPath, value);

//     if (updatedContact)
//       res.json({
//         status: 200,
//         updatedContact,
//       });
//     else
//       res.status(404).json({
//         status: 404,
//         message: "Not found",
//       });
//   }
// };

module.exports = {
  get,
  getById,
  remove,
  create,
  // updateContact,
};
