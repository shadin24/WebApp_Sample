import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [username, setUSername] = useState("");
  return (
    <div className="App">
      <Home props={username} />
      <Todo />
    </div>
  );
}

export default App;
