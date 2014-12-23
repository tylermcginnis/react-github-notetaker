var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
  user: '',
  bio: undefined,
  repos: undefined,
};

var newUser = function(username){
  _state.user = username;
};

var setBio = function(data){
  _state.bio = data;
};

var setRepos = function(data){
  _state.repos = data;
};

var GithubStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getUser: function(){
    return _state.user;
  },
  getBio: function(){
    return _state.bio;
  },
  getRepos: function(){
    return _state.repos;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case AppConstants.GITHUB_USER_BIO :
      setBio(action.data);
      GithubStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.GITHUB_USER_REPOS :
      setRepos(action.data);
      GithubStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.GITHUB_CHANGE_USER :
      newUser(action.data);
      GithubStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = GithubStore;