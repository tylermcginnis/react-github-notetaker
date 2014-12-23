var React = require('React');
var GithubActions = require('../../actions/GithubActions');
var GithubStore = require('../../stores/GithubStore');

var Middle = React.createClass({
  getInitialState: function(){
    return {
      repos: []
    }
  },
  componentWillReceiveProps: function(obj){
    GithubActions.getUserRepos(obj.username);
  },
  componentDidMount: function(){
    GithubActions.getUserRepos(this.props.username);
    GithubStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    GithubStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      repos: GithubStore.getRepos()
    });
  },
  render: function(){
    var repos = this.state.repos.map(function(repo){
      return (
        <li className="list-group-item">
          {repo.url && <p><h4><a href={repo.url}>{repo.name}</a></h4></p>}
          {repo.description && <p> {repo.description} </p>}
        </li>
      )
    });
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    )
  }
});

module.exports = Middle;