var types = require('../constants/ActionTypes');

module.exports.addNew = function addNew(text) {
  return {
    type: types.ADD_NEW,
    text: text
  };
};

module.exports.deleteEvent = function deleteEvent(id) {
  return {
    type: types.DELETE_EVENT,
    id: id
  };
};

module.exports.editEvent = function editEvent(id, text) {
  return {
    type: types.EDIT_EVENT,
    id: id,
    text: text
  };
};
