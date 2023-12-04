const {
  joiForPuting,
  joiForPatching,
} = require("../../service/schemas/schema-joi");
const { updateContactFields } = require("../../helpers");

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

module.exports = { update, updateStatus };
