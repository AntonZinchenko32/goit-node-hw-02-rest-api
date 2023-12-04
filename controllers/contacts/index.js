const { get } = require("./getAllContacts");
const { getById } = require("./getContactById");
const { remove } = require("./removeContact");
const { create } = require("./addContact");
const { update } = require("./updateContact");
const { updateStatus } = require("./updateContact");

module.exports = { get, getById, remove, create, update, updateStatus };
