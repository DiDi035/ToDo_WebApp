import React, { useRef } from "react";
import "./ToDoInput.css"

const ToDoInput = ({ createToDo }) => {
  const todoInput = useRef("");
  const handleSubmid = (e) => {
    e.preventDefault();
    if (todoInput.current.value.replace(/ /g,'') !== "") {
      createToDo(todoInput.current.value);
      todoInput.current.value = "";
    }
  };
  return (
    <form onSubmit={handleSubmid}>
      <input type="text" ref={todoInput} className="input" />
      <button type="submit" className="submitBtn">Add</button>
    </form>
  );
};

export default ToDoInput;
