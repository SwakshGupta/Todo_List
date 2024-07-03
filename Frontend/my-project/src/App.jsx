import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Make sure this is the correct path to your CSS file
import Home from "./components/Home";
import SignUp from "./User/signUp";
import AddTodo from "./components/addTodo";
import ShowTodo from "./components/showTodo";
import SignIn from "./User/signIn";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/Todo" element={<AddTodo />} />
          <Route path="/Todo1" element={<ShowTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
