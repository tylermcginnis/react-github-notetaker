var React = require('React');
var NoteActions = require('../../actions/NoteActions');

var AddNote = React.createClass({
  getInitialState: function(){
    return {newNote: ''}
  },
  handleChange: function(e){
    this.setState({newNote: e.target.value});
  },
  handleSubmit: function(){
    NoteActions.addNote(this.state.newNote);
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