var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var FirebaseUtils = require('../utils/FirebaseUtils');

var NoteActions = {
  addNote: function(noteObj){
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_NOTE,
      data: noteObj.note
    });
    FirebaseUtils.addNote(noteObj);
  },
  changeUser: function(username){
    //see http://stackoverflow.com/questions/25630611/should-flux-stores-or-actions-or-both-touch-external-services
    // upvoted answer about why I did below.
    //Basically I update async data in my action creator, get the new
    //data, then update the store so the pattern remians action -> dispatcher -> store
    //also on('value') returns the whole collection just once and then calls the cb every time it changes so dispathcher is only triggered once + whenever it changes
    FirebaseUtils.homeInstance().child(username).on('value', function(snapshot){
      AppDispatcher.handleAction({
        actionType: AppConstants.CHANGE_USER,
        data: {
          user: username,
          notes: FirebaseUtils.toArray(snapshot.val())
        }
      });
    });
  }
};

module.exports = NoteActions;