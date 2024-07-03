const TODO = require("../models/todo");

const getAll = async (req, res) => {
  try {
    const todos = await TODO.find(); // here we have used the find function to find all the todos

    if (todos.length == 0) {
      return res.status(404).json({ message: "your todo is empty" });
    }

    return res.status(200).json(todos);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Internal server error" });
  }
};

const addTodo = async (req, res) => {
  const { Title, Text, Completed } = req.body;

  try {
    const newtodo = new TODO({
      Title,
      Text,
      Completed,
    });

    const savedTodo = await newtodo.save();

    return res.status(201).json(savedTodo);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "internal server error" });
  }
};
const deleteTodo = async (req, res) => {
  const id = req.params.id; // it will get id from the params

  try {
    const deleteTodo = await TODO.findByIdAndDelete(id);

    if (!deleteTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "internal server error" });
  }
};

const getById = async (req, res) => {
  const id = req.params.id; // it will get id from the params

  try {
    const todo = await TODO.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  addTodo,
  deleteTodo,
  getAll,
  getById,
};

// promise is data which is to be recieve so we have to method .then and .catch to get the data

/*

In the provided code, database operations (like TODO.find()) are asynchronous. 
This means that they take some time to complete and return a promise. 
If we don't use await, the function will continue executing without waiting for the database operation to finish, 
leading to potential issues such as accessing data that hasn't been retrieved yet.

try Block: This block contains code that may throw an error. If an error occurs, the control is transferred to the catch block.

catch Block: This block contains code that handles any error thrown in the try block. It receives the error as an argument and allows us to handle it appropriately.

When working with asynchronous operations, errors can occur (e.g., database connection issues, query errors). 
Using try and catch allows us to handle these potential errors gracefully.








*/
