import React from 'react'
import PropTypes from 'prop-types'

class AddToDo extends React.Component {
  state = {
    task: ''
  }

  //this sets the value of the field real time
  //e.target.name allows us to use the onChange field
  //based on the value in name we set that specific state value
  onChange = (e) => {
    this.setState(
      {[e.target.name]: e.target.value }
    );
  }

  //have to use preventDefault() to prevent default action
  //then we set the state and call addToDo passing
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.task);
    this.setState({task: ''});
  }

  render () {
    return(
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
        type="text"
        name="task"
        style={{flex: '9', padding: '5px'}}
        placeholder="Add ToDo"
        value={this.state.task}
        onChange={this.onChange}
        />
        <input
        type="submit"
        value="Submit"
        className="btn"
        style={{flex: '1'}}
        />
      </form>
    );
  }
}

export default AddToDo;
