const { Contact, User } = require("./schemas");

const getAllContacts = () => {
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
const findUserByEmail = (email) => {
  return User.findOne({ email: email });
};
const createUser = (body) => {
  return User.create(body);
};
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
  findUserByEmail,
  createUser,
};
