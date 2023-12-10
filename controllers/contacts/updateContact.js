const { joiForPuting, joiForPatching } = require("../../services/schemas");
const { updateContactFields } = require("../../helpers");

const update = async (req, res) => {
  const { error, value } = joiForPuting.validate(req.body);
  const { id } = req.params;
  if (error)
    return res.status(400).json({
      message: "missing fields",
    });
  updateContactFields(id, value, res);
};

const updateStatus = async (req, res) => {
  const { error, value } = joiForPatching.validate(req.body);
  const { id } = req.params;
  if (error)
    return res.status(400).json({
      message: "missing field favorite",
    });
  updateContactFields(id, value, res);
};

module.exports = { update, updateStatus };
