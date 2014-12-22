var React = require('React');
var GithubActions = require('../../actions/GithubActions');
var GithubStore = require('../../stores/GithubStore');

var Left = React.createClass({
  getInitialState: function(){
    return {
      user: GithubStore.getUser(),
      bio: GithubStore.getBio()
    }
  },
  componentWillReceiveProps: function(obj){
    GithubActions.changeUser(obj.username);
    GithubActions.getUserBio(obj.username);
  },
  componentDidMount: function(){
    GithubActions.changeUser(this.props.username);
    GithubActions.getUserBio(this.props.username);
    GithubStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    GithubStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      user: GithubStore.getUser(),
      bio: GithubStore.getBio()
    });
  },
  render: function(){
    return (
      <div>
        {this.state.user}
        <div>
          {this.state.bio}
        </div>
      </div>
    )
  }
});

module.exports = Left;