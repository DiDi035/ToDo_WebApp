import React from "react";

import TodosItem from "./TodosItem";
import Preloader from "./Preloader";

const TodosList = ({ todos, removeItem, doneItem }) => {
  return todos.map((todo) => (
    <TodosItem
      key={todo.id}
      todo={todo}
      handleRemoveItem={removeItem}
      handleDoneItem={doneItem}
    />
  ));
};

export default TodosList;
