var React = require('React');
var Router = require('react-router');
var UserStore = require('../stores/UserStore');
var Notes = require('../components/Notes/Notes');

var Profile = React.createClass({
  mixins: [ Router.State ],
  render: function(){
    /*better to get username from params or as prop?*/
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          THE USERNAME IS {username}
        </div>
        <div className="col-md-4">
          SOME OTHER GITHUB INFO
        </div>
        <div className="col-md-4">
          <Notes username={username}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;