import React, { useState, useEffect } from "react";
import axios from "axios";

const get_Url = "http://localhost:8001/api/todo/getAll";

const ShowTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios
      .get(get_Url)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error has been detected", error);
      });
  };

  const deleteTodo = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8001/api/todo/deleteTodo/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.log("Error deleting the todo", error);
      });
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Todo List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-3 px-5 bg-gray-200 border-b border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="py-3 px-5 bg-gray-200 border-b border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Text
              </th>
              <th className="py-3 px-5 bg-gray-200 border-b border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo._id} className="border-b border-gray-200">
                <td className="py-3 px-5">{todo.Title}</td>
                <td className="py-3 px-5">{todo.Text}</td>
                <td className="py-3 px-5">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                    onClick={() => deleteTodo(todo._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTodo;
