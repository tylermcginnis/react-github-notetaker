var Firebase = require('firebase');
var UserConstants = require('../constants/UserConstants');

var firebaseUtils = {
  homeInstance: function(){
    return new Firebase(UserConstants.FIREBASE_HOST);
  }
};

module.exports = firebaseUtils;