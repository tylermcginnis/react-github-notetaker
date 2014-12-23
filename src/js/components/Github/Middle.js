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
        <div>
          <p> Name: {repo.name} </p>
          <p> Description: {repo.description} </p>
          <p> Location: <a href={repo.url}> {repo.name} </a> </p>
        </div>
      )
    });
    return (
      <div>
        <div>
          TEST
          {repos}
        </div>
      </div>
    )
  }
});

module.exports = Middle;