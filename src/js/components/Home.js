var React = require('React');
var SearchActions = require('../actions/SearchActions');
var SearchGithub = require('./SearchGithub');

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <div className="text-ce nter">
            <h1> Some Text </h1>
          </div>
        </div>
        <SearchGithub />
      </div>
    )
  }
});

module.exports = Home;