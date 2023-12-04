const Contact = require("./schemas/schema-mongoose");

const getAllcontacts = () => {
  return Contact.find();
};
const getContactById = (id) => {
  return Contact.findOne({ _id: id });
};
const createContact = (body) => {
  return Contact.create(body);
};
const updateContact = (id, fields) => {
  return Contact.findByIdAndUpdate({ _id: id }, fields, { new: true });
};
const removeContact = (id) => {
  return Contact.findByIdAndDelete({ _id: id });
};
module.exports = {
  getAllcontacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
};
