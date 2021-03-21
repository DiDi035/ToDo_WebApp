import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import TodosList from "./components/TodosList";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";

const DOMAIN = "http://localhost:";
const PORT = 3000;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    const res = await axios.get(DOMAIN + PORT);
    setItems(res.data);
    setIsLoading(false);
  };
  const createToDo = async (text) => {
    const res = await axios.post(DOMAIN + PORT, { mess: text });
    setItems(res.data);
  };
  const removeItem = async (clickedID) => {
    const res = await axios.put(DOMAIN + PORT + "/remove", { clickedID });
    setItems(res.data);
  }
  const doneItem = async (clickedID) => {
    const res = await axios.put(DOMAIN + PORT + "/done", { clickedID });
    setItems(res.data);
  }
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div className="container">
      <Header />
      <ToDoInput createToDo={createToDo} />
      <TodosList removeItem={removeItem} doneItem={doneItem} todos={items} />
    </div>
  );
}

export default App;
