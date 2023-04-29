import React from "react";
import Context from "./components/Context";
import "./styles.css";
import Todos from "./components/Todos";
import InputForm from "./components/InputForm";
import { useState } from "react";
import Curency from "./components/Curency";
export default function TodoList() {
  const [inputForTodo, setInputForTodo] = useState("");
  const [arrayForTodo, setArrayForTodo] = useState([]);
  const [dateForTodo, setDateForTodo] = useState();
  const value = {
    inputForTodo,
    setInputForTodo,
    setArrayForTodo,
    arrayForTodo,
    inputForTodo,
    dateForTodo,
    setDateForTodo,
  };

  return (
    <Context.Provider value={value}>
      <div className="todo-container">
        <h1>Todo List</h1>
        <InputForm />
        <Todos />
        <Curency />
      </div>
    </Context.Provider>
  );
}
