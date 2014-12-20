var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

var searchActions = {
  getGithubInfo: function(username){
    AppDispatcher.handleAction({
      actionType: UserConstants.GITHUB_USER_INFO,
      data: username
    });
  }
};

module.exports = searchActions;