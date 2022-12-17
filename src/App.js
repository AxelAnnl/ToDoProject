import { Component } from "react";
import "./App.css";
import Cards from "./components/cards/cards";
import Header from "./components/header/header";


class App extends Component {

  render() {


    return (
      <div className="">
        <Header/>
        <Cards/>
      </div>
    );
  }
}

export default App;
