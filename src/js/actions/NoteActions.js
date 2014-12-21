var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

var NoteActions = {
  addNote: function(note){
    AppDispatcher.handleAction({
      actionType: UserConstants.ADD_NOTE,
      data: note
    });
  },
  setUserRef: function(username){
    AppDispatcher.handleAction({
      actionType: UserConstants.SET_USER_REF,
      data: username
    });
  }
};

module.exports = NoteActions;