import React from "react";

import "./TodosItem.css"

const TodosItem = ({todo}) => {
  return (
      <div className="todoItemContainer">
          <p>{todo.mess}</p> 
          <button className="todoItemBtn doneBtn">DONE</button>
          <button className="todoItemBtn removeBtn">REMOVE</button>
      </div>
  )
};

export default TodosItem;
