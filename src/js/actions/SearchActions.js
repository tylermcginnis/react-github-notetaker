var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

var searchActions = {
  getGithubInfo: function(username){
    AppDispatcher.handleAction({
      actionType: ActionConstants.GITHUB_USER_INFO,
      data: username
    });
  }
};

module.exports = searchActions;