var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var fbRef = require('../utils/FirebaseUtils.js').homeInstance();

var CHANGE_EVENT = 'change';

var _notes = [];

//child_added to anyone?
fbRef.on('child_added', function(snapshot){
  _notes.push(snapshot.val());
  UserStore.emitChange();
});

var addNote = function(noteObj){
  fbRef.child(noteObj.user).push(noteObj.note)
};


//Different stores for Github and Notes?
var UserStore = objectAssign({}, EventEmitter.prototype, {
  getGithubProfile: function(username){
    return 'THIS IS THE GITHUB PROFILE!'
  },
  getNotes: function(username){
    return _notes;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case UserConstants.GITHUB_USER_INFO :
      alert('Get Github User Info');
      UserStore.emit(CHANGE_EVENT);
      break;
    case UserConstants.ADD_NOTE :
      addNote(action.data);
      UserStore.emit(CHANGE_EVENT);
      break;
    default:
      return true
  };
  return true;
});

module.exports = UserStore;