import React, { Component} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ToDos from './components/ToDos.js';
import Header from './components/layout/Header.js';
import AddToDo from './components/AddToDo.js';
import About from './components/pages/About.js';
import uuid from 'uuid';
// import axios from 'axios';

class App extends Component {
  state ={
    todos: [
      {
        id: uuid.v4(),
        title: "Take out trash",
        compelted: false
      },
      {
        id: uuid.v4(),
        title: "Walk the dog",
        compelted: false
      },
      {
        id: uuid.v4(),
        title: "Make dinner",
        compelted: false
      }
    ]
  }

  //Toggle complete, setState is a built in function
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.complete = !todo.complete;
      }
      return todo;
    })});
  }

  //... copies whats already in that array ( spread operator)
  //filter creates an array based on the a condition
  delete = (id) => {
    let newState = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: newState});
    // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  //spread operator uses whats already there and adds the additional todo
  addToDo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddToDo addToDo={this.addToDo}/>
                  <ToDos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delete={this.delete} />
                </React.Fragment>
              )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
