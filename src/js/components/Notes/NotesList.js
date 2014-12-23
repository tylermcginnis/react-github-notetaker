var React = require('React');

var NotesList = React.createClass({
  render: function(){
    var notes = this.props.notes.map(function(note){
      return <li className="list-group-item"> {note} </li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});

module.exports = NotesList;