var React = require('React');
var NotesStore = require('../../stores/NotesStore');
var AddNote = require('./AddNote');
var NotesList = require('./NotesList');
var NoteActions = require('../../actions/NoteActions');

var Notes = React.createClass({
  getInitialState: function(){
    return {
      notes: NotesStore.getState().notes
    };
  },
  componentWillReceiveProps: function(obj){
    //invoked whenever the route changes usernames
    NoteActions.changeUser(obj.username);
  },
  componentDidMount: function(){
    NoteActions.changeUser(this.props.username);
    NotesStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    NotesStore.removeChangeListener(this._onChange);
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
      notes: NotesStore.getState().notes
    })
  }
});

module.exports = Notes;