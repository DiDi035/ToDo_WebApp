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
  };
  todos.push(newToDo);
  res.status(201).json(todos);
});

module.exports = router;
