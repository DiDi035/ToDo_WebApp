var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

let todos = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json(todos);
});

router.post("/", function (req, res, next) {
  const newToDo = {
    id: uuidv4(),
    mess: req.body.mess,
    isDone: false,
  };
  todos.push(newToDo);
  res.status(201).json(todos);
});

router.put("/remove", function (req, res, next) {
  const { clickedID } = req.body;
  todos = todos.filter((todo) => todo.id !== clickedID);
  res.status(201).json(todos);
});

router.put("/done", function (req, res, next) {
  const { clickedID } = req.body;
  for (let i = 0; i < todos.length; ++i) {
    if (todos[i].id === clickedID) {
      todos[i].isDone = true;
      break;
    }
  }
  res.status(201).json(todos);
});

module.exports = router;
