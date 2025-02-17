"use client";

import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist";  

export default function Home() {
  const [todos, setTodos] = useState<Array<{
    activity: string;
    price: number;
    type: string;
    bookingRequired: boolean;
    accessibility: number;
  }>>([]);

  // Add new to-do item
  const addTodo = (newTodo: {
    activity: string;
    price: number;
    type: string;
    bookingRequired: boolean;
    accessibility: number;
  }) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Delete to-do item
  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Persist to localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Build your To-Do List !</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />

    </main>
  );
}
