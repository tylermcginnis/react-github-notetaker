var React = require('React');
var UserStore = require('../../stores/UserStore');
var AddNote = require('./AddNote');
var NotesList = require('./NotesList');
var NoteActions = require('../../actions/NoteActions');


var Notes = React.createClass({
  getInitialState: function(){
    return {
      notes: UserStore.getNotes()
    };
  },
  componentWillReceiveProps: function(obj){
    NoteActions.setUserRef(obj.username);
  },
  componentDidMount: function(){
    NoteActions.setUserRef(this.props.username);
    UserStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
  },
  render: function(){
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} />
        <NotesList notes={this.state.notes}/>
      </div>
    )
  },
  _onChange: function(){
    this.setState({
      notes: UserStore.getNotes()
    })
  }
});

module.exports = Notes;