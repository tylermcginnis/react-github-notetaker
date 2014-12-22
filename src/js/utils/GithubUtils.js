var AppConstants = require('../constants/AppConstants');
var axios = require('axios');

var GithubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos";
    return axios.get(url);
  }
};

module.exports = GithubUtils;