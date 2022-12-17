import { Component } from "react";
import "./App.css";
import Cards from "./components/cards/cards";
import Header from "./components/header/header";
import TodoForm from "./components/TodoForm/todoForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container d-flex ">
          <div className="row align-items-top">
            <div className="col-9">
              <Cards />
            </div>
            <div className="col-md-3 col-12 mt-5">
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
