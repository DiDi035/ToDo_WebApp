import React from "react";

import "./TodosItem.css";

const TodosItem = ({ todo, handleRemoveItem, handleDoneItem }) => {
  let itemMess = <p>{todo.mess}</p>;
  let itemDoneBtn = (
    <button
      className="todoItemBtn doneBtn"
      onClick={() => handleDoneItem(todo.id)}
    >
      DONE
    </button>
  );
  if (todo.isDone) {
    itemMess = <p className="isDoneItem">{todo.mess}</p>;
    itemDoneBtn = <button className="todoItemBtn isDoneBtn">DONE</button>;
  }
  return (
    <div className="todoItemContainer">
      {itemMess}
      {itemDoneBtn}
      <button
        className="todoItemBtn removeBtn"
        onClick={() => handleRemoveItem(todo.id)}
      >
        REMOVE
      </button>
    </div>
  );
};

export default TodosItem;
