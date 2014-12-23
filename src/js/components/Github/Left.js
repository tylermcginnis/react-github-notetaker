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
        <h3> User Profile </h3>
        <ul className="list-group">
          {this.state.bio.avatar_url && <li className="list-group-item"> <img src={this.state.bio.avatar_url} className="img-rounded img-responsive"/> </li>}
          {this.state.bio.name && <li className="list-group-item"> {this.state.bio.name} </li>}
          {this.state.bio.login && <li className="list-group-item"> Username: {this.state.bio.login} </li>}
          {this.state.bio.email && <li className="list-group-item"> Email: {this.state.bio.email} </li>}
          {this.state.bio.location && <li className="list-group-item"> Location: {this.state.bio.location} </li>}
          {this.state.bio.company && <li className="list-group-item"> Company: {this.state.bio.company} </li>}
          {this.state.bio.followers && <li className="list-group-item"> Followers: {this.state.bio.followers} </li>}
          {this.state.bio.following && <li className="list-group-item"> Following: {this.state.bio.following} </li>}
          {this.state.bio.following && <li className="list-group-item"> Public Repos: {this.state.bio.public_repos} </li>}
          {this.state.bio.email && <li className="list-group-item"> Blog: {this.state.bio.blog} </li>}
        </ul>
      </div>
    )
  }
});

module.exports = Left;