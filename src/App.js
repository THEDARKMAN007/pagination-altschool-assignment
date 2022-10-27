import "./App.css";
import { Routes, Route } from "react-router-dom";
import Name from "./components/Name/Name";
import Welcome from "./components/Welcome/Welcome";
import Users from "./components/Users/Users.js";
import NotFound from "./components/404_error/404_error_page";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route  path="/" element={<Name />} />
          <Route path="/welcome" >
            <Route index element={<Welcome />} />
            <Route  path='Users'  element={<Users />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

