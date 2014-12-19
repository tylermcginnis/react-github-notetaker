var React = require('React');

var Footer = React.createClass({
  render: function(){
    return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>
    )
  }
});

module.exports = Footer;