import "./App.css";
// import cross from "./assets/icon-check.svg";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const addTodo = () => {
    setList([...list, { description: input, completed: false }]);
    setInput("");
  };

  return (
    <div className="App">
      <section className="header">
        <div className="todo-logo">TODO</div>
      </section>
      <section className="create-task">
        <div className="addTask">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Create a new todo"
          ></input>
        </div>
        <div className="add-button">
          <button onClick={addTodo}>+</button>
        </div>
      </section>
      <section className="tasks">
        {list.map((todo) => (
          <div className="todo-list">{todo.description}</div>
        ))}
      </section>
    </div>
  );
}

export default App;
