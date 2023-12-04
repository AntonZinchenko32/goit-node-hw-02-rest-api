const {
  joiForPosting,
  joiForPuting,
  joiForPatching,
} = require("../service/schemas/schema-joi");

const {
  notFoundResponse,
  invalidIdErrorResponse,
  updateContactFields,
} = require("./helpers");

const {
  getAllcontacts,
  getContactById,
  removeContact,
  createContact,
} = require("../service");

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
    else notFoundResponse(res);
  } catch (e) {
    invalidIdErrorResponse(e, res);
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
    } else notFoundResponse(res);
  } catch (e) {
    invalidIdErrorResponse(e, res);
  }
};

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

const update = async (req, res) => {
  const { error, value } = joiForPuting.validate(req.body);
  const { id } = req.params;
  if (error)
    res.status(400).json({
      status: 400,
      message: "missing fields",
    });
  else updateContactFields(id, value, res);
};

const updateStatus = async (req, res) => {
  const { error, value } = joiForPatching.validate(req.body);
  const { id } = req.params;
  if (error)
    res.status(400).json({
      status: 400,
      message: "missing field favorite",
    });
  else updateContactFields(id, value, res);
};

module.exports = {
  get,
  getById,
  remove,
  create,
  update,
  updateStatus,
};
