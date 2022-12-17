import { Component } from "react";
import "./cards.css"

import todos from "../../todos.json";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  render() {

    const todos = this.state.todos.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
            </div>
            {todo.title}
          </div>
        </div>
      );
    });

    return (
      <div >
        
        <div className="container mt-4">
          <div className="row mt-4 ">
              {todos}
          </div>

        </div>

        
      </div>
    );
  }
}

export default Cards;
