import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShowTodo from "./showTodo";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from the server
  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/todo/getTodos"
      );
      setTodos(response.data.todos);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  // Fetch todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = () => {
    if (title.trim() !== "" && text.trim() !== "") {
      axios
        .post("http://localhost:8001/api/todo/addTodo", {
          Title: title,
          Text: text,
        })
        .then((response) => {
          // Update todos state with the new todo
          setTodos([...todos, response.data.newTodo]);
          setText("");
          setTitle("");
        })
        .catch((error) => {
          console.log("Error adding todo:", error);
        });
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:8001/api/logout");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black rounded-lg relative">
      <h1 className="text-2xl font-semibold mb-4 text-white">Add Todo</h1>

      <div className="mb-6">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="border border-gray-300 rounded-md w-full p-3 bg-gray-800 text-white"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          id="title"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="text"
        >
          Text
        </label>
        <input
          className="border border-gray-300 rounded-md w-full p-3 bg-gray-800 text-white"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          id="text"
        />
      </div>

      <Link
        to="/signup"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded absolute top-0 right-0 mt-2 mr-2"
        onClick={logout}
      >
        Logout
      </Link>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
        onClick={handleSubmit}
      >
        Add Todo
      </button>

      {/* Render ShowTodo component to display todos */}
      <ShowTodo todos={todos} />
    </div>
  );
};

export default AddTodo;
