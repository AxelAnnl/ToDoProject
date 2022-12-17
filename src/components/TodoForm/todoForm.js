import React, { Component } from "react";
import "./form.css";
class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsable: "",
      description: "",
      priority: "",
    };
  }

  handleInput() {
    console.log("escribiendo");
  }

  render() {
    return (
      <section>
        <div className=" m-1">
            <h3>Agregar Tarea</h3>
        </div>
        <form className="card ">
          <section className="card-body">
            <div className="form-grup mb-3">
              <label> Titulo de la tarea </label>
              <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                aria-describedby="title"
                placeholder="Enter title"
              ></input>
              <small className="form-text text-muted">El nombre de la tarea</small>
            </div>
            <div className="form-grup mb-3">
              <label> Responsable </label>
              <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                aria-describedby="responsable"
                placeholder="Enter responsable"
              ></input>
              <small className="form-text text-muted">Persona que llevará acabo la tarea</small>
            </div>
            <div className="form-grup mb-3">
              <label> Descripcion </label>
              <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                aria-describedby="description"
                placeholder="Enter descripction"
              ></input>
              <small className="form-text text-muted">Descripcion de la tarea</small>
            </div>
            <div className="form-grup mb-3">
              <label> Prioridad </label>
              <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                aria-describedby="Priority"
                placeholder="Enter priority"
              ></input>
              <small className="form-text text-muted">La importancia de la tarea</small>
            </div>
          </section>
        </form>
      </section>
    );
  }
}

export default TodoForm;
