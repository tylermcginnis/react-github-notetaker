var React = require('React');
var GithubActions = require('../actions/GithubActions');
var SearchGithub = require('./SearchGithub');

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <div className="text-center">
            <h1> Enter a Github User </h1>
          </div>
        </div>
        <div className="col-md-offset-3">
          <SearchGithub />
        </div>
        <div className="col-md-12 text-center">
          <h5> *Source Code Can Be Found <a href="https://github.com/tylermcginnis/react-github-notetaker"> Here </a> </h5>
        </div>
      </div>
    )
  }
});

module.exports = Home;