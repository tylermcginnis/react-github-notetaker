var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var GithubActions = {
  getGithubInfo: function(username){
    //call githubUtils which makes request, then...
    AppDispatcher.handleAction({
      actionType: AppConstants.GITHUB_USER_INFO,
      data: username
    });
  }
};

module.exports = GithubActions;