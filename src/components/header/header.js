import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <section className="head container-fluid pr-5">
        <div className="row align-items-center height-100">
          <div className="col-md-6 col-12">
            <h1 className="text-center header-title">Tareas que Hacer</h1>
          </div>
          <div className="col-md-6 col-12 align-items-center justify-content-end d-flex">
            <button className="margen btn">boton1</button>
            <button className="margen btn">boton2</button>
          </div>
        </div>
      </section>
    );
  }
}
export default Header;
