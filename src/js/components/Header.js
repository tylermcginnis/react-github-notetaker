var React = require('React');
var SearchGithub = require('./SearchGithub');

var Header = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
});

module.exports = Header;



