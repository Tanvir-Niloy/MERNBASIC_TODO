const TodoModel = require("../model/TodoModel");

const createTodo = async (req, res) => {
  const { text } = req.body;
  const todo = new TodoModel({
    text,
    isCompleted: false,
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};

const getTodos = async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { isCompleted, text } = req.body;
  const todo = await TodoModel.findById(id);

  if (todo) {
    todo.isCompleted = isCompleted;
    todo.text = text;
  } else {
    res.status(404).send("TODO IS NOT FOUND WITH GIVEN ID!");
  }
  await todo.save();
  res.json(todo);
};

const deleteTodo = async(req, res) => {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);
    await todo.remove();
    res.send("TODO DELETED SUCCESSFULLY!")
  
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
