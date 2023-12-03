// const { nanoid } = require("nanoid");

// const validationSchema = require("../service/schemas");
// const helpers = require("./helpers");

// const { Parcer, fileReader, fileWriter, handleContactUpdate } = helpers;

const service = require("../service");
const { getAllcontacts, getContactById, removeContact } = service;

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

const getById = async (req, res, next) => {
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
    console.error(e);
    next(e);
  }
};

const remove = async (req, res, next) => {
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
    console.error(e);
    next(e);
  }
};

// const addContact = async (req, res) => {
// const { error, value } = forPosting.validate(req.body);
// const data = await fileReader(contactsPath);

// if (error)
//   res.status(400).json({
//     status: 400,
//     message: "missing required name field",
//   });
// else {
//   const newContact = {
//     id: nanoid(),
//     ...value,
//   };
//   const updatedArr = [...Parcer(data), newContact];
//   await fileWriter(contactsPath, JSON.stringify(updatedArr));
//   res.status(201).json({
//     status: 201,
//     newContact,
//   });
// }

//   const data = await service.createContact(req.body);
//   res.status(201).json({
//     status: 201,
//     data,
//   });
// };

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
  // addContact,
  // updateContact,
};
