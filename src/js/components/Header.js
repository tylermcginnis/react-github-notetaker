var React = require('React');
var SearchGithub = require('./SearchGithub');

var Header = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React/Flux Github Note Taker</a>
          </div>
          <div className="row cushion">
            <div className="col-sm-7 col-sm-offset-2">
                <SearchGithub />
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = Header;



