var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

var NoteActions = {
  addNote: function(note){
    AppDispatcher.handleAction({
      actionType: UserConstants.ADD_NOTE,
      data: note
    });
  }
};

module.exports = NoteActions;