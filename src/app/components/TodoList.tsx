"use client";

import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: {
    activity: string;
    price: number;
    type: string;
    bookingRequired: boolean;
    accessibility: number;
  }[];
  onDeleteTodo: (index: number) => void;
}

export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Total Items: {todos.length}</h2>
      <div className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}  // You can keep this or use a unique identifier if available
            todo={todo}
            onDeleteTodo={() => onDeleteTodo(index)} // This is fine if you are using index
          />
        ))}
      </div>
    </div>
  );
}
