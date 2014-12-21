var React = require('React');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  getInitialState: function(){
    return {username: ''}
  },
  handleChange: function(e){
    this.setState({username: e.target.value});
  },
  handleSubmit: function(){
    this.transitionTo('profile', {username: this.state.username});
  },
  render: function(){
    return (
      <div>
        <div className="col-md-offset-3">
          <div className="col-md-5">
            <input type="text" className="form-control" value={this.state.username} onChange={this.handleChange}/>
          </div>
          <div className="col-md-3">
            <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>Search Github</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SearchGithub;