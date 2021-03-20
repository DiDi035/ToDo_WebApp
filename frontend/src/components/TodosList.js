import React from "react";

import TodosItem from "./TodosItem";
import Preloader from "./Preloader"

const TodosList = ({ todos }) => {
  return todos.map((todo) => <TodosItem key={todo.id} todo={todo} />);
};

export default TodosList;
