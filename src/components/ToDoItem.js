import React from 'react'
import PropTypes from 'prop-types';

class ToDoItem extends React.Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.complete ? 'line-through' : 'none'
    }
  }

  render () {
    //pulls out the the id and task
    const {id, title} = this.props.todo;
    return(
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          {' '}
          { title }
          <button onClick={this.props.delete.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '7px 7px',
  borderRadius: '100%',
  cursor: 'pointer',
  float: 'right'
}

export default ToDoItem;
