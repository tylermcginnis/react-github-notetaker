var React = require('React');
var GithubActions = require('../../actions/GithubActions');
var GithubStore = require('../../stores/GithubStore');

var Left = React.createClass({
  getInitialState: function(){
    return {
      user: '',
      bio: {}
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
        <p> Avatar: <img src={this.state.bio.avatar_url}/> </p>
        <p> Company: {this.state.bio.company} </p>
        <p> Email: {this.state.bio.email} </p>
        <p> Followers: {this.state.bio.followers} </p>
        <p> Following: {this.state.bio.following} </p>
        <p> Location: {this.state.bio.location} </p>
        <p> Name: {this.state.bio.name} </p>
        <p> Public Repos: {this.state.bio.public_repos} </p>
        <p> Username: {this.state.bio.login} </p>
        <p> Blog: {this.state.bio.blog} </p>
      </div>
    )
  }
});

module.exports = Left;