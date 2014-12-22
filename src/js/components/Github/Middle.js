var React = require('React');
var GithubActions = require('../../actions/GithubActions');
var GithubStore = require('../../stores/GithubStore');

var Middle = React.createClass({
  getInitialState: function(){
    return {
      repos: GithubStore.getRepos()
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
    return (
      <div>
        <div>
          REPOS: {this.state.repos}
        </div>
      </div>
    )
  }
});

module.exports = Middle;