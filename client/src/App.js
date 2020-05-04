import React, { Fragment } from "react";
import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
