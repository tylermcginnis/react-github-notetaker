var React = require('React');
var Home = require('./Home');
var Header = require('./Header');
var Footer = require('./Footer');

var App = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <Header />
        <div className="container inner-container">
          <Home />
        </div>
        <Footer />
      </div>
    )
  }
});

module.exports = App;