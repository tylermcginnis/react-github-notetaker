var React = require('React');
var Link = require('react-router').Link;

var SearchGithub = React.createClass({
  getInitialState: function(){
    return {username: ''}
  },
  handleChange: function(e){
    this.setState({username: e.target.value});
  },
  handleSubmit: function(){
    alert(this.state.username);
  },
  render: function(){
    return (
      <div>
        <div className="col-md-offset-3">
          <div className="col-md-5">
            <input type="text" className="form-control" value={this.state.username} onChange={this.handleChange}/>
          </div>
          <div className="col-md-3">
            <button className="btn btn-block btn-primary"><Link to="profile" params={{username: this.state.username}}> Search Github </Link></button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SearchGithub;