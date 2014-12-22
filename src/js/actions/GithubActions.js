var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var GithubUtils = require('../utils/GithubUtils');

var GithubActions = {
  getUserBio: function(username){
    GithubUtils.getBio(username)
      .then(function(response){
        AppDispatcher.handleAction({
            actionType: AppConstants.GITHUB_USER_BIO,
            data: response.data
        });
      });
  },
  getUserRepos: function(username){
    GithubUtils.getRepos(username)
      .then(function(response){
        AppDispatcher.handleAction({
            actionType: AppConstants.GITHUB_USER_REPOS,
            data: response.data
        });
      });
  },
  changeUser: function(username){
    AppDispatcher.handleAction({
        actionType: AppConstants.GITHUB_CHANGE_USER,
        data: username
    });
  }
};

module.exports = GithubActions;