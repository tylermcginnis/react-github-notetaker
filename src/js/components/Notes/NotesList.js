var React = require('React');

var NotesList = React.createClass({
  render: function(){
    var notes = this.props.notes.map(function(note){
      return <li> {note} </li>
    });
    return (
      <ul>
        {notes}
      </ul>
    )
  }
});

module.exports = NotesList;