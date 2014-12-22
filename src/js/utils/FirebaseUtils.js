var Firebase = require('firebase');
var UserConstants = require('../constants/UserConstants');
var NotesStore = require('../stores/NotesStore');

var firebaseUtils = {
  homeInstance: function(){
    return new Firebase(UserConstants.FIREBASE_HOST);
  },
  addNote: function(noteObj){
    this.homeInstance().child(noteObj.user).push(noteObj.note);
  },
  toArray: function(obj){
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
  }
};

module.exports = firebaseUtils;