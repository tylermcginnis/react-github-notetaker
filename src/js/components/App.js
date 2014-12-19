var React = require('React');
var Home = require('./Home');
var Header = require('./Header');
var Footer = require('./Footer');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <Header />
        <div className="container inner-container">
          <RouteHandler />
        </div>
        <Footer />
      </div>
    )
  }
});

module.exports = App;