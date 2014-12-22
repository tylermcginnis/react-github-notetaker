var React = require('React');
var NoteActions = require('../../actions/NoteActions');
var NotesStore = require('../../stores/NotesStore');

var AddNote = React.createClass({
  getInitialState: function(){
    return {newNote: ''}
  },
  handleChange: function(e){
    this.setState({newNote: e.target.value});
  },
  handleSubmit: function(){
    var user = NotesStore.getState().user;
    NoteActions.addNote({user: user, note: this.state.newNote});
    this.setState({newNote: ''});
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.newNote} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}> Submit </button>
      </div>
    )
  }
});

module.exports = AddNote;