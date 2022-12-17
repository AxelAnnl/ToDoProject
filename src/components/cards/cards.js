import { Component } from "react";
import "./cards.css";

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
              <p className="badge badge-pill badge-danger align-items-center">
                {todo.priority}
              </p>
            </div>
            <div className="card-body">
              <p className="col-12">{todo.description}</p>
              <p className="col-12">{todo.responsable}</p>
            </div>
            {todo.title}
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="container mt-4">
          <div className="row mt-4 d-flex">
            <div className="d-flex">
              <span className="badge badge-pill badge-light justify-content-start ">
                Tareas: {todos.length}
              </span>
            </div>

            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
