import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodosList from "./components/TodosList/TodosList";
import Filter from "./components/Filter/Filter";
import shortid from "shortid";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos) {
      setFilteredTodos(todos);
    }
  }, [todos]);

  const handleEditTodo = ({ id }) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditTodo(todoToEdit);
    setInput(todoToEdit.name);
    setIsEditMode(true);
  };

  const handleCompleteTodo = ({ id, completed }) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !completed } : todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = ({ id }) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, name, completed) => {
    const editedTodos = todos.map((todo) => {
      return todo.id === id ? { id, name, completed } : todo;
    });
    setTodos(editedTodos);
    setEditTodo("");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!editTodo) {
      const newTodos = [
        ...todos,
        {
          id: shortid.generate(),
          name: input,
          completed: false,
        },
      ];
      setTodos(newTodos);
      setInput("");
    } else {
      updateTodo(editTodo.id, input, editTodo.completed);
      setInput("");
      setIsEditMode(false);
    }
  };

  const showAll = () => {
    setFilteredTodos(todos);
  };

  const showCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed === true);
    setFilteredTodos(completedTodos);
  };

  const showNotCompleted = () => {
    const notCompletedTodos = todos.filter((todo) => todo.completed === false);
    setFilteredTodos(notCompletedTodos);
  };

  const deleteAllCompleted = () => {
    const leftTodos = todos.filter((todo) => todo.completed === false);
    setTodos(leftTodos);
  };

  return (
    <div>
      <Header />
      <Filter
        showAll={showAll}
        showCompleted={showCompleted}
        showNotCompleted={showNotCompleted}
        deleteAllCompleted={deleteAllCompleted}
      />
      <Form
        input={input}
        value={input}
        setInput={setInput}
        handleAddTodo={handleAddTodo}
        isEditMode={isEditMode}
      />
      <TodosList
        todos={filteredTodos}
        handleEditTodo={handleEditTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
